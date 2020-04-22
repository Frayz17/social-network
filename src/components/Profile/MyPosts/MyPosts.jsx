import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostCreator, updateNewPostTextCreator } from 'redux/profileReducer';

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  const addPost = () => {
    props.dispatch(addPostCreator());
  };

  const onPostChange = (e) => {
    const action = updateNewPostTextCreator(e.target.value);
    props.dispatch(action);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>

      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText} />
        </div>

        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
