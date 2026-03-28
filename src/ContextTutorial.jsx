/*
CONTEXT API — GLOBAL STATE WITHOUT PROP DRILLING

==================================================
PART 0 — PROBLEM: PROP DRILLING

Normal React:

<App>
  <Parent>
    <Child>
      <GrandChild>
         <Component needing data />
      </GrandChild>
    </Child>
  </Parent>
</App>

To pass data from App → Component:
<App data={...} >
  <Parent data={...}>
    <Child data={...}>
      <GrandChild data={...}>
        Component
      </GrandChild>
    </Child>
  </Parent>
</App>

This is called PROP DRILLING:
- tedious
- hard to maintain

==================================================
PART 1 — SOLUTION: CONTEXT API

React Context allows:

- Global state
- Accessible by any nested component
- No need to pass props manually

Core parts:

1. createContext()
2. Provider
3. useContext()

==================================================
PART 2 — CREATE CONTEXT

import { createContext } from "react";

const ThemeContext = createContext("light")

- Default value: "light"

==================================================
PART 3 — PROVIDER

Wrap your tree:

<ThemeContext.Provider value={theme}>
   <App />
</ThemeContext.Provider>

- Any descendant can access `theme`

==================================================
PART 4 — CONSUME CONTEXT

import { useContext } from "react";

const theme = useContext(ThemeContext)

Now component knows current theme

==================================================
PART 5 — EXAMPLE TREE

App
 ├─ Navbar
 │    └─ NavItem
 └─ Page
      └─ Content

If ThemeContext.Provider wraps App,
NavItem and Content can read theme
WITHOUT passing props

==================================================
PART 6 — FLOW

Provider (value) 
      ↓
React Context
      ↓
useContext()
      ↓
Component gets value
No prop drilling

==================================================
PART 7 — MENTAL MODEL

Without context:
data → prop → prop → prop → component

With context:
data → Provider → component (any depth)
==================================================
*/

import React, { useState, createContext, useContext } from "react";

// 1. Create Context
const ThemeContext = createContext("light");

// 2. Components consuming context
function Navbar() {
  const theme = useContext(ThemeContext);
  return <div>Navbar theme: {theme}</div>;
}

function Content() {
  const theme = useContext(ThemeContext);
  return <div>Content theme: {theme}</div>;
}

// 3. Provider wraps App
function ContextTutorial() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ fontFamily: "sans-serif", padding: 20 }}>
        <h2>Context API Demo</h2>
        <button onClick={toggleTheme}>
          Toggle Theme
        </button>
        <Navbar />
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}

export default ContextTutorial;