const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

const initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-kamasutra?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: 6,
        message: state.newMessageText,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: "",
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return { ...state, newMessageText: action.payload };

    default:
      return state;
  }
};

export const addMessageCreator = () => {
  return { type: SEND_MESSAGE };
};

export const updateNewMessageTextCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    payload: text,
  };
};

export default dialogsReducer;
