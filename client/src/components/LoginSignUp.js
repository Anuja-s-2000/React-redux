import React, { useState} from 'react';
import LoginButton from './login';
import './form.css';
import SignUpButton from './signUp';

export default function LoginSignUp({ setToken,setUsername }) {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  return(
    <div className="form-wrapper bg-dark" >
      <p style={{color:"white"}}>Log In / Sign Up</p>
      <form id="signin-signup-form" >
        <div className="content">
        <label>
          <p>Username</p>
          <input type="text"onChange={e => setUserName(e.target.value)} required/>
        </label>
        <br/>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} required/>
        </label>
        </div>
        <div> 
        <LoginButton username={username} password={password} setToken={setToken} setUsername={setUsername}></LoginButton>
        <SignUpButton username={username} password={password} setToken={setToken} setUsername={setUsername}></SignUpButton>
        </div>
      </form>
    </div>
  )
}
