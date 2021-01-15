import React from 'react';
import { render } from 'react-dom';
import './style.css';
const ProfileContext = React.createContext();
class ProfileProvider extends React.Component {
  state = {
    company: 'Progress',
    companyImage: 'https://svgshare.com/i/9ir.svg',
    url: 'https://www.telerik.com/kendo-react-ui/',
    userImage: 'https://i.imgur.com/Y1XRKLf.png',
    userName: 'Kendoka',
    fullName: 'Kendō No Arikata',
    team: 'KendoReact',
    changeTeam: (team) => this.setState({
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

const ProfileComponentSetState = () => (
  <ProfileProvider>
    <Profile />
  </ProfileProvider>
)

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
          <Team />
          <button className="profile-button"
            onClick={() => context.changeTeam('Angular')}>Angular</button>
          <button className="profile-button"
            onClick={() => context.changeTeam('Vue')}>Vue</button>
          <button className="profile-button"
            onClick={() => context.changeTeam('React')}>React</button>
        </React.Fragment>
      }
    </ProfileContext.Consumer>
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

export default ProfileComponentSetState