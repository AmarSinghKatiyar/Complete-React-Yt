# Functions in React

## 1. Normal Function

```jsx
function greet() {
  console.log("Hello React");
}
```

Calling it:

```jsx
greet();
```

---

## 2. Event Handler Function

```jsx
function App() {
  function handleClick() {
    alert("Button Clicked");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

Wrong:

```jsx
<button onClick={handleClick()}>
```

Correct:

```jsx
<button onClick={handleClick}>
```

---

## 3. Arrow Function

```jsx
const greet = () => {
  console.log("Hello");
};
```

---

## 4. Function with Arguments

```jsx
function showMessage(name) {
  alert(`Hello ${name}`);
}

<button onClick={() => showMessage("Rahul")}>
  Click
</button>
```

---

## 5. Functional Component

```jsx
function Greeting() {
  return <h1>Hello User</h1>;
}
```

Usage:

```jsx
<Greeting />
```

---

## 6. Function with State

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>Increment</button>
    </>
  );
}
```

---

## 7. Function Inside map()

```jsx
const fruits = ["Apple", "Mango", "Banana"];

function App() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

---

## 8. Passing Functions as Props

Parent Component:

```jsx
function Parent() {
  const showAlert = () => {
    alert("Hello");
  };

  return <Child clickHandler={showAlert} />;
}
```

Child Component:

```jsx
function Child({ clickHandler }) {
  return (
    <button onClick={clickHandler}>
      Click
    </button>
  );
}
```

---

## 9. Async Function

```jsx
async function getData() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const data = await response.json();
  console.log(data);
}
```

---

## Summary

- Normal Function → Reusable logic
- Event Handler → Handle clicks and events
- Arrow Function → Short syntax
- Functional Component → Returns JSX
- State Function → Updates UI
- Function Props → Parent-child communication
- Async Function → API calls