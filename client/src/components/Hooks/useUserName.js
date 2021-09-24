import { useState } from 'react';

export default function useUserName() {
  const getUserName = () => {
    const UserNameString = localStorage.getItem('username');
    const userUserName = JSON.parse(UserNameString);
    return userUserName?.username
  };

  const [username, setUserName] = useState(getUserName());

  const saveUserName = userUserName => {

    localStorage.setItem('username', JSON.stringify(userUserName));
    setUserName(userUserName.username);
    
  };
  const deleteUserName = () => {
    
    localStorage.removeItem('username');
    setUserName(getUserName())
  };

  return {
    setUserName: saveUserName,
    username,
    deleteUserName:deleteUserName
  }
}