import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="page">
      <h1>Form thong tin nguoi dung</h1>
      <form className="form">
        <label className="field">
          Name
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </label>

        <label className="field">
          Email
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>

        <label className="field">
          Age
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
        </label>
      </form>

      <section className="preview">
        <h2>Preview</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
      </section>
    </main>
  );
}

export default App;
