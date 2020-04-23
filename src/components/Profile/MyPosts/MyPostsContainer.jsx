import React from 'react';
import MyPosts from './MyPosts';
import { addPostCreator, updateNewPostTextCreator } from 'redux/profileReducer';

const MyPostsContainer = (props) => {
  const state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostCreator());
  };

  const onPostChange = (text) => {
    const action = updateNewPostTextCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      newPostText={state.profilePage.newPostText}
      posts={state.profilePage.posts}
    />
  );
};

export default MyPostsContainer;
