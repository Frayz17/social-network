import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({
  addMessage,
  updateNewMessageText,
  newMessageText,
  messages,
  dialogs,
  isAuth,
}) => {
  const dialogsElements = dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));
  const messagesElements = messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  const onAddMessageClick = () => {
    addMessage();
  };

  const onMessageChange = (e) => {
    updateNewMessageText(e.target.value);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>

      <div>
        <div>
          <textarea onChange={onMessageChange} value={newMessageText} />
        </div>
        <div>
          <button onClick={onAddMessageClick}>add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
