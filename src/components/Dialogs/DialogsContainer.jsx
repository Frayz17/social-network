import Dialogs from "./Dialogs";
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from "store/dialogsReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import WithAuthRedirect from "hoc/WithAuthRedirect";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => dispatch(addMessageCreator()),
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextCreator(text));
    },
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter,
  WithAuthRedirect
)(Dialogs);
