import React from 'react';
import NavBar from './navBar';
import ViewArticle from './viewArticle';
import './home.css'
//import CardColumns from 'react-bootstrap'

export default function Home({username,deleteT,deleteU}) {

    const [data1, setData] = React.useState([]);

    React.useEffect(() => {
      fetch("/articles")
        .then((res) => res.json())
        .then((data) => setData(arr => [...arr, ...data]));
    }, []);

    const logoutHandler = () =>{
        deleteT()
        deleteU()
    }
    
  return(<>
    <NavBar username={username} logout={logoutHandler}/>
    <div className="container" style={{marginTop:"30px"}}>
    <div className="card-columns">
    {!data1 ? "Loading..." : data1.map((num) => (
        <ViewArticle key={num.title} article={num}/>
      ))}</div></div></>
  );
}