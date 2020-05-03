import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./users.module.css";
import userImg from "assets/images/user.png";

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((pageNumber) => (
          <span
            key={pageNumber}
            onClick={(e) => props.onPageChanged(pageNumber)}
            className={
              pageNumber === props.currentPage ? styles.selectedPage : ""
            }
          >
            {pageNumber}
          </span>
        ))}
      </div>

      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={`profile/${user.id}`}>
                <img
                  src={user.photos.small != null ? user.photos.small : userImg}
                  className={styles.userPhoto}
                  alt=""
                />
              </NavLink>
            </div>

            <div>
              {user.followed === false ? (
                <button
                  disabled={props.followingInProgress.includes(user.id)}
                  onClick={() => props.followUser(user.id)}
                >
                  follow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.includes(user.id)}
                  onClick={() => props.unFollowUser(user.id)}
                >
                  unfollow
                </button>
              )}
            </div>
          </span>

          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              {/* <div>{user.location.country}</div>
                <div>{user.location.city}</div> */}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
