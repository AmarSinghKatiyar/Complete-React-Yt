# 🚀 React Router DOM (Complete Beginner Notes)

This README explains **React Router DOM from start to end** in very simple language.

---

# What is React Router DOM?

React Router DOM is a library that helps us create **multiple pages** in a React application.

Without React Router, our React application has only one page.

After installing React Router, we can create pages like:

```
Home
About
Courses
Contact
```

and move between them **without refreshing the whole website**.

---

# Installation

Install React Router DOM using npm.

```bash
npm i react-router-dom
```

---

# What is SPA?

SPA means

> **Single Page Application**

A React application has only **one HTML file**.

```
index.html
```

Unlike normal websites, React does **not** create

```
about.html

contact.html

courses.html
```

Instead, React changes only the component on the screen.

Example

Normal Website

```
Home

↓

Click About

↓

Whole page reloads

↓

About page opens
```

React Website

```
Home

↓

Click About

↓

Only Home component changes

↓

About component appears

(No page refresh)
```

This makes React applications much faster.

---

# Why do we need React Router?

Suppose we have three pages.

```
Home

About

Contact
```

Without React Router, switching pages is difficult.

React Router solves this problem.

It changes the component according to the URL.

Example

```
localhost:5173/

↓

Home
```

```
localhost:5173/about

↓

About
```

```
localhost:5173/contact

↓

Contact
```

---

# Types of Routers

React Router provides different routers.

There are mainly three routers.

```
BrowserRouter

HashRouter

MemoryRouter
```

---

# 1. BrowserRouter

This is the router used in almost every React project.

It creates clean URLs.

Example

```
localhost:5173/
```

```
localhost:5173/about
```

```
localhost:5173/contact
```

Notice there is **no #** in the URL.

BrowserRouter uses the browser's **History API**.

The browser keeps a history of pages.

Example

```
Home

↓

About

↓

Contact
```

Now the browser remembers

- Back button
- Forward button
- Previous page

Internally it uses

```
history.pushState()

history.replaceState()

history.back()

history.forward()
```

React Router uses these automatically.

---

# 2. HashRouter

HashRouter stores the route after **#**.

Example

```
localhost:5173/#/
```

```
localhost:5173/#/about
```

```
localhost:5173/#/contact
```

Everything after **#** is called a **Hash**.

The browser ignores everything after # while talking to the server.

React reads it and shows the correct page.

HashRouter is mostly used on

- GitHub Pages
- Static Hosting
- Websites without backend routing

---

# 3. MemoryRouter

MemoryRouter stores everything inside memory.

The browser URL never changes.

Example

Current URL

```
localhost:5173
```

Go to About

URL is still

```
localhost:5173
```

But internally

```
Current Page = About
```

MemoryRouter is mostly used for

- Testing
- React Native
- Temporary routing

---

# Router Comparison

| Router | URL | Stores Route In | Used For |
|----------|------|----------------|------------|
| BrowserRouter | /about | Browser History API | Normal React Projects |
| HashRouter | #/about | URL Hash | GitHub Pages |
| MemoryRouter | URL doesn't change | Memory | Testing |

---

# Basic Setup

Project Structure

```
src

App.jsx

main.jsx

pages

Home.jsx

About.jsx

Contact.jsx
```

---

# main.jsx

Wrap your application with BrowserRouter.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
```

Now every component can use routing.

---

# App.jsx

Import

```jsx
import { Routes, Route } from "react-router-dom";
```

---

# What is Routes?

Think of Routes as a **container**.

It stores all Route components.

Example

```
Routes

│

├── Route

├── Route

└── Route
```

Routes checks the current URL.

Then it decides which page should appear.

---

# What is Route?

Route connects

```
URL

↓

React Component
```

Example

```jsx
<Route path="/" element={<Home />} />
```

Means

```
If URL is "/"

↓

Show Home Component
```

---

Example

```jsx
<Routes>

<Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />

<Route path="/contact" element={<Contact />} />

</Routes>
```

---

Now

```
localhost:5173/

↓

Home Component
```

```
localhost:5173/about

↓

About Component
```

```
localhost:5173/contact

↓

Contact Component
```

---

# Example Website URLs

Suppose your website is

```
sheryians.com
```

Home

```
sheryians.com/

↓

path="/"
```

About

```
sheryians.com/about

↓

path="/about"
```

Courses

```
sheryians.com/courses

↓

path="/courses"
```

Courses About

```
sheryians.com/courses/about

↓

path="/courses/about"
```

---

# Components Outside Routes

Example

```jsx
<Navbar />

<Routes>

<Route />

<Route />

</Routes>

<Footer />
```

Navbar is outside Routes.

Footer is outside Routes.

So they never disappear.

Only the page changes.

Example

Home

```
Navbar

Home

Footer
```

Click About

```
Navbar

About

Footer
```

Navbar and Footer stay the same.

Only the component inside Routes changes.

---

# Why should we use Link?

Normal HTML

```html
<a href="/about">About</a>
```

Clicking it

```
Reloads the whole website
```

React Router provides

```jsx
<Link to="/about">
```

This changes only the page component.

No refresh.

Always use

```jsx
<Link>
```

instead of

```html
<a>
```

inside React applications.

---

# Navbar Example

```jsx
import { Link } from "react-router-dom";

<Link to="/">Home</Link>

<Link to="/about">About</Link>

<Link to="/contact">Contact</Link>
```

---

# Nested Routes

Nested Routes mean

Page inside another page.

Example

```
Courses

↓

React

↓

JavaScript

↓

Node.js
```

URLs

```
/courses
```

```
/courses/react
```

```
/courses/javascript
```

Example

```jsx
<Route path="/courses" element={<Courses />}>

<Route path="react" element={<ReactCourse />} />

<Route path="javascript" element={<JavaScript />} />

</Route>
```

Inside Courses component

```jsx
import { Outlet } from "react-router-dom";

function Courses(){

return(

<>

<h1>Courses</h1>

<Outlet />

</>

)

}
```

Outlet tells React

```
Show nested page here.
```

---

# Dynamic Routes

Suppose there are many products.

```
Product 1

Product 2

Product 3

Product 4
```

Creating routes one by one is impossible.

Instead

```jsx
<Route path="/product/:id" element={<Product />} />
```

Now

```
/product/1

/product/2

/product/100

/product/999
```

All open the same component.

Inside Product.jsx

```jsx
import { useParams } from "react-router-dom";

const { id } = useParams();
```

Now

```
/product/25
```

id becomes

```
25
```

---

# useNavigate()

Sometimes we want to change pages using JavaScript.

Example

```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

navigate("/about");
```

Now About page opens.

Go Back

```jsx
navigate(-1);
```

Go Forward

```jsx
navigate(1);
```

Replace current history

```jsx
navigate("/login", { replace: true });
```

---

# 404 Page

Suppose user types

```
localhost:5173/hello
```

No route exists.

We show

```
Page Not Found
```

Example

```jsx
<Route path="*" element={<NotFound />} />
```

The `*` means

```
Match every unknown URL.
```

---

# Complete App.jsx

```jsx
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {

return (

<>

<Navbar />

<Routes>

<Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />

<Route path="/contact" element={<Contact />} />

<Route path="*" element={<NotFound />} />

</Routes>

<Footer />

</>

);

}

export default App;
```

---

# Complete Flow

```
Browser

↓

User types URL

↓

BrowserRouter reads URL

↓

Routes checks URL

↓

Matching Route found

↓

React shows Component

↓

Only component changes

↓

Navbar stays

↓

Footer stays

↓

No page refresh
```

---

# React Router Hooks

| Hook | Purpose |
|--------|----------|
| useNavigate() | Navigate using JavaScript |
| useParams() | Read dynamic URL values |
| useLocation() | Get current URL information |

---

# Common Components

| Component | Purpose |
|------------|---------|
| BrowserRouter | Enables routing |
| Routes | Container for all routes |
| Route | Maps URL to component |
| Link | Navigate without refresh |
| Outlet | Shows nested routes |
| Navigate | Redirect to another page |

---

# Best Practices

✅ Use BrowserRouter for most projects.

✅ Use lowercase URLs.

```
/about

/contact

/courses
```

✅ Keep Navbar and Footer outside Routes.

✅ Use Link instead of a tag.

✅ Create a 404 page.

✅ Use nested routes when pages have child pages.

✅ Use dynamic routes for IDs.

---

# Summary

- React Router DOM creates multiple pages in React.
- React is a Single Page Application (SPA).
- BrowserRouter uses the browser History API.
- HashRouter stores routes after #.
- MemoryRouter stores routes in memory.
- Routes is the container for all Route components.
- Route connects a URL to a React component.
- Link navigates without refreshing the page.
- Navbar and Footer should stay outside Routes so they remain visible.
- Outlet is used for nested routes.
- useParams() reads dynamic URL values.
- useNavigate() changes pages using JavaScript.
- path="*" creates a 404 page.
- React Router updates only the page component, making navigation fast and smooth.