import React, { Component } from "react";
import axios from "axios";
import SideBar from "./SideBar";
import {
  COMMUNITY_CHAT,
  MESSAGE_SENT,
  MESSAGE_RECIEVED,
  TYPING,
  PRIVATE_MESSAGE
} from "../SocketEvents";
import ChatHeading from "./ChatHeading";
import { getProfile } from "../../../ducks/userReducer";
import Messages from "../messages/Messages";
import MessageInput from "../messages/MessageInput";
import "../Chat.css";

import { connect } from "react-redux";

class ChatContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: [],
      user: {},
      userName: this.props.user.fullname,
      activeChat: null
    };
  }

  //HAVING ISSUE GETTING ID
  componentDidMount() {
    // this.props.getProfile(this.props.match.param.id).then(response => {
    //   this.setState({ user: response.value.data[0] });
    // });
    const { socket } = this.props;

    console.log(this.props);
    // const { name } = this.props.match.params;
    //initiales everything that we need for our sockets

    this.initSocket(socket);
  }

  initSocket(socket) {
    const { user } = this.props;
    socket.emit(COMMUNITY_CHAT, this.resetChat);
    //setting socket.on to private message, and when that happens you add a chat
    socket.on(PRIVATE_MESSAGE, this.addChat);
    //this is going to reset the entire chat if someone disconnects
    socket.on("connect", () => {
      socket.emit(COMMUNITY_CHAT, this.resetChat);
    });
    //sender is us, reciever is rando
    socket.emit(PRIVATE_MESSAGE, { reciever: "mike", sender: user.fullname });
  }

  sendOpenPrivateMessage = reciever => {
    const { socket, user } = this.props;
    //getting socket from props
    //sender is US
    socket.emit(PRIVATE_MESSAGE, { reciever, sender: user.fullname });
  };
  resetChat = chat => {
    return this.addChat(chat, true);
  };
  addChat = (chat, reset = false) => {
    const { socket } = this.props;
    const { chats } = this.state;
    const { id } = this.props.user;

    const newChats = reset ? [chat] : [...chats, chat];

    this.setState({
      chats: newChats,
      activeChat: reset ? chat : this.state.activeChat
    });

    ///REQUEST
    axios
      .post("/api/user/chat", {
        id: id,
        chats: newChats
      })
      .then(response => {
        console.log(response);
      });
    const messageEvent = `${MESSAGE_RECIEVED}-${chat.chatIdObj}`;
    const typingEvent = `${TYPING}-${chat.chatIdObj}`;

    socket.on(typingEvent, this.updateTypingInChat(chat.chatIdObj));
    socket.on(messageEvent, this.addMessageToChat(chat.chatIdObj));
  };
  addMessageToChat = chatId => {
    return message => {
      let newMessages = [];
      const { chats } = this.state;
      let newChats = chats.map(chat => {
        if (chat.chatIdObj === chatId) {
          chat.messages.push(message);
          newMessages = chat.messages;
        }
        return chat;
      });

      this.setState({ chats: newChats });

      ///REQUEST
      axios
        .post("/api/user/chat/update", {
          id: chatId,
          newMessages
        })
        .then(response => {});
    };
  };
  updateTypingInChat = chatId => {
    return ({ isTyping, user }) => {
      if (user !== this.props.user.fullname) {
        const { chats } = this.state;

        let newChats = chats.map(chat => {
          if (chat.chatIdObj === chatId) {
            if (isTyping && !chat.typingUsers.includes(user)) {
              chat.typingUsers.push(user);
            } else if (!isTyping && chat.typingUsers.includes(user)) {
              chat.typingUsers = chat.typingUsers.filter(u => u !== user);
            }
          }
          return chat;
        });
        this.setState({ chats: newChats });
      }
    };
  };
  sendMessage = (chatId, message) => {
    const { socket } = this.props;
    axios
      .put("/api/user/chat", {
        chatId,
        message,
        sender: this.props.user.fullname
      })
      .then(newMessages => console.log(newMessages.data));
    socket.emit(MESSAGE_SENT, { chatId, message });
  };
  sendTyping = (chatId, isTyping) => {
    const { socket } = this.props;
    socket.emit(TYPING, { chatId, isTyping });
  };
  setActiveChat = activeChat => {
    this.setState({ activeChat });
    console.log(activeChat);
  };
  render() {
    //pulling in user and logout functions from Chat.js... that's what we're sending back
    const { user, logout } = this.props;
    const { chats, activeChat } = this.state;
    console.log(this.state.chats);
    return (
      <div className="container">
        <SideBar
          userName={this.state.userName}
          logout={logout}
          chats={chats}
          user={user}
          activeChat={activeChat}
          setActiveChat={this.setActiveChat}
          onSendPrivateMessage={this.sendOpenPrivateMessage}
        />
        <div className="chat-room-container">
          {/*if the active chat isnt null, we're going to return a chat heading, all of our messages inside active chat
and the input to send a new message*/}
          {activeChat !== null ? (
            <div className="chat-room">
              <ChatHeading name={`${this.props.userName}`} />
              <Messages
                messages={activeChat.messages}
                user={user}
                typingUsers={activeChat.typingUsers}
              />
              <MessageInput
                sendMessage={message => {
                  this.sendMessage(activeChat.chatIdObj, message);
                }}
                sendTyping={isTyping => {
                  this.sendTyping(activeChat.chatIdObj, isTyping);
                }}
              />
            </div>
          ) : (
            <div className="chat-room choose">
              <h3>Choose a chat</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  {
    getProfile
  }
)(ChatContainer);
