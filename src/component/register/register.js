import React, {useState} from "react";
import axios from "axios";
import "./register.css";
//import history from './history';
import {useNavigate} from "react-router-dom";


const Register =()=>{

    const navigate = useNavigate();

    const navigateToLogin = () => {
        // 👇️ navigate to /login = when we click on the registration page login button we will go to the login page
        navigate('/login');
      };

    const [user, setUser]= useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange = e =>{
        const { name, value} = e.target
        // console.log( name, value)
        setUser({
            ...user,
            [name]: value
        })
    }
const register=()=>{
    const{name,email, password,reEnterPassword } =user
    if(name && email && password && (password === reEnterPassword)){
        //alert("posted")
    axios.post("http://localhost:9002/register", user)
    .then (res=>alert(res.data.message))
    //history.pudh("/login")
    }else{
        alert("invalid input ")
    }

}
    return(
    <div className="register">
        {console.log(user)}
        <h1>Register</h1>
        <input  type="text" name="name" value={user.name}  placeholder="Enter your Name" onChange={handleChange}></input>
        <input  type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange} ></input>
        <input  type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
        <input  type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re- Password" onChange={handleChange}></input>
        <div className="button" onClick={register}>Register</div>
        <div>or</div>
        <div className="button"onClick={navigateToLogin}>Login</div>
    </div>
    );
};

export default Register