import { useState } from "react";

import Button from "../UI/Button";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredAge,setEnteredAge]=useState(1);


  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length<1){
        return(
            alert('invalid username')
        );
    }
    if(+enteredAge<1){
        return(
            alert('invalidage')
        );
    }
    setEnteredAge(1);
    setEnteredUsername("");
  };

  const usernameChangeHandler=(event)=>{
    setEnteredUsername(event.target.value);
  }

  const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value);
  }

  return (
    <form onSubmit={addUserHandler}>
      <h1 className={styles.h1}>Evil Unicorn</h1>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" placeholder="Introduce user name" value={enteredUsername} onChange={usernameChangeHandler}/>
      <label htmlFor="age">Age</label>
      <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
      <Button type="submit">Add user</Button>
    </form>
  );
};

export default AddUser;
