import './App.css';
import Homepage from "./component/homepage/homepage";
import Register from "./component/register/register";
import Login from "./component/login/login";
import{BrowserRouter, Route, Routes} from 'react-router-dom';
import React,{useState} from "react";



function App() {
  const [user,setloginUser]= useState({})

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
     user && user._id?<Homepage/>:<Login setloginUser={setloginUser}/>
     }></Route>
     <Route path='/login' element={<Login setloginUser={setloginUser}/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
