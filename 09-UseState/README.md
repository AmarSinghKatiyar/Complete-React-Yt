# React useState Counter App

This project demonstrates the use of the **useState Hook** in React by building a simple counter application with buttons to increase, decrease, and increment the counter by a custom value.

---

# What are Hooks?

Hooks are special functions introduced in React 16.8 that allow functional components to use React features such as:

- State Management
- Lifecycle Methods
- Context API
- Side Effects
- Refs

Before Hooks, these features were only available in Class Components.

Example:

```jsx
import { useState } from 'react';
```

Here, `useState` is a Hook.

---

# What is useState?

`useState` is the most commonly used React Hook.

It allows a functional component to store and update data that can change over time.

Syntax:

```jsx
const [state, setState] = useState(initialValue);
```

Example:

```jsx
const [num, setNum] = useState(0);
```

### Breakdown

| Part | Description |
|--------|------------|
| num | Current state value |
| setNum | Function used to update the state |
| useState(0) | Initial value of state |

Initially:

```jsx
num = 0
```

---

# Why useState?

Without state:

```jsx
let count = 0;
```

Updating the value:

```jsx
count++;
```

will change the variable but React will **not re-render the UI**.

React only updates the UI when state changes.

Using:

```jsx
setNum(num + 1);
```

tells React:

1. Update the state
2. Re-render the component
3. Update the UI

---

# Project Structure

```text
src/
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# App Component

The entire application is inside the `App` component.

```jsx
const App = () => {
  return (
    <div>
      ...
    </div>
  )
}
```

A functional component is simply a JavaScript function that returns JSX.

---

# Creating State

```jsx
const [num, setNum] = useState(0);
```

### Explanation

- `num` stores the current counter value.
- `setNum()` updates the counter value.
- Initial value is `0`.

Current state:

```jsx
num = 0
```

---

# Increase Function

```jsx
function Increase() {
  setNum(prev => prev + 1);
}
```

### How it Works

Suppose:

```jsx
num = 5
```

When the button is clicked:

```jsx
setNum(prev => prev + 1);
```

React performs:

```jsx
5 + 1 = 6
```

Updated state:

```jsx
num = 6
```

React automatically re-renders the UI.

---

# Decrease Function

```jsx
function Decrease() {
  setNum(prev => prev - 1);
}
```

Example:

```jsx
num = 5
```

After clicking:

```jsx
num = 4
```

---

# Increase By 5 Function

```jsx
function IncreaseBy5() {
  setNum(prev => prev + 5);
}
```

Example:

```jsx
num = 10
```

After clicking:

```jsx
num = 15
```

---

# Why Use prev?

Recommended approach:

```jsx
setNum(prev => prev + 1);
```

Instead of:

```jsx
setNum(num + 1);
```

### Benefits

- Always uses the latest state value.
- Prevents stale state bugs.
- Safe for multiple state updates.

Example:

```jsx
setNum(prev => prev + 1);
setNum(prev => prev + 1);
```

Result:

```jsx
+2
```

---

# Rendering State

```jsx
<h1>{num}</h1>
```

The value inside `{}` is JavaScript.

Whenever `num` changes:

```jsx
0
1
2
3
```

the UI updates automatically.

This behavior is called:

## Reactive Rendering

React reacts to state changes.

---

# Event Handling

Buttons use the `onClick` event.

```jsx
<button onClick={Increase}>
  Increase
</button>
```

When clicked:

1. Increase function runs.
2. State changes.
3. React re-renders.
4. Updated value appears on screen.

---

# State Flow

```text
User Clicks Button
        │
        ▼
Function Executes
        │
        ▼
setNum() Called
        │
        ▼
State Updated
        │
        ▼
React Re-renders Component
        │
        ▼
UI Updates Automatically
```

---

# Rules of Hooks

Hooks must follow these rules:

### 1. Call Hooks at the Top Level

✅ Correct

```jsx
const [num, setNum] = useState(0);
```

❌ Wrong

```jsx
if(condition){
  useState(0);
}
```

---

### 2. Only Call Hooks Inside React Components

✅ Correct

```jsx
function App() {
  const [num, setNum] = useState(0);
}
```

❌ Wrong

```jsx
function test() {
  useState(0);
}
```

---

# Common Mistakes

### Incorrect

```jsx
setNum += 1;
```

`setNum` is a function, not a variable.

---

### Correct

```jsx
setNum(prev => prev + 1);
```

---

# Why React Re-renders?

Whenever state changes:

```jsx
setNum(...)
```

React:

1. Creates a new state value.
2. Compares with previous state.
3. Re-renders the component.
4. Updates only the changed parts of the DOM.

This makes React fast and efficient.

---

# Key Takeaways

- Hooks allow functional components to use React features.
- `useState` is used to store and update state.
- State changes trigger re-renders.
- `setState` functions update state.
- Use functional updates (`prev => prev + 1`) for reliability.
- UI automatically stays in sync with state.

---

# Example

```jsx
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);

  return (
    <>
      <h1>{num}</h1>

      <button onClick={() => setNum(prev => prev + 1)}>
        Increase
      </button>

      <button onClick={() => setNum(prev => prev - 1)}>
        Decrease
      </button>
    </>
  );
}

export default App;
```

This is a simple but powerful example of how React's `useState` Hook manages dynamic data and keeps the UI synchronized with application state.