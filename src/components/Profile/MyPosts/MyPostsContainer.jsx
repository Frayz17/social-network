import MyPosts from "./MyPosts";
import { addPostCreator, updateNewPostTextCreator } from "store/profileReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostCreator()),
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextCreator(text));
    },
  };
};

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;
