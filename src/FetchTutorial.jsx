/*
FETCHING DATA WITH useEffect + API CALLS

==================================================
PART 0 — PROBLEM

React renders UI declaratively.
But sometimes we need to fetch data from an API:

- User profiles
- Todos
- Posts
- Weather info

Without fetching, UI is static.

==================================================
PART 1 — SIDE EFFECTS

Fetching data is a SIDE EFFECT:

- Happens outside render
- Does not directly calculate JSX
- Examples: API calls, timers, subscriptions

React Hook: useEffect handles side effects

==================================================
PART 2 — useEffect BASICS

import { useEffect } from "react";

useEffect(() => {
   // side effect code
}, [dependencies]);

- Callback runs after render
- Dependencies array controls re-run
- Empty array [] → run once on mount

==================================================
PART 3 — FETCH API

fetch(url)
  .then(res => res.json())
  .then(data => ...)
  .catch(err => ...)

Async function can also be used inside useEffect

==================================================
PART 4 — DATA FETCH FLOW

Mount component
       ↓
useEffect runs
       ↓
fetch API
       ↓
response.json()
       ↓
update state
       ↓
UI re-renders with data

==================================================
PART 5 — MENTAL MODEL

React:

Render → useEffect → fetch → setState → re-render UI

==================================================
*/

import React, { useState, useEffect } from "react";

function FetchTutorial() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data once on mount
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(res => res.json())
      .then(data => {
        setTodos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []); // empty array → run once

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h2>Fetch API Demo</h2>
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

export default FetchTutorial;