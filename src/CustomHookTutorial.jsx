import { useState, useEffect } from "react";

// 1. Custom hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(d => {
        setData(d);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}

// 2. Component using hook
function CustomHookTutorial() {
  const { data: todos, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h2>Custom Hook Demo</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.title} {todo.completed ? "✅" : "❌"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomHookTutorial;