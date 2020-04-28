import Dialogs from "./Dialogs";
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from "store/dialogsReducer";
import { connect } from "react-redux";

const mapToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    addMessage: () => dispatch(addMessageCreator()),
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextCreator(text));
    },
  };
};

const DialogsContainer = connect(
  mapToProps,
  dispatchToProps
)(Dialogs);

export default DialogsContainer;
