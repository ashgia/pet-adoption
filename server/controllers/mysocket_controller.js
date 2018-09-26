module.exports = {
  getChats: (req, res) => {
    const { name } = req.params;

    Chat.find({ users: name }).then(chats => res.status(200).send(chats[0]));
  },
  addChat: (req, res) => {
    const { chatIdObj, name, messages, users, typingUsers } = req.body;
    const newChat = new Chat({
      _id: chatIdObj,
      name,
      messages,
      users,
      typingUsers
    });
    newChat
      .save()
      .then(response => {
        res.status(200).send(newChat);
      })
      .catch(err => console.log("Can't add chat " + err));
  },
  addMessageToChat: (req, res) => {
    const { id } = req.body;
    const newMessages = req.body.chatArray[0].messages;
    console.log("messages ------ ", newMessages);

    Chat.findById(id, (err, chat) => {
      chat.set({ "chats.0.messages": newMessages });
      chat.save((err, updatedChat) => {
        // console.log(updatedChat);
      });
    });
  },
  addMessage: (req, res) => {
    const { chatId, message, sender } = req.body;

    Chat.findOneAndUpdate(
      { "chats.0.chatIdObj": chatId },
      { $push: { "chats.0.messages": { message, sender } } },
      { new: true }
    ).then(newMessages => res.status(200).send(newMessages));
  }
};
