# Complete-React
# React Quick Notes for Placements

## What is React?

React is a JavaScript library developed by Meta (Facebook) for building fast and interactive User Interfaces (UI).

### Features
- Component-Based Architecture
- Virtual DOM
- Reusable Components
- One-Way Data Binding
- Declarative Programming
- Fast Rendering

---

# Why React?

Without React:

- Direct DOM Manipulation
- Complex State Management
- Hard to Scale

With React:

- Reusable Components
- Efficient Updates
- Better Performance
- Easy State Management

---

# Virtual DOM

React creates a virtual copy of the real DOM.

### Process

```text
State Changes
      ↓
Virtual DOM Updated
      ↓
Diffing Algorithm
      ↓
Only Changed Parts Updated
      ↓
Real DOM Updated
```

Benefits:
- Faster Rendering
- Better Performance

---

# JSX

JSX = JavaScript XML

Allows writing HTML inside JavaScript.

Example:

```jsx
const element = <h1>Hello React</h1>;
```

JSX gets converted into:

```jsx
React.createElement()
```

Rules:
- Single Parent Element
- Use className instead of class
- Close all tags

Example:

```jsx
<div>
  <h1>Hello</h1>
</div>
```

---

# Components

Components are reusable UI blocks.

### Functional Component

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

or

```jsx
const App = () => {
  return <h1>Hello</h1>;
};
```

---

# Props

Props = Properties

Used to pass data from Parent to Child.

Parent:

```jsx
<User name="Amar" />
```

Child:

```jsx
function User(props){
  return <h1>{props.name}</h1>;
}
```

Destructuring:

```jsx
function User({name}){
  return <h1>{name}</h1>;
}
```

Props are Read Only.

---

# State

State stores dynamic data.

Example:

```jsx
const [count, setCount] = useState(0);
```

State changes trigger re-rendering.

---

# Hooks

Hooks allow Functional Components to use React features.

Common Hooks:

```text
useState
useEffect
useContext
useRef
useMemo
useCallback
useReducer
```

---

# useState

Used for state management.

Syntax:

```jsx
const [state, setState] = useState(initialValue);
```

Example:

```jsx
const [count, setCount] = useState(0);
```

Update State:

```jsx
setCount(count + 1);
```

Best Practice:

```jsx
setCount(prev => prev + 1);
```

---

# useEffect

Used for side effects.

Examples:
- API Calls
- Timers
- Event Listeners
- DOM Manipulation

Syntax:

```jsx
useEffect(() => {
  // code
}, []);
```

Runs once after initial render.

---

### Dependency Array

Run once:

```jsx
useEffect(() => {
}, []);
```

Run every render:

```jsx
useEffect(() => {
});
```

Run when count changes:

```jsx
useEffect(() => {
}, [count]);
```

---

# Cleanup Function

Used to prevent memory leaks.

```jsx
useEffect(() => {
  const timer = setInterval(() => {},1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

---

# Event Handling

```jsx
<button onClick={handleClick}>
  Click
</button>
```

Example:

```jsx
function handleClick(){
  alert("Clicked");
}
```

---

# Conditional Rendering

### if-else

```jsx
if(isLoggedIn){
  return <Home />;
}
return <Login />;
```

### Ternary Operator

```jsx
{
  isLoggedIn ? <Home /> : <Login />
}
```

### Logical AND

```jsx
{
  isAdmin && <AdminPanel />
}
```

---

# List Rendering

Using map()

```jsx
const users = ["A","B","C"];

{
  users.map(user => (
    <h1 key={user}>{user}</h1>
  ))
}
```

Always use key.

---

# Forms

Controlled Components

```jsx
const [name,setName] = useState("");

<input
  value={name}
  onChange={(e)=>setName(e.target.value)}
/>
```

---

# Lifting State Up

Move shared state to common parent.

```text
Parent
 ├── Child A
 └── Child B
```

Parent manages state and passes data through props.

---

# useRef

Stores values without re-rendering.

Access DOM:

```jsx
const inputRef = useRef();

<input ref={inputRef}/>
```

Focus Input:

```jsx
inputRef.current.focus();
```

---

# useContext

Avoid Prop Drilling.

Create Context:

```jsx
const UserContext = createContext();
```

Provider:

```jsx
<UserContext.Provider value={user}>
```

Consume:

```jsx
const user = useContext(UserContext);
```

---

# useMemo

Memoizes expensive calculations.

```jsx
const result = useMemo(() => {
  return expensiveFunction();
}, [value]);
```

Prevents unnecessary recalculations.

---

# useCallback

Memoizes functions.

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

Improves performance.

---

# useReducer

Alternative to useState for complex state.

```jsx
const [state, dispatch] = useReducer(
  reducer,
  initialState
);
```

Dispatch Action:

```jsx
dispatch({type:"increment"});
```

---

# React Router

Used for Navigation.

Install:

```bash
npm install react-router-dom
```

Example:

```jsx
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
```

Navigation:

```jsx
<Link to="/about">About</Link>
```

---

# API Calls

Using fetch

```jsx
useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then(data => setData(data));
}, []);
```

Using Axios

```jsx
axios.get(url)
.then(res => setData(res.data));
```

---

# Controlled vs Uncontrolled Components

### Controlled

```jsx
<input
 value={name}
 onChange={(e)=>setName(e.target.value)}
/>
```

Managed by React.

### Uncontrolled

```jsx
<input ref={inputRef}/>
```

Managed by DOM.

---

# React Lifecycle (Functional Components)

Mount

```text
Component Created
```

Update

```text
State/Props Change
```

Unmount

```text
Component Removed
```

Using useEffect:

```jsx
useEffect(() => {
  // Mount

  return () => {
    // Unmount
  };
}, []);
```

---

# Higher Order Component (HOC)

Function that takes component and returns component.

```jsx
const Enhanced = HOC(Component);
```

Used for:
- Authentication
- Logging
- Reusability

---

# React Performance Optimization

1. React.memo()
2. useMemo()
3. useCallback()
4. Lazy Loading
5. Code Splitting

---

# React.memo

Prevents unnecessary re-renders.

```jsx
export default React.memo(Component);
```

---

# Lazy Loading

```jsx
const Home = React.lazy(() =>
  import('./Home')
);
```

Use Suspense:

```jsx
<Suspense fallback={<h1>Loading...</h1>}>
  <Home />
</Suspense>
```

---

# Key React Interview Questions

### Difference between State and Props

| State | Props |
|---------|---------|
| Mutable | Immutable |
| Managed inside component | Passed from parent |
| Can change | Read-only |

---

### Difference between useState and useRef

| useState | useRef |
|-----------|---------|
| Causes Re-render | No Re-render |
| Stores State | Stores Mutable Values |

---

### Difference between Virtual DOM and Real DOM

| Virtual DOM | Real DOM |
|-------------|----------|
| Lightweight Copy | Actual DOM |
| Fast | Slow |
| React Updates Efficiently | Full Updates |

---

### Why Keys in React?

Keys help React identify changed elements efficiently.

```jsx
<li key={id}>{name}</li>
```

---

# Most Important Placement Topics

✅ Components  
✅ JSX  
✅ Props  
✅ State  
✅ useState  
✅ useEffect  
✅ Event Handling  
✅ Conditional Rendering  
✅ List Rendering  
✅ Forms  
✅ API Calls  
✅ useRef  
✅ useContext  
✅ React Router  
✅ useMemo  
✅ useCallback  
✅ useReducer  
✅ React.memo  
✅ Lazy Loading  
✅ Virtual DOM  
✅ Controlled Components

These topics cover the majority of React questions asked in placements and interviews.
