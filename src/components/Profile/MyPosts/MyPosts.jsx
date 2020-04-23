import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = ({ updateNewPostText, addPost, posts, newPostText }) => {
  const postsElements = posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  const onAddPost = () => {
    addPost();
  };

  const onPostChange = (e) => {
    updateNewPostText(e.target.value);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>

      <div>
        <div>
          <textarea onChange={onPostChange} value={newPostText} />
        </div>

        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
