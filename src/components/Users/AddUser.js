import { useState } from "react";

import toast, { Toaster } from "react-hot-toast";

import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState(1);
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length < 1) {
      setError({
        title: "Invalid input",
        message: "Invalid username",
      });
      return (
        // alert('invalid username')
        toast.error("Invalid username")
      );
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Invalid username",
      });
      return (
        // alert('invalid age')
        toast.error("Invalid age")
      );
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge(1);
    setEnteredUsername("");
    setError(false);
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={addUserHandler}>
        <h1 className={styles.h1}>Evil Unicorn</h1>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Introduce user name"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add user</Button>
        <Toaster />
      </form>
    </div>
  );
};

export default AddUser;
