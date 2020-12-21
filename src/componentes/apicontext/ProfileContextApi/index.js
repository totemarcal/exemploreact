import React from 'react';
import './style.css';
import ProfileProvider from './ProfileProvider'

const ProfileContext = React.createContext();

const Profile = () => (
  <div className="profile">
    <ProfileContext.Consumer>
      {context => <img src={context.companyImage} />}
    </ProfileContext.Consumer>
    <User />
  </div>
)

const User = () => (
  <div className="user">
    <ProfileContext.Consumer>
      {context =>
        <React.Fragment>
          <a href={context.url}>
            <img src={context.userImage} width="138px" />
          </a>
          <h1 className="profile-userName">{context.userName}</h1>
          <p className="profile-fullName">({context.fullName})</p>
        </React.Fragment>
      }
    </ProfileContext.Consumer>
    <Team />
  </div>
)

const Team = () => (
  <ProfileContext.Consumer>
    {context =>
      <div className="team">
        <p className="profile-team">{context.team}</p>
      </div>
    }
  </ProfileContext.Consumer>
)

const ProfileHook = () => (
    <ProfileProvider>
      <Profile />
    </ProfileProvider>
  )
 export default ProfileHook