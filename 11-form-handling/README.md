# React Form Submission App

A simple React application that demonstrates form handling using React. The app collects a user's Name, Password, and Email, validates the inputs, and displays a success alert when the form is submitted.

---

## Features

- React Functional Components
- Form submission using `onSubmit`
- Prevents page refresh with `preventDefault()`
- HTML form validation using `required`
- Dark-themed user interface
- Beginner-friendly React project

---

## Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3

---

## Project Structure

```bash
src/
├── App.jsx
├── index.css
└── main.jsx
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/AmarSinghKatiyar/react-form-submission-app.git
```

### 2. Navigate to the Project Directory

```bash
cd react-form-submission-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

---

## Code Explanation

### Form Submit Handler

```javascript
const submitHandler = (e) => {
  e.preventDefault();
  alert("DATA SUBMITTED SUCCESSFULLY");
};
```

### Form Element

```jsx
<form onSubmit={submitHandler}>
```

The form uses the `onSubmit` event to trigger the submit handler. The page does not reload because of `e.preventDefault()`.

---

## UI Design

### Theme

- Black Background
- White Text
- Simple and Clean Layout
- Styled Input Fields
- Responsive Form Width

### CSS Used

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

html,
body {
  height: 100%;
  width: 100%;
}

body {
  background: black;
}

.main {
  height: 100px;
  width: 300px;
  margin: 200px;
  line-height: 40px;
}

input {
  width: 300px;
  height: 40px;
  padding: 5px;
  border-radius: 3px;
  color: black;
}

button {
  background-color: black;
  font-size: 20px;
  border-radius: 4px;
}
```

---

## How It Works

1. User enters Name.
2. User enters Password.
3. User enters Email.
4. User clicks the **SUBMIT** button.
5. Form validation checks required fields.
6. Success alert is displayed.

---

## Learning Outcomes

This project helps beginners understand:

- React Components
- JSX Syntax
- Event Handling
- Form Submission
- Preventing Default Browser Behavior
- Basic CSS Styling

---

## Future Improvements

- Add React `useState`
- Store and display submitted data
- Reset form after submission
- Add responsive design
- Integrate backend API
- Show success/error messages on the page instead of alerts

---

## Screenshot

Add your project screenshot here:

```md
![Project Screenshot](./screenshot.png)
```

---

## Author

**AmarSinghKatiyar**

### Connect With Me

- GitHub: https://github.com/AmarSinghKatiyar

---

## License

This project is open source and available under the MIT License.

---

⭐ If you found this project helpful, consider giving it a star on GitHub.