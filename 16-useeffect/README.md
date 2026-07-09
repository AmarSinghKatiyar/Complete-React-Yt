# React `useEffect` Example

This project demonstrates how `useEffect` works with different dependency arrays in React.

## What this project does

- Maintains two separate state variables: `num` and `num2`.
- Updates each state using its own button.
- Runs different `useEffect` hooks depending on which state changes.
- Logs messages to the browser console to show when effects are executed.

---

## Concepts Covered

- `useState`
- `useEffect`
- Dependency Array
- State Updates
- Component Re-rendering

---

## Code Explanation

### State

```jsx
const [num, setnum] = useState(0);
const [num2, setnum2] = useState(0);
```

Two independent state variables are created.

- `num` → Updated by the first button.
- `num2` → Updated by the second button.

---

### Functions

```jsx
function numchanging() {
  console.log("num ki value change ho gayi");
}

function num2changing() {
  console.log("num2 ki value change ho gayi");
}
```

These functions simply log a message whenever they are called.

---

### First useEffect

```jsx
useEffect(() => {
  console.log("useEffect is running depend on num");
  numchanging();
}, [num]);
```

This effect only runs when `num` changes.

Example:

Initial Render

```
useEffect is running depend on num
num ki value change ho gayi
```

Click First Button

```
useEffect is running depend on num
num ki value change ho gayi
```

Click Second Button

```
Nothing happens in this effect.
```

---

### Second useEffect

```jsx
useEffect(() => {
  console.log("useEffect running depend on num2");
}, [num2]);
```

This effect only runs when `num2` changes.

Example:

Click Second Button

```
useEffect running depend on num2
```

Click First Button

```
Nothing happens in this effect.
```

---

## Dependency Array

```jsx
useEffect(() => {
  // Effect
}, [dependency]);
```

The dependency array tells React **when to execute the effect**.

### Empty Array

```jsx
useEffect(() => {
  console.log("Runs only once");
}, []);
```

Runs only after the component mounts.

---

### No Dependency Array

```jsx
useEffect(() => {
  console.log("Runs on every render");
});
```

Runs after every render.

---

### With Dependencies

```jsx
useEffect(() => {
  console.log("Runs when num changes");
}, [num]);
```

Runs only when `num` changes.

---

### Multiple Dependencies

```jsx
useEffect(() => {
  console.log("Runs when either num or num2 changes");
}, [num, num2]);
```

Runs whenever **any** dependency changes.

---

## Project Flow

```
Component Loads
       │
       ▼
Render UI
       │
       ▼
Run useEffect(num)
Run useEffect(num2)
       │
       ▼
User clicks Button 1
       │
       ▼
num updates
       │
       ▼
Component re-renders
       │
       ▼
Only useEffect([num]) runs
```

---

## Expected Console Output

### On Initial Render

```
useEffect is running depend on num
num ki value change ho gayi

useEffect running depend on num2
```

### Click First Button

```
useEffect is running depend on num
num ki value change ho gayi
```

### Click Second Button

```
useEffect running depend on num2
```

---

## Learning Outcome

After completing this example, you should understand:

- How `useState` stores state.
- How `useEffect` works.
- What a dependency array is.
- Why effects only run when their dependencies change.
- How React re-renders components after state updates.