import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// https://randomuser.me/api/

interface UserName {
  first: string,
  last: string,
  title: string
}

interface UserPic {
  large: string,
  medium: string,
  thumbnail: string
}

interface UserInfo {
  name: UserName,
  picture: UserPic,
  email: string
}

function App() {

  const [counter, setCounter] = useState(0);
  const [randomUser, setRandomUser] = useState<UserInfo[]>([]);
  const [pageNumber, setPageNumber] = useState(1);

  async function getUsersData () {
    const res = await fetch(`https://randomuser.me/api/?page${pageNumber}`);
    const jsonData = await res.json();
    if (!jsonData) {return}
    const newUsers = [...randomUser, ...jsonData.results]
    setRandomUser(newUsers);
  }
  
  useEffect(() => {
    getUsersData();
  }, [])

  useEffect(() => {
    getUsersData();
  }, [pageNumber])
  
  const users = randomUser.map((userInfo: UserInfo, idx: number) => {
    const name = userInfo.name  
    return (
        <div key={idx} className="card" style={{width: "12rem"}}>
          <img src={userInfo.picture.large} className="card-img-top" alt={userInfo.picture.large}/>
          <div className="card-body">
            <h5 className="card-title">{`${name.title} ${name.first} ${name.last}`}</h5>
            <p className="card-text">{userInfo.email}</p>
          </div>
        </div>
      )
    })


  return (
    <div className="App container-md">
      {/* <button onClick={() => setCounter(counter + 1)}>Counter add 1</button>
      <div>{counter}</div> */}
      <button 
        type="button" 
        className="btn btn-outline-primary fixed-bottom" 
        style={{right: "1rem", left: "unset"}} 
        onClick={() => setPageNumber(pageNumber + 1)}
      >
        Show more people
      </button>
      <div className="d-flex flex-wrap justify-content-start">{users}</div>
    </div>
  );
}


export default App;
