import React from "react";

import AddUser from "./components/Users/AddUser";
import Card from "./components/UI/Card";

import classes from "./components/Users/AddUser.module.css";

function App() {
  return (
    <Card className={classes.input}>
      <AddUser />
    </Card>
  );
}

export default App;
