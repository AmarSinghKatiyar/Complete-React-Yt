# 12 - Two Way Binding in React

This project demonstrates **Two-Way Binding** in React using the `useState` hook.

## What is Two-Way Binding?

Two-Way Binding means that the data is connected in both directions:

1. **Input → State**
   - When the user types in the input field, the React state updates.

2. **State → Input**
   - When the state changes, the input field automatically displays the updated value.

Because data flows in both directions, it is called **Two-Way Binding**.

---

## Example

```jsx
const [name, setName] = useState("");

<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

### How It Works

#### Step 1: User Types

If the user types:

```text
Amar
```

The `onChange` event runs:

```jsx
setName(e.target.value);
```

Now the state becomes:

```jsx
name = "Amar";
```

#### Step 2: State Updates Input

Because the input uses:

```jsx
value={name}
```

React takes the value stored in `name` and displays it inside the input box.

So:

```text
Input → State
State → Input
```

This is called **Two-Way Binding**.

---

## Project Features

- React Functional Components
- useState Hook
- Controlled Inputs
- Form Submission
- Real-Time State Updates
- Form Reset After Submit
- Simple UI Design

---

## Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

---

## How This Project Works

### Name Field

```jsx
<input
  type="text"
  value={name}
  onChange={(e) => {
    setname(e.target.value);
  }}
/>
```

- User types text.
- `setname()` updates the state.
- Input displays the latest state value.

### Password Field

```jsx
<input
  type="password"
  value={pass}
  onChange={(e) => {
    setpass(e.target.value);
  }}
/>
```

- User enters password.
- State updates instantly.
- Input always stays synchronized with state.

### Form Submission

```jsx
const eventHandler = (e) => {
  e.preventDefault();
  alert(`Successfully SignIn Welcome ${name}`);
};
```

- Prevents page refresh.
- Displays a welcome message.
- Clears input fields after submission.

---

## Learning Outcomes

After completing this project, you will understand:

- React Components
- useState Hook
- Event Handling
- Form Submission
- Controlled Components
- Two-Way Binding
- State Management

---

## Author

**AmarSinghKatiyar**

GitHub: https://github.com/AmarSinghKatiyar

---

⭐ This project is created for learning React Two-Way Binding and Form Handling.