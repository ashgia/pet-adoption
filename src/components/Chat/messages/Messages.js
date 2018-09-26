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
    var formattedTime = "";
    return (
      <div ref="container" className="thread-container">
        <div className="thread">
          {messages.map((mes, i) => {
            console.log(mes);
            let hours = mes.time.slice(0, 2);
            if (parseInt(hours, 10) > 12) {
              formattedTime =
                JSON.stringify(hours - 12) + mes.time.slice(2) + " PM";
            } else {
              formattedTime = JSON.stringify(mes.time) + " AM";
            }
            if ((i + 1) % 2 === 0) {
              return (
                <div
                  key={mes.messageId}
                  className={`message-container ${mes.sender ===
                    user.fullname && "right"}`}
                >
                  <div className="time">{formattedTime}</div>
                  <div className="data">
                    <div className="message">{mes.message}</div>
                    <div className="name">{mes.sender}</div>
                  </div>
                </div>
              );
            } else null;
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
