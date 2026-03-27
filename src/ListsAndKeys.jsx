/*
LISTS, KEYS, AND RENDERING ARRAYS

==================================================
PART 0 — THE PROBLEM

Real applications render lists:

- todos
- users
- comments
- products
- messages

We need to convert DATA → UI

Example data:

const todos = [
  "Learn React",
  "Build App",
  "Deploy"
]

We want:

• Learn React
• Build App
• Deploy

==================================================
PART 1 — JAVASCRIPT WAY (NOT REACT)

Traditional DOM approach:

const ul = document.createElement("ul")

for (let i = 0; i < todos.length; i++) {
   const li = document.createElement("li")
   li.textContent = todos[i]
   ul.appendChild(li)
}

Manual DOM mutation
Imperative style

==================================================
PART 2 — REACT WAY (DECLARATIVE)

React uses:

ARRAY + map() + JSX

Example:

<ul>
  {todos.map((todo, index) => (
     <li key={index}>{todo}</li>
  ))}
</ul>

What happens:

1. React reads array
2. map() transforms items
3. JSX created
4. Virtual DOM built
5. React renders list

==================================================
PART 3 — RENDERING FLOW

DATA
["Learn React", "Build App", "Deploy"]

        ↓

map()

        ↓

JSX

<li>Learn React</li>
<li>Build App</li>
<li>Deploy</li>

        ↓

DOM

• Learn React
• Build App
• Deploy

==================================================
PART 4 — WHAT map() RETURNS

todos.map(todo => <li>{todo}</li>)

returns:

[
  <li>Learn React</li>,
  <li>Build App</li>,
  <li>Deploy</li>
]

React renders array of elements

==================================================
PART 5 — THE KEY PROP

Example:

<li key={index}>{todo}</li>

key is:

- unique identifier
- used by React diffing
- not visible in DOM
- internal only

[
 { key: 0, type: 'li', props: { children: 'Learn React' } },
 { key: 1, type: 'li', props: { children: 'Build App' } }
]

==================================================
PART 6 — WHY KEYS ARE IMPORTANT

Initial list:

index   value
0       A
1       B
2       C

Remove B

New list:

0       A
1       C

Without keys React thinks:

A -> A ✔
B -> C ❌
C removed ❌

Wrong mapping

With keys:

A -> A ✔
C -> C ✔

Correct mapping

==================================================
PART 7 — REACT DIFFING USING KEYS

React compares:

OLD VDOM
[
 {key:0, text:"A"},
 {key:1, text:"B"},
 {key:2, text:"C"}
]

NEW VDOM
[
 {key:0, text:"A"},
 {key:2, text:"C"}
]

React sees:

key 1 removed
key 2 moved

Only updates necessary DOM

==================================================
PART 8 — BAD KEYS

NEVER DO THIS:

<li key={Math.random()}>

Because:

Every render → new key
React re-renders everything
Performance destroyed

==================================================
PART 9 — INDEX AS KEY (WHEN OK)

OK ONLY when:

- static list
- no reordering
- no filtering
- no insertion in middle

Example OK:

["Mon", "Tue", "Wed"]

Example BAD:

todo list with add/remove

==================================================
PART 10 — BEST KEY PRACTICE

Best:

<li key={todo.id}>

Data:

[
 { id:1, text:"Learn React" },
 { id:2, text:"Build App" }
]

Unique + stable

==================================================
PART 12 — WHAT HAPPENS ON UPDATE

User adds item:

["Learn React", "Build App"]

        ↓

["Learn React", "Build App", "Deploy"]

React:

1. builds new VDOM
2. compares keys
3. adds only new node
4. no full re-render

*/

import React, { useState } from "react";

function ListsAndKeys() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Build App",
    "Deploy"
  ]);

  function addTodo() {
    setTodos([...todos, "New Todo"]);
  }

  function removeTodo(index) {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h2>Lists and Keys</h2>

      <button onClick={addTodo}>
        Add Todo
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              style={{ marginLeft: 10 }}
              onClick={() => removeTodo(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListsAndKeys;