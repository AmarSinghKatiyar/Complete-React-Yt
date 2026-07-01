# 📝 React Notes App

A simple and responsive Notes App built with **React** and **Tailwind CSS**. Users can create notes by entering a title and description, and all added notes are displayed instantly in the "Recent Notes" section.

## 🚀 Features

* ✍️ Add notes with a title and description
* ⚡ Instant rendering of newly added notes
* 🎨 Modern UI with Tailwind CSS gradients
* 📱 Responsive two-column layout
* 🗒️ Sticky note style cards for displaying notes
* 🔄 Uses React Hooks (`useState`) for state management

## 🛠️ Technologies Used

* React
* JavaScript (ES6+)
* Tailwind CSS
* Vite / Create React App (depending on your setup)

## 📂 Project Structure

```text
src/
│── App.jsx
│── main.jsx
│── index.css
```

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-notes-app.git
```

2. Navigate to the project folder:

```bash
cd react-notes-app
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

If you're using Create React App instead of Vite:

```bash
npm start
```

## 📖 How It Works

1. Enter a **Title** for the note.
2. Enter the **Note Details** in the textarea.
3. Click the **Add Notes** button.
4. The note is stored in React state and immediately appears in the **Recent Notes** section.
5. The input fields are automatically cleared after submission.

## 🧠 State Management

The application uses three React state variables:

* `title` – Stores the note title.
* `details` – Stores the note description.
* `task` – Stores the list of all notes.

When the form is submitted:

* The default page reload is prevented.
* A new note object is created.
* The note is added to the `task` array.
* The state updates and React re-renders the notes list.
* Input fields are reset.

## 📸 UI Preview

The interface includes:

* A left panel for adding notes.
* A right panel for viewing recently added notes.
* Gradient backgrounds and sticky note cards for a clean, modern appearance.

## 🔮 Future Improvements

* 🗑️ Delete notes
* ✏️ Edit existing notes
* 💾 Save notes using Local Storage
* 🔍 Search notes
* 🏷️ Add categories or tags
* 🌙 Dark/Light mode toggle
* 📅 Add timestamps
* 📌 Pin important notes

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to your branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ using React and Tailwind CSS.**
