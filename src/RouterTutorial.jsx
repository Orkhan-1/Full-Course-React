/*
REACT ROUTER — MULTIPLE PAGES WITHOUT RELOADING

==================================================
PART 0 — PROBLEM

Normal HTML navigation:

<a href="/about">About</a>

Browser:
1. Requests new page
2. Reloads entire app
3. React state lost

This is called:
FULL PAGE RELOAD

==================================================
PART 1 — SPA (SINGLE PAGE APPLICATION)

React apps are SPA

One HTML file:
index.html

React swaps components
instead of reloading page

URL changes
UI updates
NO reload

==================================================
PART 2 — INSTALL

npm install react-router-dom

==================================================
PART 3 — BASIC SETUP

We wrap app:

<BrowserRouter>
   <App />
</BrowserRouter>

Router listens to URL changes

==================================================
PART 4 — DEFINE ROUTES

<Routes>
   <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/contact" element={<Contact />} />
</Routes>

URL decides which component renders

==================================================
PART 5 — NAVIGATION

Instead of <a>

Use:

<Link to="/about">About</Link>

Why?

<a> → reloads page ❌
<Link> → client navigation ✔

==================================================
PART 6 — FLOW

User clicks Link
        ↓
React Router intercepts
        ↓
URL changes
        ↓
Matching Route found
        ↓
Component rendered
        ↓
NO page reload

==================================================
PART 7 — MENTAL MODEL

URL → Router → Route match → Component

==================================================
PART 8 — ROUTER TREE

BrowserRouter
      ↓
   Routes
   / |   \
Home About Contact

==================================================
*/

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return <h3>Home Page</h3>;
}

function About() {
  return <h3>About Page</h3>;
}

function Contact() {
  return <h3>Contact Page</h3>;
}

function RouterTutorial() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: "sans-serif", padding: 20 }}>
        <h2>React Router Demo</h2>

        <nav style={{ marginBottom: 20 }}>
          <Link to="/">Home</Link>{" | "}
          <Link to="/about">About</Link>{" | "}
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RouterTutorial;