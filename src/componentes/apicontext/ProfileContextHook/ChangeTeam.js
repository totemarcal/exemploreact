import React, { useContext } from 'react';
import { ProfileContext } from "./ProfileContext";

const ChangeTeam = () => {
    const [userInfo, setUserInfo] = useContext(ProfileContext);
    return (
      <>
        <button className="profile-button"
          onClick={() => setUserInfo({...userInfo,['team']: 'Kendo for Angular'})}>Angular</button>
        <button className="profile-button"
          onClick={() => userInfo.toggleTeam('team', 'KendoVue')}>Vue</button>
        <button className="profile-button"
          onClick={() => userInfo.toggleTeam('team', 'KendoReact')}>React</button>
      </>
    )
  }

  export default ChangeTeam