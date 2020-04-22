import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from 'redux/dialogsReducer';

const Dialogs = (props) => {
  const newMessageText = props.state.newMessageText;

  const dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));
  const messagesElements = props.state.messages.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  const onAddMessageClick = () => {
    props.dispatch(addMessageCreator());
  };

  const onMessageChange = (e) => {
    const action = updateNewMessageTextCreator(e.target.value);
    props.dispatch(action);
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
