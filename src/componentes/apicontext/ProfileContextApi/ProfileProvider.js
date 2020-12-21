import React from 'react';
import './style.css';

const ProfileContext = React.createContext();

export default class ProfileProvider extends React.Component {
  state = {
    company: 'Progress',
    companyImage: 'https://svgshare.com/i/9ir.svg',
    url: 'https://www.telerik.com/kendo-react-ui/',
    userImage: 'https://i.imgur.com/Y1XRKLf.png',
    userName: 'Kendoka',
    fullName: 'Kendō No Arikata',
    team: 'KendoReact'
  }
  render() {
    return (
      <ProfileContext.Provider value={this.state}>
        {this.props.children}
      </ProfileContext.Provider>
    )
  }
}
