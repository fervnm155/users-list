import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import Card from "./components/UI/Card";

import classes from "./components/Users/AddUser.module.css";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (usrName, usrAge) => {
    setUsers((prevList) => {
      return [
        ...prevList,
        { name: usrName, age: usrAge, id: Math.random().toString() },
      ];
    });
  };

  const emptyList=(users)=>{
    if(users.length<1){
      return;
    }
    return <UsersList users={users} />
  }

  return (
    <Card className={classes.input}>
      <AddUser onAddUser={addUserHandler} />
      <hr></hr>
      {emptyList(users)}
      {/* <UsersList users={users} /> */}
    </Card>
  );
}

export default App;
