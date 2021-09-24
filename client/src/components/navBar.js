import React from 'react'
//import styled from 'styled-components'
//import Card from 'react-bootstrap/Card'
import companyLogo from './../assets/logo1.png';

export default function NavBar({ username,logout }) {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                    <img src={companyLogo} style={{ height: "50px", width: "50px", marginRight:"30px"}} alt="img"></img>
                </li>
                <li className="nav-item" style={{ color: "whitesmoke", marginTop:"10px"}}>
                    {username}
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="nav-item" style={{ float: "right" }}>
                    <button className="btn btn-danger" onClick={logout} >Logout</button>
                </li>
            </ul>
        </nav>
    )
};