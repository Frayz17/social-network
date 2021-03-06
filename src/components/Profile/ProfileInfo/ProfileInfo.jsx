import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "components/common/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      {/* <div>
        <img
          src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
          alt=""
        />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="profile" />
        <div>
          full name: <span>{props.profile.fullName}</span>
        </div>
        <div>
          about me: <span>{props.profile.aboutMe}</span>
        </div>
        <ProfileStatus status={"Hello My Friends"} />
      </div>
    </div>
  );
};

export default ProfileInfo;
