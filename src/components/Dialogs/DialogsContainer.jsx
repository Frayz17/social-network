import React from 'react';
import Dialogs from './Dialogs';
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from 'redux/dialogsReducer';

const DialogsContainer = ({ store }) => {
  const state = store.getState();

  const dialogs = state.dialogsPage.dialogs;
  const messages = state.dialogsPage.messages;
  const newMessageText = state.dialogsPage.newMessageText;

  const addMessage = () => {
    store.dispatch(addMessageCreator());
  };

  const updateNewMessageText = (text) => {
    const action = updateNewMessageTextCreator(text);
    store.dispatch(action);
  };

  return (
    <Dialogs
      addMessage={addMessage}
      updateNewMessageText={updateNewMessageText}
      newMessageText={newMessageText}
      dialogs={dialogs}
      messages={messages}
    />
  );
};

export default DialogsContainer;
