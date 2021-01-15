import React, { useContext } from 'react';
import User from './User'
import { ProfileContext } from "./ProfileContext";


const Profile = () => {
    const [userInfo] = useContext(ProfileContext);
    return (
      <div className="profile">
        <img src={userInfo.companyImage} />
        <User />
      </div>
    )
  }
  
  export default Profile