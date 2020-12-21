
import React, { Component, useContext } from 'react';
import { render } from 'react-dom';
import './style.css';

const ProfileContext = React.createContext();

class ProfileProvider extends Component {
  state = {
    company: 'Progress',
    companyImage: 'https://svgshare.com/i/9ir.svg',
    url: 'https://www.telerik.com/kendo-react-ui/',
    userImage: 'https://i.imgur.com/Y1XRKLf.png',
    userName: 'Kendoken',
    fullName: 'Kendoken No Michi',
    team: 'KendoReact',
    toggleTeam: (team) => this.setState({
      team: `Kendo${team}`
    })
  }
  render() {
    return (
      <ProfileContext.Provider value={this.state}>
        {this.props.children}
      </ProfileContext.Provider>
    )
  }
}

let Profile = () => {
  const context = useContext(ProfileContext);
  return (
    <div className="profile">
      <img src={context.companyImage} />
      <User />
    </div>
  )
}

let User = () => {
  const context = useContext(ProfileContext);
  return (
    <div className="user">
      <a href={context.url}>
        <img src={context.userImage} width="138px" />
      </a>
      <h1 className="profile-userName">{context.userName}</h1>
      <p className="profile-fullName">({context.fullName})</p>
      <Team />
      <button className="profile-button"
        onClick={() => context.toggleTeam('Angular')}>Angular</button>
      <button className="profile-button"
        onClick={() => context.toggleTeam('Vue')}>Vue</button>
      <button className="profile-button"
        onClick={() => context.toggleTeam('React')}>React</button>
    </div>
  )
}

let Team = () => {
  const context = useContext(ProfileContext);
  return (
    <div className="team">
      <p className="profile-team">{context.team}</p>
    </div>
  )
}

class ProfileComponentUseContext extends Component {
  render() {
    return (
      <ProfileProvider>
        <Profile />
      </ProfileProvider>
    );
  }
}

export default ProfileComponentUseContext
