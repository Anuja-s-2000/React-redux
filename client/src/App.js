import React from 'react';
import './App.css';
import Home from './components/home';
import LoginSignUp from './components/LoginSignUp';
import useToken from './components/Hooks/useToken';
import useUserName from './components/Hooks/useUserName';

function App() {

  const { token, setToken, deleteToken} = useToken();
  const { username, setUserName, deleteUserName} = useUserName();

  return (
    <div className="wrapper">
      {(token && username) ? <Home username={username} deleteT={deleteToken} deleteU={deleteUserName}/> : <LoginSignUp setToken={setToken} setUsername={setUserName}/> }
    </div>
  );
  
}

export default App;
