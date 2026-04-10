import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main className="page">
      <h1>Bai 1 + 2: Users Fetch, Loading, Error</h1>

      {loading && <p className="status">Loading...</p>}
      {!loading && error && <p className="status error">Error: {error}</p>}

      {!loading && !error && (
        <ul className="list">
          {users.map((user) => (
            <li className="card" key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
