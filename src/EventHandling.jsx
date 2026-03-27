/*
EVENT HANDLING — HTML vs REACT

==================================================
PART 0 — ELEMENT vs ATTRIBUTE

HTML:
Structure:
<element attribute="value">

<button onclick="handleClick()">Click</button>

ELEMENT
<button>...</button>

ATTRIBUTE
onclick="handleClick()"

button → element
onclick → attribute
"handleClick()" → value

==================================================
PART 1 — HTML EVENT HANDLING

An HTML event is a mechanism that allows a web page to respond to user interactions 
or browser actions

<button onclick="handleClick()">

Browser:

1. Parses HTML
2. Finds attribute "onclick"
3. Recognizes predefined event
4. Converts string to function
5. Assigns to DOM property

Conceptually:

button.onclick = function(event) {
   handleClick();
}

On click:
if (button.onclick) call it

==================================================
PART 2 — WHY oncall DOES NOT WORK

<button oncall="handleCall()">

Browser checks:

element.oncall ❌ not defined

So it becomes:

element.getAttribute("oncall")

No event binding
Nothing executed

IMPORTANT
Only predefined names work
onclick is predefined in DOM spec

HTMLElement {
   onclick ✔
   oninput ✔
   onchange ✔
   onmouseover ✔
   oncall ❌
   ...
}

These are defined by:
- WHATWG HTML Standard
- DOM Standard

Browser engines implement this:
- Chrome (Blink)
- Safari (WebKit)
- Firefox (Gecko)

==================================================
PART 3 — addEventListener (BEST PRACTICE)

button.addEventListener("click", handleClick)

Browser stores:

listeners = {
  click: [handleClick]
}

On click:
loop and execute

Advantages:
- multiple handlers
- no global scope
- cleaner separation

==================================================
PART 4 — NATIVE EVENT OBJECT

function handleClick(event) {}

event is:

MouseEvent {
   type: "click"
   target: button
   clientX: 120
}

This is called:
NATIVE DOM EVENT

==================================================
PART 5 — EVENTS

Browser creates DIFFERENT event types

Base class:
Event

Hierarchy:

Event
 ├── UIEvent
 │     ├── MouseEvent
 │     ├── KeyboardEvent
 │     └── FocusEvent
 ├── InputEvent
 ├── TouchEvent
 └── PointerEvent

--------------------------------------------------
MOUSE EVENTS (MouseEvent)
--------------------------------------------------
click
dblclick
mousedown
mouseup
mousemove
mouseenter
mouseleave

--------------------------------------------------
KEYBOARD EVENTS (KeyboardEvent)
--------------------------------------------------
keydown
keyup

--------------------------------------------------
INPUT / FORM EVENTS (InputEvent / Event)
--------------------------------------------------
input
change
submit
focus
blur

--------------------------------------------------
TOUCH EVENTS (TouchEvent)
--------------------------------------------------
touchstart
touchmove
touchend

--------------------------------------------------
POINTER EVENTS (PointerEvent)
--------------------------------------------------
pointerdown
pointerup
pointermove

==================================================
PART 6 — REACT EVENT HANDLING

React:

<button onClick={handleClick}>

HTML:
onclick="handleClick()"
string evaluated

React:
onClick={handleClick}
function reference

React does NOT attach handler directly
React uses event delegation

==================================================
PART 7 — WHAT IS SyntheticEvent

React wraps browser event

Native Event (MouseEvent)
        ↓
React SyntheticEvent
        ↓
Your handler

==================================================
SIDE BY SIDE

HTML

button.addEventListener("click", function(event) {
})

event = MouseEvent {
   type: "click",
   target: button,
   clientX: 120,
   clientY: 450,
   ...
}

--------------------------------------------

React

<button onClick={(event)=>{}}>

event = SyntheticEvent

event =
SyntheticEvent {
   type: "click"
   target: button
   nativeEvent: MouseEvent
   preventDefault()
   stopPropagation()
}

React wraps native event but keeps original inside:

event.nativeEvent

==================================================
WHY REACT USES SyntheticEvent

1. same behavior across browsers
2. performance optimization
3. event delegation
4. consistent API

==================================================
PART 8 — REACT EVENT FLOW

User Click
   ↓
Browser creates MouseEvent
   ↓
React root listener
   ↓
React creates SyntheticEvent
   ↓
Your handler

==================================================
MENTAL MODEL

HTML:
element → native event → handler

React:
root → delegation → synthetic event → handler

==================================================
*/

import React, { useState } from "react";

function EventHandling() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  function handleIncrement(event) {
    console.log("SyntheticEvent:", event);
    console.log("Native Event:", event.nativeEvent);
    setCount(count + 1);
  }

  function handleKey(event) {
    console.log("Keyboard event:", event.nativeEvent);
  }

  function toggleVisibility() {
    setVisible(!visible);
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h2>Event Handling Tutorial</h2>

      <button onClick={handleIncrement}>
        Mouse Click Event
      </button>

      <p>Count: {count}</p>

      <input
        placeholder="Type something"
        onKeyDown={handleKey}
      />

      <button onClick={toggleVisibility}>
        Toggle Message
      </button>

      {visible && (
        <p>Now you see me (conditional rendering)</p>
      )}
    </div>
  );
}

export default EventHandling;