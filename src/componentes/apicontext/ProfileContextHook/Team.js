import React, { useContext } from 'react';
import { ProfileContext } from "./ProfileContext";

const Team = () => {
    const [userInfo, setUserInfo] = useContext(ProfileContext);
    return (
      <div className="team">
        <p className="profile-team">{userInfo.team}</p>
      </div>
    )
  }

  export default Team