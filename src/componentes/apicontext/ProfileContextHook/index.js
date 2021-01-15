import React from 'react';
import './style.css';
import Profile from './Profile'
import {ProfileProvider} from './ProfileContext'


const ProfileContextHook = () => (
  <ProfileProvider>
    <Profile />
  </ProfileProvider>
)

export default ProfileContextHook

