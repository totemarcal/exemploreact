import React, { Component, useContext } from 'react';
import { render } from 'react-dom';
import './style.css';

// Look Ma, No Provider
const ProfileContext = React.createContext({
  company: 'Progress',
  companyImage: 'https://svgshare.com/i/9ir.svg',
  url: 'https://www.telerik.com/kendo-react-ui/',
  userImage: 'https://i.imgur.com/Y1XRKLf.png',
  userName: 'Kendoka',
  fullName: 'Kendō No Arikata',
  team: 'KendoReact'
});

const Profile = () => {
  const context = useContext(ProfileContext);
  return (
    <div className="profile">
      <img src={context.companyImage}/>
      <User />
    </div>
  )
}

const User = () => {
  const context = useContext(ProfileContext);
  return (
    <div className="user">
      <a href={context.url}>
        <img src={context.userImage} width="138px" />
      </a>
      <h1 className="profile-userName">{context.userName}</h1>
      <p className="profile-fullName">({context.fullName})</p>
      <Team />
    </div>
  )
}

const Team = () => {
  const context = useContext(ProfileContext);
  return (
    <div className="team">
      <p className="profile-team">{context.team}</p>
    </div>
  )
}

const ProfileUseContext = () => <Profile />;

export default ProfileUseContext

