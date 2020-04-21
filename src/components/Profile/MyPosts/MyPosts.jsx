import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  const addPost = () => {
    props.dispatch({ type: 'ADD_POST' });
  };

  const onPostChange = (e) => {
    props.dispatch({
      type: 'UPDATE_NEW_POST_TEXT',
      payload: e.target.value,
    });
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
