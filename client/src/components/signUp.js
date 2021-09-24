import React from 'react';
import PropTypes from 'prop-types';


async function signUpUser(credentials) {
    return fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

export default function SignUpButton({ username, password, setToken, setUsername }) {

    const handleSignUp = async e => {
        e.preventDefault();
        const data = await signUpUser({
            username,
            password
        });
        if (data.message === "success") {
            setToken({ "token": data.token });
            setUsername({ "username": data.username })
        }
        else if (data.message === "user name already exists") {
            alert("username already exists.");
        }
    }
    return (
        <button type="submit" className="btn btn-primary" onClick={handleSignUp}>Sign Up</button>
    )
}
SignUpButton.propTypes = {
    setToken: PropTypes.func.isRequired,
    setUsername: PropTypes.func.isRequired
}