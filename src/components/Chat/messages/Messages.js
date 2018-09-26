import React, { Component } from "react";
import "../Chat.css";

class Messages extends Component {
  constructor(props) {
    super(props);

    //   this.scrollDown = this.scrollDown.bind(this);
    // }
    // scrollDown() {
    //   const { container } = this.refs;
    //   container.scrollTop = container.scrollHeight;
    // }
    // componentDidMount() {
    //   this.scrollDown();
    // }

    // componentDidUpdate(prevProps, prevState) {
    //   this.scrollDown();
  }
  render() {
    const { messages, user, typingUsers } = this.props;
    return (
      <div ref="container" className="thread-container">
        <div className="thread">
          {messages.map(mes => {
            return (
              <div
                key={mes.messageId}
                className={`message-container ${mes.sender === user.fullname &&
                  "right"}`}
              >
                <div className="time">{mes.time}</div>
                <div className="data">
                  <div className="message">{mes.message}</div>
                  <div className="name">{mes.sender}</div>
                </div>
              </div>
            );
          })}
          {typingUsers.map(fullname => {
            return (
              <div key={fullname} className="typing-user">
                {`${fullname} is typing . . .`}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Messages;
