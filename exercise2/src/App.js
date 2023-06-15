import { useState } from "react";
import Form from "./components/Form";

const userList = [
  {
    id: "1",
    username: "John",
    age: 31,
  },
  {
    id: "2",
    username: "Max",
    age: 30,
  },
];

function App() {
  const [users, setUsers] = useState(userList);

  const addUser = (user) => {
    console.log(user);
    setUsers((prevUser) => {
      return [user, ...prevUser];
    });
  };

  return (
    <>
      <Form users={users} addUser={addUser} />
    </>
  );
}

export default App;
