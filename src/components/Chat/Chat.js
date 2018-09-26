import React, { Component } from "react";
import io from "socket.io-client";
import { connect } from "react-redux";
import { USER_CONNECTED, LOGOUT } from "./socketEvents";
import ChatContainer from "./chats/ChatContainer";
import "./Chat.css";

const socketUrl = "http://localhost:3001";
class Chat extends Component {
  constructor(props) {
    super(props);
    //initial state of socket and user is null
    this.state = {
      socket: null,
      user: null,
      userName: ""
    };
  }

  componentDidMount() {
    this.initSocket();
    // console.log(this.props.match.params);
    this.setState({ userName: this.props.match.params.name });
  }

  /*
	*	Connect to and initializes the socket.
	*/
  initSocket = () => {
    const socket = io(socketUrl);

    socket.on("connect", () => {
      console.log("Connected!!!");
    });

    this.setState({ socket }, () => this.setUser());
  };
  setUser = () => {
    const { socket } = this.state;

    let user = {
      id: this.props.user.authID,
      name: this.props.user.fullname
    };

    socket.emit(USER_CONNECTED, user);

    this.setState({ user }, () => console.log(user));
  };
  logout = () => {
    const { socket } = this.state;
    socket.emit(LOGOUT);
    this.setState({ user: null });
  };

  render() {
    const { socket, user } = this.state;
    return (
      <div className="container">
        <ChatContainer
          userName={this.state.userName}
          socket={socket}
          user={user}
          logout={this.logout}
        />
      </div>
    );
  }
}

export default connect(state => state)(Chat);
