# React Notes - Local Storage & Session Storage

## What is Web Storage?

Web Storage is a browser feature that allows us to store data in the user's browser.

There are two types:

1. **Local Storage**
2. **Session Storage**

---

# Local Storage

- Stores data permanently until it is manually removed.
- Data remains even after closing the browser.
- Data is stored as **key-value pairs**.
- Both **key** and **value** are stored as **strings**.

### Syntax

```javascript
localStorage.setItem(key, value);
localStorage.getItem(key);
localStorage.removeItem(key);
localStorage.clear();
```

---

# Session Storage

- Stores data only for the current browser tab.
- Data is deleted when the tab or browser is closed.
- Also stores data as **key-value pairs**.
- Values are stored in **string format**.

### Syntax

```javascript
sessionStorage.setItem(key, value);
sessionStorage.getItem(key);
sessionStorage.removeItem(key);
sessionStorage.clear();
```

---

# Difference Between Local Storage and Session Storage

| Local Storage | Session Storage |
|---------------|-----------------|
| Data remains after browser closes | Data is removed after browser/tab closes |
| Shared across browser tabs (same origin) | Only available in the current tab |
| Stores data permanently until removed | Temporary storage |
| Capacity is around 5–10 MB | Capacity is around 5–10 MB |

---

# Methods

## 1. setItem()

Stores data.

```javascript
localStorage.setItem("user", "bheem");
```

---

## 2. getItem()

Retrieves data.

```javascript
const user = localStorage.getItem("user");

console.log(user);
```

Output

```
bheem
```

---

## 3. removeItem()

Removes one specific key.

```javascript
localStorage.removeItem("user");
```

---

## 4. clear()

Removes all stored data.

```javascript
localStorage.clear();
```

---

# Example 1 - Store and Retrieve String

```jsx
import React from "react";

const App = () => {

  localStorage.setItem("user", "Chotta Bheem");
  localStorage.setItem("age", "18");

  const user = localStorage.getItem("user");
  const age = localStorage.getItem("age");

  console.log(user);
  console.log(age);

  return <div>App</div>;
};

export default App;
```

Output

```
Chotta Bheem
18
```

---

# Example 2 - removeItem()

```jsx
import React from "react";

const App = () => {

  localStorage.setItem("age", "18");

  const age = localStorage.getItem("age");

  localStorage.removeItem("age");

  console.log(age);

  return <div>App</div>;
};

export default App;
```

Output

```
18
```

### Why does it still print 18?

Execution order:

```text
setItem()
↓

getItem()
↓

removeItem()
↓

console.log()
```

The variable `age` already contains `"18"`.

`removeItem()` only removes data from Local Storage.

It **does not change the JavaScript variable**.

To verify removal:

```javascript
console.log(localStorage.getItem("age"));
```

Output

```
null
```

---

# Storing Arrays or Objects

Local Storage only stores **strings**.

If we store an object directly:

```javascript
const obj = {
  user: "bheem"
};

localStorage.setItem("user", obj);
```

Output

```
[object Object]
```

This is not useful.

Instead, convert the object into a JSON string.

---

# JSON.stringify()

Converts an object into a string.

```javascript
const obj = {
  user: "bheem",
  age: 18
};

const str = JSON.stringify(obj);

console.log(str);
```

Output

```text
{"user":"bheem","age":18}
```

Type

```javascript
console.log(typeof str);
```

Output

```
string
```

---

# JSON.parse()

Converts a JSON string back into a JavaScript object.

```javascript
const user = JSON.parse(str);

console.log(user);
```

Output

```javascript
{
  user: "bheem",
  age: 18
}
```

Type

```javascript
console.log(typeof user);
```

Output

```
object
```

---

# Example - Store Object

```jsx
import React from "react";

const App = () => {

  localStorage.clear();

  const obj = {
    user: "bheem",
    age: 18,
    college: "MPEC"
  };

  localStorage.setItem("user", JSON.stringify(obj));

  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user);

  return <div>App</div>;
};

export default App;
```

Output

```javascript
{
  user: "bheem",
  age: 18,
  college: "MPEC"
}
```

---

# typeof with Local Storage

```javascript
const obj = {
  user: "bheem",
  age: 18
};

localStorage.setItem("user", JSON.stringify(obj));

const user = localStorage.getItem("user");

console.log(user);
console.log(typeof user);
```

Output

```text
{"user":"bheem","age":18}
string
```

Because Local Storage always returns strings.

---

# Getting Original Object

```javascript
const user = JSON.parse(localStorage.getItem("user"));

console.log(user);

console.log(typeof user);
```

Output

```javascript
{
  user: "bheem",
  age: 18
}
```

```
object
```

---

# Common Mistake

Wrong

```javascript
const array = {
  user: "bheem",
  age: 18
};

localStorage.setItem("user", JSON.stringify(array));

const user = localStorage.getItem(array);
```

Why is it wrong?

`getItem()` expects a string key.

Instead of passing a key:

```javascript
"user"
```

you passed an object.

JavaScript converts it into

```text
[object Object]
```

So it becomes

```javascript
localStorage.getItem("[object Object]");
```

No key exists with that name.

Therefore,

```javascript
console.log(user);
```

Output

```
null
```

---

# Why does typeof null return "object"?

```javascript
console.log(typeof null);
```

Output

```
object
```

This is a historical bug in JavaScript.

It has existed since the beginning of the language and cannot be changed because it would break existing code.

So,

```javascript
const user = localStorage.getItem(array);

console.log(user);
```

Output

```
null
```

```javascript
console.log(typeof user);
```

Output

```
object
```

because

```javascript
typeof null === "object";
```

---

# Correct Code

```jsx
import React from "react";

const App = () => {

  localStorage.clear();

  const obj = {
    user: "bheem",
    age: 18,
    college: "MPEC"
  };

  localStorage.setItem("user", JSON.stringify(obj));

  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user);

  return <div>App</div>;
};

export default App;
```

---

# Session Storage Example

```jsx
import React from "react";

const App = () => {

  sessionStorage.setItem("name", "Bheem");

  const name = sessionStorage.getItem("name");

  console.log(name);

  return <div>App</div>;
};

export default App;
```

---

# Local Storage vs Session Storage Example

```javascript
localStorage.setItem("user", "Bheem");

sessionStorage.setItem("token", "123456");
```

If browser closes:

```
localStorage
✔ Data still exists

sessionStorage
❌ Data is removed
```

---

# Important Interview Points

- Local Storage stores data permanently.
- Session Storage stores data temporarily.
- Both store data as key-value pairs.
- Keys and values are always strings.
- Use `setItem()` to store data.
- Use `getItem()` to retrieve data.
- Use `removeItem()` to remove one item.
- Use `clear()` to remove all items.
- Objects and arrays cannot be stored directly.
- Use `JSON.stringify()` before storing objects/arrays.
- Use `JSON.parse()` after retrieving objects/arrays.
- `localStorage.getItem("user")` returns a string.
- `JSON.parse(localStorage.getItem("user"))` returns an object.
- `typeof null` returns `"object"` due to a historical JavaScript bug.

---

# Quick Revision

```javascript
// Store String
localStorage.setItem("name", "Bheem");

// Get String
localStorage.getItem("name");

// Remove One Item
localStorage.removeItem("name");

// Clear All
localStorage.clear();

// Store Object
const obj = {
  user: "Bheem",
  age: 18
};

localStorage.setItem("user", JSON.stringify(obj));

// Get Object
const user = JSON.parse(localStorage.getItem("user"));

// Session Storage
sessionStorage.setItem("token", "123");
sessionStorage.getItem("token");
sessionStorage.removeItem("token");
sessionStorage.clear();
```