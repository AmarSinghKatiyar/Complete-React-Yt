# ⚛️ Complete React.js Mastery

> A complete React.js learning repository covering everything from the basics to advanced concepts with hands-on projects, interview notes, and placement preparation.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Latest-purple?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![License](https://img.shields.io/badge/License-MIT-green)

---

# 📚 About

This repository contains my complete React.js learning journey.

It includes:

- 📖 React Notes
- 💻 Practical Examples
- 🚀 Mini Projects
- 🎯 Placement Preparation
- ❓ Interview Questions
- 🧠 React Hooks
- 🌐 API Projects
- 🛣️ React Router
- 🎨 Tailwind CSS
- ⚡ Context API
- 📦 Local Storage
- 📱 Responsive UI

The goal of this repository is to help beginners learn React from scratch while also preparing for interviews and placements.

---

# 📂 Repository Structure

```text
Complete-React-Yt/
│
├── 01-folder
├── 02-Components
├── 03-Props
├── 04-Cards-Project
├── 05-CSS
├── 06-Tailwind
├── 07-UI-Project
├── 08-functions
├── 09-UseState
├── 10-UseState-Advance
├── 11-form-handling
├── 12-two-way-binding
├── 13-notes-app
├── 14-localstorage
├── 15-api-calling
├── 16-useeffect
├── 17-gallery-project
├── 18-react-router-dom
├── 19-routing-advanced
├── 20-bonus-topic
├── 21-context-api
└── README.md
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/AmarSinghKatiyar/Complete-React-Yt.git
```

## Navigate to the Project

```bash
cd Complete-React-Yt
```

## Install Dependencies

```bash
npm install
```

## Run the Development Server

```bash
npm run dev
```

---

# 🎯 Learning Roadmap

## 📌 React Fundamentals

- Components
- JSX
- Props
- State
- Event Handling
- Conditional Rendering
- List Rendering
- Forms

---

## ⚛️ React Hooks

- useState
- useEffect
- useContext
- useRef
- useMemo
- useCallback
- useReducer

---

## 🛣️ React Router

- Basic Routing
- Nested Routing
- Dynamic Routing
- Navigation
- Layouts

---

## 🎨 Styling

- CSS
- Tailwind CSS
- Responsive Design

---

## 🚀 Projects Included

- Cards Project
- UI Project
- Notes App
- Gallery App
- Local Storage
- API Calling
- React Router
- Context API Theme Switcher

---

# 📖 React Quick Notes

## What is React?

React is a JavaScript library developed by Meta (Facebook) for building fast and interactive User Interfaces using reusable components.

### Features

- Component-Based Architecture
- Virtual DOM
- JSX
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

React creates a lightweight copy of the Real DOM.

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

### Benefits

- Faster Rendering
- Better Performance
- Efficient DOM Updates

---

# JSX

JSX = JavaScript XML

Allows writing HTML inside JavaScript.

Example

```jsx
const element = <h1>Hello React</h1>;
```

Compiled into

```jsx
React.createElement();
```

### JSX Rules

- Single Parent Element
- Use `className`
- Close Every Tag

---

# Components

Components are reusable UI blocks.

```jsx
function App() {
  return <h1>Hello React</h1>;
}
```

or

```jsx
const App = () => {
  return <h1>Hello React</h1>;
};
```

---

# Props

Props are used to pass data from Parent to Child.

Parent

```jsx
<User name="Amar" />
```

Child

```jsx
function User(props) {
  return <h1>{props.name}</h1>;
}
```

Destructuring

```jsx
function User({ name }) {
  return <h1>{name}</h1>;
}
```

Props are Read Only.

---

# State

Stores dynamic data.

```jsx
const [count, setCount] = useState(0);
```

Updating State

```jsx
setCount(count + 1);
```

Best Practice

```jsx
setCount((prev) => prev + 1);
```

---

# useEffect

Used for:

- API Calls
- Timers
- Event Listeners
- DOM Manipulation

```jsx
useEffect(() => {
  // code
}, []);
```

Dependency Array

```jsx
// Runs once
useEffect(() => {}, []);

// Runs every render
useEffect(() => {});

// Runs when count changes
useEffect(() => {}, [count]);
```

Cleanup

```jsx
useEffect(() => {
  const timer = setInterval(() => {}, 1000);

  return () => clearInterval(timer);
}, []);
```

---

# Event Handling

```jsx
<button onClick={handleClick}>
  Click
</button>
```

```jsx
function handleClick() {
  alert("Clicked");
}
```

---

# Conditional Rendering

```jsx
isLoggedIn ? <Home /> : <Login />
```

```jsx
isAdmin && <AdminPanel />
```

---

# List Rendering

```jsx
const users = ["A", "B", "C"];

{
  users.map((user) => (
    <h1 key={user}>{user}</h1>
  ));
}
```

Always use a unique `key`.

---

# Forms

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>;
```

---

# useRef

```jsx
const inputRef = useRef();

<input ref={inputRef} />;
```

```jsx
inputRef.current.focus();
```

---

# useContext

Create Context

```jsx
const UserContext = createContext();
```

Provider

```jsx
<UserContext.Provider value={user}>
```

Consume

```jsx
const user = useContext(UserContext);
```

---

# useMemo

```jsx
const result = useMemo(() => {
  return expensiveFunction();
}, [value]);
```

---

# useCallback

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

---

# useReducer

```jsx
const [state, dispatch] = useReducer(reducer, initialState);

dispatch({ type: "increment" });
```

---

# React Router

Install

```bash
npm install react-router-dom
```

Routes

```jsx
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
```

Navigation

```jsx
<Link to="/about">About</Link>
```

---

# API Calling

Using Fetch

```jsx
useEffect(() => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => setData(data));
}, []);
```

Using Axios

```jsx
axios.get(url).then((res) => setData(res.data));
```

---

# React Performance Optimization

- React.memo()
- useMemo()
- useCallback()
- Lazy Loading
- Code Splitting

---

# React.memo

```jsx
export default React.memo(Component);
```

---

# Lazy Loading

```jsx
const Home = React.lazy(() => import("./Home"));
```

```jsx
<Suspense fallback={<h1>Loading...</h1>}>
  <Home />
</Suspense>
```

---

# 📋 React Interview Questions

## State vs Props

| State | Props |
|--------|-------|
| Mutable | Immutable |
| Managed Inside Component | Passed From Parent |
| Can Change | Read Only |

---

## useState vs useRef

| useState | useRef |
|----------|---------|
| Re-renders Component | Doesn't Re-render |
| Stores State | Stores Mutable Values |

---

## Virtual DOM vs Real DOM

| Virtual DOM | Real DOM |
|-------------|----------|
| Lightweight Copy | Actual DOM |
| Fast | Slow |
| Efficient Updates | Full Updates |

---

# 🎯 Placement Checklist

- ✅ Components
- ✅ JSX
- ✅ Props
- ✅ State
- ✅ useState
- ✅ useEffect
- ✅ Event Handling
- ✅ Forms
- ✅ API Calling
- ✅ React Router
- ✅ Context API
- ✅ useRef
- ✅ useMemo
- ✅ useCallback
- ✅ useReducer
- ✅ React.memo
- ✅ Lazy Loading
- ✅ Virtual DOM

---

# 🤝 Contributing

Contributions are always welcome!

1. Fork this repository
2. Create a new branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

# 👨‍💻 Author

**Amar Singh Katiyar**

GitHub:
https://github.com/AmarSinghKatiyar

---

# ⭐ Support

If you found this repository helpful, please consider giving it a **⭐ Star** on GitHub.

Your support motivates me to create more educational open-source projects.

Happy Coding! 🚀