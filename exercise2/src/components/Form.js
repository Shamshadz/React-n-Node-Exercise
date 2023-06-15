import { useState } from "react";
import "./Form.css";
import ErrorModal from "./ErrorModal";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        summary: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid age",
        summary: "Please enter a valid age (> 0).",
      });
      return;
    }
    const user = {
      id: Math.random(),
      username: username,
      age: age,
    };
    props.addUser(user);
    setUsername("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          summary={error.summary}
          onConfirm={errorHandler}
        />
      )}
      <div className="addFormDiv">
        <form className="addForm" onSubmit={handleSubmitForm}>
          <div className="usernameDiv">
            <label>Username</label>
            <input value={username} onChange={handleUsername} />
          </div>
          <div className="ageDiv">
            <label>Age (Years)</label>
            <input value={age} onChange={handleAge} />
          </div>
          <div className="addButtonDiv">
            <button>Add User</button>
          </div>
        </form>
      </div>
      <div className="resultDiv">
        <div className="resultDiv1">
          <ul>
            {props.users.map((user) => (
              <li key={user.id}>
                {user.username} ({user.age} years old)
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Form;
