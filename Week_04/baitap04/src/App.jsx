import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const displayPosts = useMemo(() => {
    const key = search.trim().toLowerCase();
    const byUser =
      selectedUserId === "all"
        ? posts
        : posts.filter((post) => post.userId === Number(selectedUserId));

    if (!key) {
      return byUser;
    }

    return byUser.filter((post) => post.title.toLowerCase().includes(key));
  }, [posts, search, selectedUserId]);

  return (
    <main className="page">
      <h1>Bai 4: Fetch + Search + Filter</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by post title..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={selectedUserId}
          onChange={(event) => setSelectedUserId(event.target.value)}
        >
          <option value="all">All users</option>
          {Array.from({ length: 10 }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              User {index + 1}
            </option>
          ))}
        </select>
      </div>

      {loading && <p className="status">Loading...</p>}
      {!loading && error && <p className="status error">Error: {error}</p>}

      {!loading && !error && (
        <>
          <p className="count">
            Showing {displayPosts.length} / {posts.length} posts
          </p>

          <ul className="list">
            {displayPosts.map((post) => (
              <li key={post.id} className="card">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

export default App;
