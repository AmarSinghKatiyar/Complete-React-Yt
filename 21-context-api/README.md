# 🌗 React Context API Theme Switcher

A simple React project demonstrating how to use the **Context API** to implement a global light/dark theme toggle.

## 🚀 Features

* ⚛️ Built with React
* 🎯 Uses Context API for global state management
* 🌞 Light Theme
* 🌙 Dark Theme
* 🎨 Dynamic background and text color changes
* 🔄 Theme toggle button

---

## 📂 Project Structure

```text
src/
│── Components/
│   ├── Button.jsx
│   ├── Navbar.jsx
│   └── Nav2.jsx
│
│── Context/
│   └── ThemeContext.jsx
│
│── App.jsx
│── main.jsx
```

---

## 🛠️ Technologies Used

* React
* Context API
* Hooks (`useState`, `useContext`)
* Tailwind CSS
* Vite

---

## 📖 How It Works

### 1. Create Context

A context is created using `createContext()`.

```jsx
export const themedatacontext = createContext();
```

---

### 2. Provide Context

The provider stores the theme state and makes it available throughout the application.

```jsx
const [theme, settheme] = useState("light");

<themedatacontext.Provider value={[theme, settheme]}>
  {children}
</themedatacontext.Provider>
```

---

### 3. Consume Context

Components access the global theme using `useContext()`.

```jsx
const [theme, settheme] = useContext(themedatacontext);
```

---

### 4. Toggle Theme

```jsx
const change = () => {
  settheme(theme === "light" ? "dark" : "light");
};
```

---

### 5. Apply Theme

The application background and text color update dynamically.

```jsx
<div
  className={`h-screen w-full ${
    theme === "light"
      ? "bg-indigo-400 text-black"
      : "bg-gray-800 text-white"
  }`}
>
```

---

## ▶️ Getting Started

### Clone the repository

```bash
git clone <repository-url>
```

### Navigate to the project

```bash
cd <project-folder>
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

---

## 📸 Preview

### Light Theme

* Background: Indigo
* Text: Black

### Dark Theme

* Background: Gray
* Text: White

---

## 🎯 Learning Outcomes

This project demonstrates:

* Creating a React Context
* Providing data globally with Context Provider
* Consuming context using `useContext`
* Managing global state with `useState`
* Theme switching using React Context API
* Conditional rendering with Tailwind CSS

---

## 👨‍💻 Author

**Amar Singh Katiyar**

GitHub: https://github.com/your-github-username

---

## 📄 License

This project is created for learning and educational purposes.
