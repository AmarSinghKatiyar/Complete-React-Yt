# React `useEffect` with Dependency Array

This project demonstrates how `useEffect` works with different dependency arrays in React using two state variables.

---

## 🚀 Concepts Covered

- `useState`
- `useEffect`
- Component Mounting
- Component Updating
- Dependency Array
- React Re-rendering

---

## 📂 Project Overview

The application contains:

- Two state variables: `num` and `num2`
- Two buttons to update each state
- Two separate `useEffect` hooks
- Console logs to understand when each effect runs

---

## 📝 Code

### State

```jsx
const [num, setnum] = useState(0);
const [num2, setnum2] = useState(0);
```

- `num` stores the first value.
- `num2` stores the second value.

Whenever a state changes, React re-renders the component.

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

These functions are called inside the effects to demonstrate when they execute.

---

### First Effect

```jsx
useEffect(() => {
  console.log("useEffect is running depend on num");
  numchanging();
}, [num]);
```

This effect runs:

- ✅ After the component mounts.
- ✅ Whenever `num` changes.
- ❌ It does not run when only `num2` changes.

---

### Second Effect

```jsx
useEffect(() => {
  console.log("use effect running depend on num2");
}, [num2]);
```

This effect runs:

- ✅ After the component mounts.
- ✅ Whenever `num2` changes.
- ❌ It does not run when only `num` changes.

---

# 📌 Understanding Mounting

**Mounting** means React creates the component and adds it to the browser for the first time.

When your application starts, React performs these steps:

```text
<App />
   │
   ▼
Create Component
   │
   ▼
Initialize State

num = 0
num2 = 0
   │
   ▼
Render JSX
   │
   ▼
Insert into DOM
   │
   ▼
Component Mounted ✅
```

Immediately after mounting, React executes every `useEffect`.

Therefore, your console will display:

```text
useEffect is running depend on num
num li value change ho gayi

use effect running depend on num2
```

This happens **even though you haven't clicked any button**, because `useEffect` always runs once after the initial render.

---

# 📌 Updating

Updating happens whenever a state changes.

Example:

```jsx
setnum(num + 1);
```

Flow:

```text
Button Click
      │
      ▼
num changes
      │
      ▼
Component Re-renders
      │
      ▼
React checks dependency arrays
```

### React checks:

```jsx
[num]
```

Old value:

```text
0
```

New value:

```text
1
```

The value changed, so React executes:

```jsx
useEffect(() => {
  console.log("useEffect is running depend on num");
}, [num]);
```

Console:

```text
useEffect is running depend on num
num li value change ho gayi
```

---

Now React checks:

```jsx
[num2]
```

Old value:

```text
0
```

New value:

```text
0
```

The value did **not** change.

So React skips this effect.

---

## Clicking the Second Button

```jsx
setnum2(num2 + 1);
```

React compares:

```text
num  : 1 → 1
```

No change.

Skip first effect.

Then:

```text
num2 : 0 → 1
```

Changed.

Run second effect.

Console:

```text
use effect running depend on num2
```

---

# 🔄 Project Flow

```text
Application Starts
        │
        ▼
Component Mounts
        │
        ▼
Both useEffects execute
        │
        ▼
User clicks First Button
        │
        ▼
num changes
        │
        ▼
Component Updates
        │
        ▼
Only useEffect([num]) runs
```

---

```text
User clicks Second Button
        │
        ▼
num2 changes
        │
        ▼
Component Updates
        │
        ▼
Only useEffect([num2]) runs
```

---

# 📚 Dependency Array

## Empty Dependency Array

```jsx
useEffect(() => {
  console.log("Runs only once");
}, []);
```

Runs only after the component mounts.

---

## No Dependency Array

```jsx
useEffect(() => {
  console.log("Runs after every render");
});
```

Runs:

- After mounting
- After every update

---

## Single Dependency

```jsx
useEffect(() => {
  console.log("Runs when num changes");
}, [num]);
```

Runs:

- After mounting
- Whenever `num` changes

---

## Multiple Dependencies

```jsx
useEffect(() => {
  console.log("Runs when num or num2 changes");
}, [num, num2]);
```

Runs:

- After mounting
- Whenever **either** dependency changes

---

# 🎯 Learning Outcome

After completing this project, you should understand:

- How `useState` stores state.
- What component mounting means.
- What component updating means.
- How `useEffect` works.
- Why `useEffect` runs once after mounting.
- How dependency arrays control when an effect executes.
- How React decides whether to run or skip an effect.