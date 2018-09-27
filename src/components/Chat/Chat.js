import React, { Component } from "react";
import io from "socket.io-client";
import { connect } from "react-redux";
import { USER_CONNECTED, LOGOUT } from "./SocketEvents";
import SetUser from "./setUser";
import ChatContainer from "./chats/ChatContainer";
import "./Chat.css";
import { getProfile } from "../../ducks/userReducer";

const socketUrl = process.env.REACT_APP_SERVER;
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
    this.props.getProfile(this.props.match.params.shelter).then(response => {
      // console.log(this.props.match.params.userid);
      console.log(response);
      this.setState({ userName: response.value.data[0].fullname });
    });
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
      id: this.props.match.params.user,
      name: this.props.user.fullname || "Ashley"
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
        {!user ? (
          <SetUser socket={socket} setUser={this.setUser} />
        ) : (
          //if there is a user, then we're going to put a chat container on the dom
          //it gets a socket, a user, and a logout function
          <ChatContainer
            userName={this.state.userName}
            socket={socket}
            user={user}
            logout={this.logout}
          />
        )}
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
)(Chat);
