import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [formData, setFormData] = useState({ username:"Lambda", password:"i<3Lambd4", error:"" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', formData)
      .then((res) => {
        localStorage.setItem('token', res.data.payload)
        history.push('/colors')
      })
      .catch((er) => {
        setFormData({ ...formData, error:"Username or Password invalid."})
      })
  };

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });
  
  const error = "";
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>
      <form onSubmit={onSubmit}>
        <label>Username
          <input type="text" name="username" onChange={handleChange} value={formData.username}/>
        </label>
        <label>Password
          <input type="password" name="password" onChange={handleChange} value={formData.password}/>
        </label>
        <button>Login</button>
        {/* <p data-testid="errorMessage" className="error">{error}</p> */}
      </form>
      <p>{formData.error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.