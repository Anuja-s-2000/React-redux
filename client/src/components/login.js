import React from 'react';
import PropTypes from 'prop-types';


async function loginUser(credentials) {
  return fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  }).then(data => data.json())
}

export default function LoginButton({ username, password, setToken, setUsername }) {

  const handleLogin = async e => {
    e.preventDefault();
    const data = await loginUser({
      username,
      password
    });
    if (data.message === "success") {
      setToken({ "token": data.token });
      setUsername({ "username": data.username })
    }
    else {
      alert("Invalid username or password.");
      document.getElementById("signin-signup-form").reset();
    }
  }

  return (
    <button type="submit" className="btn btn-success" style={{ marginRight: "15px" }} onClick={handleLogin}>Log In</button>

  )
}

LoginButton.propTypes = {
  setToken: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired
};