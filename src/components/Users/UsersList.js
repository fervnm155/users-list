import Card from "../UI/Card";

import styles from './UsersList.module.css'

const UsersList = (props) => {
  return (
    <Card classname={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} Age: {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
