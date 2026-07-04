# API, Fetch, Axios, Async/Await Notes

## What is an API?

**API (Application Programming Interface)** is a bridge that allows two applications to communicate with each other.

Think of an API as a **waiter in a restaurant**.

- You (Frontend) place an order (Request).
- The waiter (API) takes the request to the kitchen (Backend).
- The kitchen (Backend) prepares the food by getting data from the database.
- The waiter (API) brings the food (Response) back to you.

### Flow

```
Frontend
    │
    │ Request
    ▼
   API
    │
    ▼
Backend
    │
    ▼
Database
    │
    ▲
Backend
    │
    ▲
   API
    │ Response
    ▲
Frontend
```

---

# Frontend

The frontend is the user interface that users interact with.

Examples:

- HTML
- CSS
- JavaScript
- React
- Next.js

The frontend sends requests to the backend through an API.

---

# Backend

The backend contains the business logic.

Responsibilities:

- Authentication
- Authorization
- Database operations
- API creation
- Sending responses to the frontend

Examples:

- Node.js
- Express.js
- Django
- Spring Boot
- Laravel

---

# Database

A database stores application data.

Examples:

- MongoDB
- MySQL
- PostgreSQL
- Firebase

The backend communicates with the database to fetch, insert, update, or delete data.

---

# API Request Flow

```
Frontend
      │
      ▼
Send Request
      │
      ▼
API
      │
      ▼
Backend
      │
      ▼
Database
      │
      ▲
Returns Data
      │
      ▲
Backend
      │
      ▲
API
      │
      ▲
Frontend receives Response
```

---

# Ways to Call an API

There are two common ways to make API requests in JavaScript.

## 1. Fetch API

Fetch is built into JavaScript.

No installation is required.

Example:

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

---

## 2. Axios

Axios is an external library used to make HTTP requests.

Install Axios:

```bash
npm install axios
```

Example:

```javascript
import axios from "axios";

const getData = async () => {
    const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );

    console.log(data);
};
```

---

# Fetch vs Axios

| Fetch | Axios |
|--------|--------|
| Built into JavaScript | External library |
| No installation | Install using npm |
| Need response.json() | Automatically converts JSON |
| Slightly more code | Cleaner syntax |
| Supports Promises | Supports Promises |

---

# Synchronous vs Asynchronous JavaScript

## Synchronous

Code runs line by line.

```
Task 1
Task 2
Task 3
```

Each task waits for the previous one to finish.

---

## Asynchronous

Some tasks (like API calls) take time.

JavaScript does not wait.

Instead, it continues executing the next lines.

Example:

```
Start
API Request
End

(API Response comes later)
```

---

# Promises

An API call returns a **Promise**.

A Promise has three states.

- Pending
- Fulfilled
- Rejected

```
Pending
   |
   +------> Fulfilled
   |
   +------> Rejected
```

---

# Async and Await

`async` makes a function asynchronous.

`await` waits until the Promise is completed.

Example:

```javascript
const getData = async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const data = await response.json();

    console.log(data);
};
```

Example using Axios:

```javascript
const getData = async () => {
    const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
    );

    console.log(data);
};
```

---

# React Example Using Axios

```jsx
import React, { useState } from "react";
import axios from "axios";

const App = () => {

    const [data, setData] = useState([]);

    const getData = async () => {

        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );

        console.log(data);

        setData(data);
    };

    return (
        <div className="h-screen w-full bg-black text-white">

            <button
                onClick={getData}
                className="bg-gray-500 px-4 py-2 rounded"
            >
                DATA AA GAYA
            </button>

            <div>

                {
                    data.map((user, index) => (
                        <h3 key={index}>
                            Hello {user.name}
                        </h3>
                    ))
                }

            </div>

        </div>
    );
};

export default App;
```

---

# Explanation of the React Code

```jsx
const [data, setData] = useState([]);
```

Creates a state variable named **data**.

Initially it is an empty array.

---

```jsx
const getData = async () => {
```

Creates an asynchronous function.

---

```jsx
const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
);
```

Sends a GET request to the API.

Axios returns an object.

We destructure it to get only the `data`.

---

```jsx
setData(data);
```

Stores the API response inside React state.

React automatically re-renders the UI.

---

```jsx
data.map((user, index) => (
    <h3 key={index}>
        Hello {user.name}
    </h3>
))
```

Loops through all users and displays each user's name.

---

# JSONPlaceholder

A free fake REST API used for learning and testing.

```
https://jsonplaceholder.typicode.com
```

Example:

```
https://jsonplaceholder.typicode.com/users
```

Returns a list of users.

---

# Lorem Picsum

Lorem Picsum provides random placeholder images.

Example:

```
https://picsum.photos/300
```

Random image:

```
https://picsum.photos/300/200
```

Specific size:

```
https://picsum.photos/500/500
```

---

# HTTP Methods

| Method | Purpose |
|---------|---------|
| GET | Fetch Data |
| POST | Create Data |
| PUT | Update Entire Data |
| PATCH | Update Partial Data |
| DELETE | Delete Data |

---

# Important Points

- API connects the frontend and backend.
- Backend communicates with the database.
- Frontend never directly accesses the database.
- Fetch is built into JavaScript.
- Axios is an external library.
- Install Axios using:

```bash
npm install axios
```

- API calls are asynchronous.
- API calls return Promises.
- Promise states:
  - Pending
  - Fulfilled
  - Rejected
- `async` and `await` make asynchronous code easier to read.
- React state (`useState`) stores API data.
- `map()` is used to display lists of data.