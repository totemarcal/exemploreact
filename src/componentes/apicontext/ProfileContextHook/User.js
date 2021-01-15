import React, { useContext } from 'react';
import { ProfileContext } from "./ProfileContext";
import Team from './Team'
import ChangeTeam from './ChangeTeam'

const User = () => {
    const [userInfo, setUserInfo] = useContext(ProfileContext);
    return (
      <div className="user">
        <a href={userInfo.url}>
          <img src={userInfo.userImage} width="138px" />
        </a>
        <h1 className="profile-userName">{userInfo.userName}</h1>
        <p className="profile-fullName">({userInfo.fullName})</p>
        <Team />
        <ChangeTeam />
      </div>
    )
  }
  
  export default User