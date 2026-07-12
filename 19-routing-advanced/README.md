# 🚀 React Router DOM Project

This project is a beginner-friendly React application that demonstrates the core concepts of **React Router DOM**. It covers routing, navigation, nested routes, dynamic routes, programmatic navigation, and handling invalid URLs.

---

# 📌 Technologies Used

- React.js
- React Router DOM
- Tailwind CSS
- JavaScript (ES6)

---

# 📂 Project Structure

```bash
src/
│
├── Components/
│   ├── Navbar.jsx
│   ├── NavbarNavigate.jsx
│   └── Footer.jsx
│
├── Pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Men.jsx
│   ├── Women.jsx
│   ├── Kids.jsx
│   ├── Project.jsx
│   ├── ProjectDetail.jsx
│   └── PageNotFound.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 📖 Concepts Used

## 1. BrowserRouter

`BrowserRouter` is used to enable routing in the React application.

Without `BrowserRouter`, React Router cannot work.

Example:

```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
    <App />
</BrowserRouter>
```

---

## 2. Routes

`Routes` is used to group all the routes of the application.

Only one matching route is rendered at a time.

Example:

```jsx
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
</Routes>
```

---

## 3. Route

A `Route` connects a URL path with a React component.

Example:

```jsx
<Route path="/" element={<Home />} />
```

Meaning:

- `/` → Home Component

Another example:

```jsx
<Route path="/Contact" element={<Contact />} />
```

Meaning:

- `/Contact` → Contact Component

---

## 4. Link

`Link` is used to navigate between pages without refreshing the browser.

Example:

```jsx
<Link to="/">Home</Link>

<Link to="/About">About</Link>

<Link to="/Contact">Contact</Link>
```

Unlike the HTML `<a>` tag, `Link` keeps the application fast because it doesn't reload the page.

---

## 5. useNavigate()

`useNavigate()` is a React Router Hook.

It is used to navigate programmatically using JavaScript.

Example:

```jsx
const navigate = useNavigate();

navigate("/");
```

This takes the user to the Home page.

### Go Back

```jsx
navigate(-1);
```

Moves to the previous page.

### Go Forward

```jsx
navigate(1);
```

Moves to the next page.

---

## 6. Nested Routing

Nested Routing means showing one page inside another page.

Example:

```
About
 ├── Men
 ├── Women
 └── Kids
```

Route:

```jsx
<Route path="/About" element={<About />}>
    <Route path="Men" element={<Men />} />
    <Route path="Women" element={<Women />} />
    <Route path="Kids" element={<Kids />} />
</Route>
```

The child pages (`Men`, `Women`, `Kids`) are rendered inside the `About` component.

---

## 7. Outlet

`Outlet` is used to display nested routes.

Without `Outlet`, child components will never appear.

Example:

```jsx
import { Outlet } from "react-router-dom";

function About() {
    return (
        <>
            <h1>About Page</h1>

            <Outlet />
        </>
    );
}
```

When visiting:

```
/About/Men
```

React displays:

```
About Page

Men Page
```

---

## 8. Dynamic Routing

Dynamic Routing allows a URL to contain dynamic values.

Example Route:

```jsx
<Route path="/Project/:id" element={<ProjectDetail />} />
```

Possible URLs:

```
/Project/1

/Project/2

/Project/10

/Project/101
```

Each URL loads the same component but with a different `id`.

---

## 9. useParams()

`useParams()` is a React Router Hook.

It is used to read values from a dynamic URL.

Example:

```jsx
import { useParams } from "react-router-dom";

const { id } = useParams();

console.log(id);
```

If the URL is

```
/Project/25
```

Then

```jsx
id = 25
```

---

## 10. Wildcard Route (404 Page)

The wildcard route catches every invalid URL.

Example:

```jsx
<Route path="*" element={<PageNotFound />} />
```

If the user visits:

```
/abcd

/hello

/random-page
```

The application shows:

```
404 | Page Not Found
```

---

# 📋 Application Flow

```
Home
│
├── About
│      │
│      ├── Men
│      ├── Women
│      └── Kids
│
├── Contact
│
├── Project
│      │
│      ├── Project/1
│      ├── Project/2
│      └── Project/:id
│
└── 404 Page
```

---

# 📚 React Router Hooks Used

| Hook | Purpose |
|------|---------|
| `useNavigate()` | Navigate to another page using JavaScript |
| `useParams()` | Read dynamic values from the URL |

---

# 📚 React Router Components Used

| Component | Purpose |
|-----------|---------|
| `BrowserRouter` | Enables routing in the application |
| `Routes` | Groups all routes |
| `Route` | Maps a URL to a component |
| `Link` | Navigates without refreshing the page |
| `Outlet` | Displays nested child routes |

---

# 🎯 Features

- Home Page
- About Page
- Nested Routing
- Men, Women & Kids Pages
- Contact Page
- Dynamic Project Details Page
- Navigation Buttons
- Navbar
- Footer
- 404 Error Page
- Responsive UI using Tailwind CSS

---

# ▶️ How to Run the Project

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Go to the project folder

```bash
cd project-name
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

---

# 📝 Learning Outcome

After completing this project, you will understand:

- How React Router works
- How to create multiple pages
- How to navigate using `Link`
- How to navigate using `useNavigate()`
- How to create nested routes
- How `Outlet` renders child routes
- How to create dynamic routes
- How to use `useParams()`
- How to handle invalid URLs with a 404 page
- How to organize a React project using reusable components

---


# 👨‍💻 Author

**Amar**

This project was built to practice and understand the fundamentals of **React Router DOM** in a simple and beginner-friendly way.