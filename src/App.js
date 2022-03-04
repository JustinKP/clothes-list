import "./App.css";
import React, { useState } from "react";
//React component name should be PascalCase
//React component can be functional or class based
//react component are functions that return JSX
//JSX stands for JavaScript XML
//JSX expressions must have one parent element
//react components can work with data (state and props)

//Let's create two components, login form and clothes list, as soon as
//users logs in successfully, ????? is displayed
import { LoginForm } from "./LoginForm/LoginForm";
import { ClothesList } from "./ClothesList/ClothesList";
import { RoleWrapper } from "./RoleWrapper/RoleWrapper";


//we can pass data as props to a child component, prop is basically a html attribute
//Your state should be as low in the component hierarchy as possible
export function App() {
  console.log("App rendered");
  const [isReactClassroom, setReactClassroom] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="App">
      <LoginForm 
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        setRole={setRole}
      />
      <RoleWrapper rolesAllowed={["Visitor"]} currentRole={role}>
        <ClothesList isReactClassroom={isReactClassroom} role={role}/>
      </RoleWrapper>
      <RoleWrapper rolesAllowed={["Admin"]} currentRole={role}>
        <ClothesList isReactClassroom={isReactClassroom} role={role}/>
      </RoleWrapper>
    </div>
  );
}
//We moved in the loginform to.. well to LoginForm.js