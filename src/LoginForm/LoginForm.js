import React, { useState } from "react";//React uses virtual DOM to compare the new state of the DOM tree with the old state.
//import { useNavigate } from "react-router-dom";//useNavigate is a hook that allows us to navigate to a new route (useNavigate === useHistory)

export const LoginForm = ({setRole}) => {
  console.log('Login form rendered');
  //useState is a hook (js function) that returns an array with two elements
  // (data and a function to update the data)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");//username = 'bobby' - WRONG
  const user = {username: 'admin', password: 'admin'};
  //const navigate = useNavigate();
  const handleRole = (event) => {
    if (username === user.username && password === user.password) {
      setRole("Admin");
    } else {
      setRole("Visitor");
    }
    //navigate("/clothes");
  }
  //useState is a hook (js function) that returns an array with two elements
  // (data and a function to update the data)

  const form = (
    <div className="login-form">
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleRole} disabled={username.length === 0 || password.length === 0}>
        Login
      </button>
    </div>
  );
  return form;
};