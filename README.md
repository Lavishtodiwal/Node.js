# 🚀🔥 NodeJS Complete Course — Notes & Interview Questions

> **Playlist:** [Complete NodeJS + ExpressJS + MongoDB Course in Hindi](https://www.youtube.com/watch?v=AZzV3wZCvI4&list=PL78RhpUUKSwfeSOOwfE9x6l5jTjn5LbY3)
> **Channel:** Complete Coding by Prashant Sir
> **Code Repo:** [GitHub](https://github.com/Complete-Coding/NodeJS_Complete_YouTube)

---

## 📚 Table of Contents

- [🚀🔥 NodeJS Complete Course — Notes \& Interview Questions](#-nodejs-complete-course--notes--interview-questions)
  - [📚 Table of Contents](#-table-of-contents)
  - [Lecture 1: Introduction to NodeJS](#lecture-1-introduction-to-nodejs)
    - [📝 Notes](#-notes)
    - [❓ Interview Questions](#-interview-questions)
  - [Lecture 2: Modules in NodeJS](#lecture-2-modules-in-nodejs)
    - [📝 Notes](#-notes-1)
    - [❓ Interview Questions](#-interview-questions-1)
  - [Lecture 3: NPM \& Package.json](#lecture-3-npm--packagejson)
    - [📝 Notes](#-notes-2)
    - [❓ Interview Questions](#-interview-questions-2)
  - [Lecture 4: File System Module](#lecture-4-file-system-module)
    - [📝 Notes](#-notes-3)
    - [❓ Interview Questions](#-interview-questions-3)
  - [Lecture 5: HTTP Module \& Creating a Server](#lecture-5-http-module--creating-a-server)
    - [📝 Notes](#-notes-4)
    - [❓ Interview Questions](#-interview-questions-4)
  - [Lecture 6: Introduction to ExpressJS](#lecture-6-introduction-to-expressjs)
    - [📝 Notes](#-notes-5)
    - [❓ Interview Questions](#-interview-questions-5)
  - [Lecture 7: Routing in Express](#lecture-7-routing-in-express)
    - [📝 Notes](#-notes-6)
    - [❓ Interview Questions](#-interview-questions-6)
  - [Lecture 8: Middleware in Express](#lecture-8-middleware-in-express)
    - [📝 Notes](#-notes-7)
    - [❓ Interview Questions](#-interview-questions-7)
  - [Lecture 9: Static Files \& Templating](#lecture-9-static-files--templating)
    - [📝 Notes](#-notes-8)
    - [❓ Interview Questions](#-interview-questions-8)
  - [Lecture 10: Request \& Response Objects](#lecture-10-request--response-objects)
    - [📝 Notes](#-notes-9)
    - [❓ Interview Questions](#-interview-questions-9)
  - [Lecture 11: REST API Basics](#lecture-11-rest-api-basics)
    - [📝 Notes](#-notes-10)
    - [❓ Interview Questions](#-interview-questions-10)
  - [Lecture 12: Dynamic UI using EJS](#lecture-12-dynamic-ui-using-ejs)
    - [📝 Notes](#-notes-11)
    - [❓ Interview Questions](#-interview-questions-11)
  - [Lecture 13: MVC Architecture](#lecture-13-mvc-architecture)
    - [📝 Notes](#-notes-12)
    - [❓ Interview Questions](#-interview-questions-12)
  - [Lecture 14: Dynamic Path (Part 1 \& 2)](#lecture-14-dynamic-path-part-1--2)
    - [📝 Notes](#-notes-13)
    - [❓ Interview Questions](#-interview-questions-13)
  - [Lecture 15: Introduction to SQL](#lecture-15-introduction-to-sql)
    - [📝 Notes](#-notes-14)
    - [❓ Interview Questions](#-interview-questions-14)
  - [Lecture 16: Introduction to MongoDB](#lecture-16-introduction-to-mongodb)
    - [📝 Notes](#-notes-15)
    - [❓ Interview Questions](#-interview-questions-15)
  - [Lecture 17: Introduction to Mongoose](#lecture-17-introduction-to-mongoose)
    - [📝 Notes](#-notes-16)
    - [❓ Interview Questions](#-interview-questions-16)
  - [Lecture 18: Cookies and Sessions](#lecture-18-cookies-and-sessions)
    - [📝 Notes](#-notes-17)
    - [❓ Interview Questions](#-interview-questions-17)
  - [Lecture 19: Authentication \& Authorization](#lecture-19-authentication--authorization)
    - [📝 Notes](#-notes-18)
    - [❓ Interview Questions](#-interview-questions-18)
  - [🎯 Top 20 NodeJS Interview Questions (Quick Reference)](#-top-20-nodejs-interview-questions-quick-reference)
  - [🔗 Resources](#-resources)

---

## Lecture 1: Introduction to NodeJS

### 📝 Notes

**What is NodeJS?**
- Node.js is a **runtime environment** that allows you to run JavaScript **outside the browser**.
- Built on **Google's V8 JavaScript engine** (same engine used in Chrome).
- Node.js is **single-threaded** but uses an **Event Loop** to handle multiple concurrent operations efficiently.
- Created by **Ryan Dahl** in **2009**.

**Why NodeJS?**
- JavaScript everywhere (frontend + backend)
- Non-blocking I/O — perfect for data-intensive real-time applications
- Huge ecosystem via **NPM** (Node Package Manager)
- Used by: Netflix, LinkedIn, Uber, PayPal

**How NodeJS Works:**
```
Client Request
     ↓
Event Loop (Single Thread)
     ↓
Non-blocking I/O Operations
(File, DB, Network — offloaded to thread pool)
     ↓
Callback / Promise → Response to Client
```

**Synchronous vs Asynchronous:**
```js
// Synchronous — blocks execution
const data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);

// Asynchronous — non-blocking
fs.readFile('file.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log("This runs before file is read!");
```

**NodeJS Architecture — LIBUV:**
- Node.js uses `libuv` (C library) to handle async I/O.
- It maintains a **Thread Pool** (default: 4 threads) for heavy tasks.
- The **Event Loop** continuously picks up completed callbacks and executes them.

### ❓ Interview Questions

1. **What is Node.js and how is it different from browser JavaScript?**
   > Node.js is a server-side runtime for JavaScript. It has access to file system, OS, network modules — things the browser restricts for security. No `window` or `document` object.

2. **Is Node.js single-threaded? How does it handle concurrency?**
   > Yes, the main thread is single-threaded. It handles concurrency via the **Event Loop** and **non-blocking I/O** — heavy operations are offloaded to libuv's thread pool.

3. **What is the V8 engine?**
   > V8 is Google's open-source JavaScript engine that compiles JS to native machine code. Node.js uses it to run JS outside the browser.

4. **What is the difference between `readFile` and `readFileSync`?**
   > `readFileSync` is blocking — it halts execution until the file is read. `readFile` is non-blocking — it takes a callback and continues executing other code.

5. **What is LIBUV in Node.js?**
   > LIBUV is a C library that provides Node.js with async I/O, event loop, thread pool, and cross-platform support.

---

## Lecture 2: Modules in NodeJS

### 📝 Notes

**What are Modules?**
- Node.js uses a modular system to organise code into reusable files.
- Each file in Node.js is treated as a **separate module**.

**Types of Modules:**
| Type | Description | Example |
|------|-------------|---------|
| **Built-in** | Pre-installed with Node.js | `fs`, `http`, `path`, `os` |
| **Third-party** | Installed via NPM | `express`, `mongoose` |
| **Custom/Local** | Created by you | `./myModule.js` |

**CommonJS Module System (CJS):**
```js
// Exporting — math.js
function add(a, b) { return a + b; }
module.exports = { add };

// Importing
const { add } = require('./math');
console.log(add(2, 3)); // 5
```

**ES Modules (ESM) — Modern Syntax:**
```js
// math.mjs
export function add(a, b) { return a + b; }

// main.mjs
import { add } from './math.mjs';
```

**Useful Built-in Modules:**
```js
const path = require('path');
path.join(__dirname, 'folder', 'file.txt'); // Safe path joining

const os = require('os');
os.platform();   // 'linux', 'win32', 'darwin'
os.freemem();    // Free memory in bytes

const fs = require('fs');
const http = require('http');
```

**`__dirname` and `__filename`:**
```js
console.log(__dirname);  // Absolute path of current directory
console.log(__filename); // Absolute path of current file
```

### ❓ Interview Questions

1. **What is `module.exports` vs `exports`?**
   > `module.exports` is the actual object returned by `require()`. `exports` is a reference to `module.exports`. If you reassign `exports = ...`, it breaks the reference. Always use `module.exports` for reassignment.

2. **What is the difference between CommonJS and ES Modules?**
   > CJS uses `require/module.exports`, loads synchronously, used by default in Node. ESM uses `import/export`, is asynchronous, and requires `.mjs` extension or `"type": "module"` in `package.json`.

3. **What does `require()` do internally?**
   > It wraps the module in a function `(function(exports, require, module, __filename, __dirname) { ... })`, executes it, and returns `module.exports`.

4. **Is `require()` cached?**
   > Yes. After the first `require()`, the module is cached. Subsequent calls return the cached version.

---

## Lecture 3: NPM & Package.json

### 📝 Notes

**What is NPM?**
- **Node Package Manager** — the default package manager for Node.js.
- Used to install, update, and manage third-party libraries.
- Alternative: `yarn`, `pnpm`

**Key Commands:**
```bash
npm init           # Create package.json interactively
npm init -y        # Create with defaults

npm install express          # Install & add to dependencies
npm install nodemon --save-dev  # Dev dependency only
npm install -g nodemon       # Global install

npm uninstall express        # Remove a package
npm update                   # Update all packages
npm list                     # List installed packages
npx nodemon index.js         # Run without global install
```

**package.json explained:**
```json
{
  "name": "my-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

**package-lock.json:**
- Records the **exact version** of every installed package.
- Ensures consistent installs across machines.
- Should be committed to version control.

**node_modules:**
- Never commit to Git. Add to `.gitignore`.
- Recreate with `npm install`.

**Versioning (Semantic Versioning — SemVer):**
```
^4.18.2  → Compatible with 4.x.x (minor and patch updates)
~4.18.2  → Only patch updates (4.18.x)
4.18.2   → Exact version
```

### ❓ Interview Questions

1. **What is the difference between `dependencies` and `devDependencies`?**
   > `dependencies` are needed in production (like `express`). `devDependencies` are only for development (like `nodemon`, `jest`).

2. **What is `package-lock.json` and why is it important?**
   > It locks exact versions of all dependencies (including nested ones), ensuring reproducible builds across all environments.

3. **What is `npx`?**
   > `npx` runs a package without permanently installing it. e.g., `npx create-react-app` downloads and runs temporarily.

4. **What does `^` vs `~` mean in version numbers?**
   > `^` allows minor and patch updates. `~` allows only patch updates. Neither changes the major version.

---

## Lecture 4: File System Module

### 📝 Notes

**The `fs` Module:**
```js
const fs = require('fs');
```

**Reading Files:**
```js
// Sync
const data = fs.readFileSync('file.txt', 'utf-8');

// Async with callback
fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Promises API
const fs = require('fs/promises');
const data = await fs.readFile('file.txt', 'utf-8');
```

**Writing Files:**
```js
// Overwrites file
fs.writeFile('file.txt', 'Hello World', (err) => { ... });

// Appends to file
fs.appendFile('file.txt', '\nNew Line', (err) => { ... });
```

**Other Operations:**
```js
fs.rename('old.txt', 'new.txt', callback);  // Rename/Move
fs.unlink('file.txt', callback);            // Delete file
fs.mkdir('newFolder', callback);            // Create directory
fs.rmdir('folder', callback);               // Remove directory
fs.readdir('./', (err, files) => { ... });  // List directory
fs.existsSync('file.txt');                  // Check if file exists
```

**Streams (for large files):**
```js
const readStream = fs.createReadStream('bigfile.txt');
const writeStream = fs.createWriteStream('output.txt');
readStream.pipe(writeStream);  // Efficient piping
```

### ❓ Interview Questions

1. **Why use Streams instead of `readFile` for large files?**
   > `readFile` loads the entire file into memory. Streams process data in **chunks**, making them memory-efficient for large files (videos, logs, etc.).

2. **What is the difference between `writeFile` and `appendFile`?**
   > `writeFile` overwrites the entire file. `appendFile` adds content at the end without deleting existing content.

3. **What is `fs/promises`?**
   > A Promise-based API for `fs` operations, allowing `async/await` syntax instead of callbacks.

---

## Lecture 5: HTTP Module & Creating a Server

### 📝 Notes

**Creating a Basic HTTP Server:**
```js
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World!</h1>');
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
```

**`req` (IncomingMessage) Object:**
```js
req.url        // '/about', '/'
req.method     // 'GET', 'POST'
req.headers    // Request headers object
```

**Simple Routing with http module:**
```js
const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.end('Home Page');
    } else if (req.url === '/about') {
        res.end('About Page');
    } else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
});
```

**HTTP Status Codes:**
| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 301 | Moved Permanently |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

### ❓ Interview Questions

1. **How does Node.js create an HTTP server without any framework?**
   > Using the built-in `http` module's `createServer()` method, which takes a callback `(req, res)` invoked on every request.

2. **What is the difference between `res.write()` and `res.end()`?**
   > `res.write()` sends a chunk of data but keeps the connection open. `res.end()` sends final data and closes the connection. You must always call `res.end()`.

3. **What port does HTTP use by default?**
   > Port 80 for HTTP, 443 for HTTPS.

---

## Lecture 6: Introduction to ExpressJS

### 📝 Notes

**What is Express?**
- A **fast, minimal, and flexible** Node.js web framework.
- Simplifies routing, middleware, and request/response handling.
- The most popular Node.js framework.

**Hello World in Express:**
```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => console.log('Server started'));
```

**`app.send()` vs `http module`:**
- `res.send()` — automatically sets Content-Type and Content-Length
- `res.json()` — sends JSON with correct headers
- `res.sendFile()` — sends a file
- `res.redirect()` — redirects to a URL
- `res.render()` — renders a template view

**Express vs raw http module:**
| Feature | http | Express |
|---------|------|---------|
| Routing | Manual `if/else` | `app.get()`, `app.post()` |
| Middleware | Manual | `app.use()` |
| JSON parsing | Manual | `express.json()` |
| Static files | Manual | `express.static()` |

### ❓ Interview Questions

1. **What is Express.js and why use it over the native `http` module?**
   > Express is a framework built on top of `http` that adds routing, middleware, templating, and other utilities, making development much faster and cleaner.

2. **What does `app.listen()` return?**
   > It returns an `http.Server` instance, which can be used for WebSocket upgrades or graceful shutdowns.

---

## Lecture 7: Routing in Express

### 📝 Notes

**HTTP Methods:**
```js
app.get('/users', handler);
app.post('/users', handler);
app.put('/users/:id', handler);
app.delete('/users/:id', handler);
app.patch('/users/:id', handler);
app.all('/users', handler);  // All methods
```

**Route Parameters:**
```js
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.send(`User ID: ${id}`);
});
```

**Query Strings:**
```js
// GET /search?name=John&age=25
app.get('/search', (req, res) => {
    const { name, age } = req.query;
    res.send(`Name: ${name}, Age: ${age}`);
});
```

**Express Router (for modular routing):**
```js
// routes/users.js
const router = require('express').Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getUserById);

module.exports = router;

// app.js
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);
```

### ❓ Interview Questions

1. **What is the difference between `req.params`, `req.query`, and `req.body`?**
   > `req.params` — URL route parameters (`:id`). `req.query` — query string parameters (`?key=value`). `req.body` — data sent in request body (POST/PUT).

2. **What is Express Router and why use it?**
   > `express.Router()` creates a mini-application with its own routes and middleware. It helps split large route files into smaller, modular, reusable pieces.

3. **What is `app.all()`?**
   > It matches all HTTP methods for a given path, useful for applying middleware to all request types.

---

## Lecture 8: Middleware in Express

### 📝 Notes

**What is Middleware?**
- Functions that have access to `req`, `res`, and `next`.
- Execute in order — form a **pipeline**.
- Used for: logging, authentication, parsing, error handling.

```
Request → Middleware1 → Middleware2 → Route Handler → Response
```

**Types of Middleware:**
```js
// 1. Application-level
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // MUST call next() or request hangs!
});

// 2. Router-level
router.use(authMiddleware);

// 3. Built-in
app.use(express.json());           // Parse JSON body
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.static('public')); // Serve static files

// 4. Third-party
const morgan = require('morgan');
app.use(morgan('dev'));  // HTTP request logger

// 5. Error-handling (4 params — special)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
```

**Middleware Order Matters:**
```js
app.use(express.json()); // Must be before routes that use req.body
app.post('/data', (req, res) => {
    console.log(req.body); // undefined if express.json() not used
});
```

### ❓ Interview Questions

1. **What is middleware in Express? What are the parameters it receives?**
   > Middleware is a function with `(req, res, next)`. It processes the request and either sends a response or calls `next()` to pass to the next middleware.

2. **What happens if you don't call `next()` in middleware?**
   > The request hangs forever — no response is sent. Always call `next()` unless you're intentionally ending the response.

3. **What is error-handling middleware? How does Express recognise it?**
   > A middleware with **4 parameters** `(err, req, res, next)`. Express identifies it as an error handler because of the 4-parameter signature.

4. **What does `express.json()` do?**
   > It parses incoming requests with JSON payloads and populates `req.body` with the parsed object.

---

## Lecture 9: Static Files & Templating

### 📝 Notes

**Serving Static Files:**
```js
app.use(express.static('public'));
// Files in /public accessible at http://localhost:3000/filename
```

**What counts as static?**
- HTML, CSS, JS files
- Images, fonts
- PDFs, videos

**Templating Engines:**
- Allow generating dynamic HTML on the server.
- Popular options: **EJS**, Pug, Handlebars

**Setting up EJS:**
```bash
npm install ejs
```
```js
app.set('view engine', 'ejs');
app.set('views', './views');  // Default is ./views

app.get('/', (req, res) => {
    res.render('index', { title: 'Home', user: 'Lavish' });
});
```

**EJS Syntax:**
```html
<!-- views/index.ejs -->
<h1><%= title %></h1>        <!-- Output escaped value -->
<p><%- rawHTML %></p>        <!-- Output unescaped HTML -->
<% if (user) { %>            <!-- JavaScript logic -->
  <p>Hello, <%= user %>!</p>
<% } %>

<% users.forEach(u => { %>   <!-- Loops -->
  <li><%= u.name %></li>
<% }); %>
```

### ❓ Interview Questions

1. **What is a templating engine?**
   > It lets you generate HTML dynamically by embedding JavaScript logic inside HTML templates. The server renders the final HTML before sending to client.

2. **What is the difference between `<%=` and `<%-` in EJS?**
   > `<%= %>` escapes HTML (safe, prevents XSS). `<%- %>` outputs raw unescaped HTML (use carefully).

3. **What is SSR (Server-Side Rendering)?**
   > The HTML is generated on the server and sent fully rendered to the browser. Opposite of CSR (Client-Side Rendering) where JavaScript builds the UI in browser.

---

## Lecture 10: Request & Response Objects

### 📝 Notes

**Request Object (`req`):**
```js
req.params      // Route parameters: { id: '123' }
req.query       // Query string: { search: 'node' }
req.body        // Request body (needs parser middleware)
req.headers     // Request headers
req.method      // HTTP method: 'GET', 'POST'
req.url         // Full URL path
req.path        // Path without query string
req.ip          // Client IP address
req.cookies     // Cookies (needs cookie-parser)
req.get('Authorization') // Get specific header
```

**Response Object (`res`):**
```js
res.status(200)          // Set status code
res.send('text')         // Send text/html
res.json({ key: 'val' }) // Send JSON
res.render('view', data) // Render template
res.redirect('/login')   // Redirect
res.sendFile(path)        // Send file
res.download(path)        // Force download
res.set('Content-Type', 'text/plain') // Set header
res.cookie('name', 'val')  // Set cookie
res.clearCookie('name')    // Clear cookie
```

**Method Chaining:**
```js
res.status(201).json({ message: 'Created', id: 1 });
```

### ❓ Interview Questions

1. **What is the difference between `req.url` and `req.path`?**
   > `req.url` includes the full path with query string (`/search?q=node`). `req.path` is just the path (`/search`).

2. **How do you send a 404 response in Express?**
   > `res.status(404).send('Not Found')` or `res.status(404).json({ error: 'Not Found' })`.

---

## Lecture 11: REST API Basics

### 📝 Notes

**What is REST?**
- **RE**presentational **S**tate **T**ransfer.
- An architectural style for designing networked applications.
- Uses HTTP methods to perform CRUD operations.

**REST Principles:**
1. **Stateless** — server stores no client session info
2. **Client-Server** — separate concerns
3. **Uniform Interface** — consistent URL structure
4. **Cacheable** — responses can be cached

**REST + CRUD Mapping:**
| HTTP Method | CRUD Operation | Example |
|-------------|----------------|---------|
| GET | Read | `GET /users` — get all users |
| POST | Create | `POST /users` — create user |
| PUT | Update (full) | `PUT /users/1` — replace user |
| PATCH | Update (partial) | `PATCH /users/1` — update field |
| DELETE | Delete | `DELETE /users/1` — delete user |

**Building a REST API:**
```js
const users = [];
let idCounter = 1;

app.get('/users', (req, res) => res.json(users));

app.post('/users', (req, res) => {
    const user = { id: idCounter++, ...req.body };
    users.push(user);
    res.status(201).json(user);
});

app.put('/users/:id', (req, res) => {
    const idx = users.findIndex(u => u.id == req.params.id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });
    users[idx] = { id: Number(req.params.id), ...req.body };
    res.json(users[idx]);
});

app.delete('/users/:id', (req, res) => {
    const idx = users.findIndex(u => u.id == req.params.id);
    users.splice(idx, 1);
    res.status(204).send();
});
```

### ❓ Interview Questions

1. **What is REST? What are its constraints?**
   > REST is a stateless, client-server architecture using standard HTTP methods. Key constraints: stateless, uniform interface, cacheable, layered system.

2. **What is the difference between PUT and PATCH?**
   > PUT replaces the entire resource. PATCH updates only the specified fields.

3. **What status code should a POST return on success?**
   > `201 Created`, typically with the created resource in the response body.

4. **What is the difference between REST and GraphQL?**
   > REST uses multiple endpoints, each returning fixed data. GraphQL uses a single endpoint where clients query exactly the data they need.

---

## Lecture 12: Dynamic UI using EJS

### 📝 Notes

**Partials (Reusable Components):**
```js
// views/partials/header.ejs
<nav>...</nav>

// views/index.ejs
<%- include('./partials/header') %>
<main>Content here</main>
<%- include('./partials/footer') %>
```

**Passing Data to Views:**
```js
app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.render('products', { products, title: 'All Products' });
});
```

**EJS Loops & Conditionals:**
```html
<% if (products.length === 0) { %>
  <p>No products found.</p>
<% } else { %>
  <ul>
    <% products.forEach(p => { %>
      <li><%= p.name %> — ₹<%= p.price %></li>
    <% }) %>
  </ul>
<% } %>
```

**`locals` in EJS:**
```js
// All views have access to res.locals variables
app.use((req, res, next) => {
    res.locals.currentUser = req.session?.user || null;
    next();
});
```

### ❓ Interview Questions

1. **What is `<%- include() %>` in EJS?**
   > It includes another EJS partial file. Use `<%-` (not `<%=`) to avoid escaping the HTML.

2. **What is `res.locals` in Express?**
   > An object scoped to a single request-response cycle, accessible in views automatically. Useful for passing data like current user to all templates.

---

## Lecture 13: MVC Architecture

### 📝 Notes

**What is MVC?**
- **Model** — Data logic (database schemas, queries)
- **View** — Presentation layer (EJS templates, HTML)
- **Controller** — Business logic (handles req, calls model, sends to view)

**MVC Folder Structure:**
```
project/
├── controllers/
│   ├── userController.js
│   └── productController.js
├── models/
│   ├── User.js
│   └── Product.js
├── routes/
│   ├── userRoutes.js
│   └── productRoutes.js
├── views/
│   ├── users/
│   └── products/
├── public/
│   ├── css/
│   └── js/
├── middleware/
│   └── auth.js
└── app.js
```

**Example Flow:**
```
HTTP Request
    ↓
Router (routes/userRoutes.js) → maps URL to controller
    ↓
Controller (controllers/userController.js) → business logic
    ↓
Model (models/User.js) → database operations
    ↓
Controller → res.render() or res.json()
    ↓
View (views/users/index.ejs) → HTML response
```

```js
// controllers/userController.js
const User = require('../models/User');

exports.getAll = async (req, res) => {
    const users = await User.find();
    res.render('users/index', { users });
};

exports.create = async (req, res) => {
    await User.create(req.body);
    res.redirect('/users');
};
```

### ❓ Interview Questions

1. **What is MVC and why is it used?**
   > MVC separates the application into three layers — Model (data), View (UI), Controller (logic). It improves code organisation, reusability, and testability.

2. **What is the role of a Controller?**
   > It acts as the bridge between Model and View — it receives the request, calls the model for data, and passes it to the view.

3. **Can you have fat controllers and thin models or vice versa?**
   > Best practice is **fat models, thin controllers** — put business logic in models/services, keep controllers focused on routing and response.

---

## Lecture 14: Dynamic Path (Part 1 & 2)

### 📝 Notes

**Dynamic Routes:**
```js
// Single param
app.get('/users/:id', (req, res) => {
    res.send(req.params.id);
});

// Multiple params
app.get('/users/:userId/posts/:postId', (req, res) => {
    const { userId, postId } = req.params;
});
```

**Optional Parameters:**
```js
app.get('/posts/:year/:month?', (req, res) => {
    // :month is optional
});
```

**Wildcard Routes:**
```js
app.get('/files/*', (req, res) => {
    const filePath = req.params[0]; // Everything after /files/
});
```

**Route Order Matters:**
```js
app.get('/users/me', handler1);   // Specific first!
app.get('/users/:id', handler2);  // Generic after
// If reversed, '/me' would be treated as an :id param
```

**Building Dynamic Pages:**
```js
app.get('/products/:slug', async (req, res) => {
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) return res.status(404).render('404');
    res.render('product-detail', { product });
});
```

### ❓ Interview Questions

1. **How do you handle 404 for dynamic routes?**
   > Check if the resource exists (from DB), if not, return `res.status(404).render('404')` or `res.status(404).json({ error: 'Not found' })`.

2. **What is the difference between URL params and query params?**
   > URL params (`:id`) are part of the path and required. Query params (`?key=val`) are optional and appended after `?`.

---

## Lecture 15: Introduction to SQL

### 📝 Notes

**SQL Basics:**
- **Structured Query Language** for relational databases (MySQL, PostgreSQL, SQLite).
- Data stored in **tables** with rows and columns.
- Tables have **relationships** (1:1, 1:Many, Many:Many).

**Core SQL Commands:**
```sql
-- Create table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert
INSERT INTO users (name, email) VALUES ('John', 'john@example.com');

-- Read
SELECT * FROM users;
SELECT name, email FROM users WHERE id = 1;
SELECT * FROM users ORDER BY name LIMIT 10;

-- Update
UPDATE users SET name = 'Jane' WHERE id = 1;

-- Delete
DELETE FROM users WHERE id = 1;
```

**Joins:**
```sql
-- INNER JOIN (only matching rows)
SELECT u.name, p.title
FROM users u
INNER JOIN posts p ON u.id = p.user_id;

-- LEFT JOIN (all users, even with no posts)
SELECT u.name, p.title
FROM users u
LEFT JOIN posts p ON u.id = p.user_id;
```

**Using MySQL with Node.js:**
```js
const mysql = require('mysql2/promise');

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
});

const [rows] = await connection.execute('SELECT * FROM users WHERE id = ?', [1]);
```

### ❓ Interview Questions

1. **What is the difference between SQL and NoSQL databases?**
   > SQL uses structured tables with fixed schema and supports ACID transactions. NoSQL uses flexible documents/key-value/graphs and scales horizontally. Choose SQL for complex relationships, NoSQL for flexibility and scale.

2. **What is an index in SQL?**
   > An index speeds up read queries by creating a data structure that allows faster lookup. It slows down writes. Use on columns frequently searched/sorted.

3. **What is `?` in MySQL queries?**
   > Prepared statement placeholder — prevents SQL injection by separating query structure from data.

---

## Lecture 16: Introduction to MongoDB

### 📝 Notes

**What is MongoDB?**
- A **NoSQL document database** that stores data in **BSON** (Binary JSON) format.
- Data is organised into **Collections** (like tables) of **Documents** (like rows).
- Schema-less — each document can have different fields.

**MongoDB vs SQL:**
| SQL | MongoDB |
|-----|---------|
| Database | Database |
| Table | Collection |
| Row | Document |
| Column | Field |
| JOIN | $lookup / embed |

**Basic MongoDB Operations (Shell):**
```js
// Insert
db.users.insertOne({ name: "John", age: 25 });
db.users.insertMany([{ name: "Jane" }, { name: "Bob" }]);

// Read
db.users.find();
db.users.find({ age: { $gt: 20 } });
db.users.findOne({ name: "John" });

// Update
db.users.updateOne({ name: "John" }, { $set: { age: 26 } });
db.users.updateMany({ age: { $lt: 18 } }, { $set: { minor: true } });

// Delete
db.users.deleteOne({ name: "John" });
db.users.deleteMany({ age: { $lt: 18 } });
```

**Query Operators:**
```js
$gt, $gte  // Greater than, greater than or equal
$lt, $lte  // Less than, less than or equal
$eq, $ne   // Equal, not equal
$in        // Value in array: { age: { $in: [20, 25, 30] } }
$and, $or  // Logical operators
```

### ❓ Interview Questions

1. **What is MongoDB and how does it differ from relational databases?**
   > MongoDB is a document-oriented NoSQL database. Unlike SQL, it has no fixed schema, stores JSON-like documents, and scales horizontally.

2. **When would you choose MongoDB over SQL?**
   > When data is unstructured or schema varies, when you need horizontal scaling, or when your data is document-like (e.g., products with varying attributes).

3. **What is BSON?**
   > Binary JSON — MongoDB's internal format. It supports additional types not in JSON like `Date`, `ObjectId`, `Binary`.

---

## Lecture 17: Introduction to Mongoose

### 📝 Notes

**What is Mongoose?**
- An **ODM (Object Data Modeling)** library for MongoDB and Node.js.
- Provides schema validation, middleware, and query helpers.

**Setup:**
```bash
npm install mongoose
```
```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));
```

**Defining a Schema & Model:**
```js
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    age: { type: Number, min: 0, max: 120 },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
```

**CRUD with Mongoose:**
```js
// Create
const user = await User.create({ name: 'John', email: 'j@example.com' });

// Read
const users = await User.find();
const user = await User.findById(id);
const user = await User.findOne({ email: 'j@example.com' });

// Update
await User.findByIdAndUpdate(id, { name: 'Jane' }, { new: true });

// Delete
await User.findByIdAndDelete(id);
```

**Mongoose Middleware (Hooks):**
```js
userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
});
```

**Population (Referencing Documents):**
```js
const postSchema = new mongoose.Schema({
    title: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

// Query with population
const post = await Post.findById(id).populate('author');
```

### ❓ Interview Questions

1. **What is Mongoose and why use it over the native MongoDB driver?**
   > Mongoose adds schema validation, middleware hooks, type casting, and a clean API on top of the MongoDB driver.

2. **What is the difference between a Schema and a Model in Mongoose?**
   > Schema defines the structure/rules. Model is a constructor compiled from the Schema used to create/query documents.

3. **What does `{ new: true }` do in `findByIdAndUpdate`?**
   > By default, it returns the old document. `{ new: true }` returns the updated document.

4. **What is `populate()` in Mongoose?**
   > It replaces a stored ObjectId reference with the full document from the referenced collection (like a JOIN).

---

## Lecture 18: Cookies and Sessions

### 📝 Notes

**What are Cookies?**
- Small pieces of data stored in the **browser**.
- Sent with every HTTP request to the same domain.
- Used for: authentication tokens, user preferences, tracking.

**Setting Cookies in Express:**
```bash
npm install cookie-parser
```
```js
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Set cookie
res.cookie('username', 'Lavish', {
    maxAge: 24 * 60 * 60 * 1000,  // 1 day in ms
    httpOnly: true,   // Not accessible via JS — prevents XSS
    secure: true,     // Only over HTTPS
    sameSite: 'strict'
});

// Read cookie
const username = req.cookies.username;

// Delete cookie
res.clearCookie('username');
```

**What are Sessions?**
- Server-side storage of user data.
- Server stores session data, client stores only a **session ID** (in a cookie).
- More secure than storing data directly in cookies.

```bash
npm install express-session
```
```js
const session = require('express-session');

app.use(session({
    secret: 'mySecretKey',  // Used to sign session ID cookie
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 } // 1 hour
}));

// Set session
req.session.userId = user._id;

// Read session
const userId = req.session.userId;

// Destroy session (logout)
req.session.destroy((err) => {
    res.redirect('/login');
});
```

**Cookies vs Sessions:**
| | Cookies | Sessions |
|--|---------|---------|
| Storage | Browser | Server |
| Security | Less secure | More secure |
| Capacity | ~4KB | Unlimited (server-side) |
| Expiry | Set by server | Configurable |

### ❓ Interview Questions

1. **What is the difference between cookies and sessions?**
   > Cookies store data on the client browser. Sessions store data on the server, with only a session ID stored in a cookie.

2. **What does `httpOnly: true` do for cookies?**
   > Prevents JavaScript (`document.cookie`) from accessing the cookie, protecting against XSS attacks.

3. **What is a session secret?**
   > A string used to sign/encrypt the session ID cookie, preventing tampering.

4. **What is `saveUninitialized: false` in express-session?**
   > It prevents saving a new (unmodified) session to the store. Saves storage and avoids unnecessary cookies for unauthenticated users.

---

## Lecture 19: Authentication & Authorization

### 📝 Notes

**Authentication vs Authorization:**
- **Authentication** — "Who are you?" (Login, Identity)
- **Authorization** — "What can you do?" (Permissions, Roles)

**Password Hashing with bcrypt:**
```bash
npm install bcryptjs
```
```js
const bcrypt = require('bcryptjs');

// Hash password before saving
const hashedPassword = await bcrypt.hash(plainPassword, 12);

// Compare on login
const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
```

**JWT (JSON Web Tokens):**
```bash
npm install jsonwebtoken
```
```js
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

// Generate token (on login)
const token = jwt.sign(
    { userId: user._id, role: user.role },
    SECRET,
    { expiresIn: '7d' }
);

// Verify token (middleware)
const decoded = jwt.verify(token, SECRET);
// decoded = { userId: '...', role: 'user', iat: ..., exp: ... }
```

**Auth Middleware:**
```js
const protect = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>
    if (!token) return res.status(401).json({ error: 'Not authenticated' });
    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = await User.findById(decoded.userId);
        next();
    } catch {
        res.status(401).json({ error: 'Invalid token' });
    }
};

// Role-based auth
const restrictTo = (...roles) => (req, res, next) => {
    if (!roles.includes(req.user.role))
        return res.status(403).json({ error: 'Forbidden' });
    next();
};

// Usage
app.delete('/users/:id', protect, restrictTo('admin'), deleteUser);
```

**Full Auth Flow:**
```
Register: hash password → save user → send JWT
Login: find user → compare password → send JWT
Protected Route: verify JWT → attach user to req → proceed
```

**Storing JWT — Options:**
| Method | Pros | Cons |
|--------|------|------|
| localStorage | Easy | Vulnerable to XSS |
| Cookie (httpOnly) | XSS-safe | Needs CSRF protection |
| Memory | Most secure | Lost on refresh |

### ❓ Interview Questions

1. **What is the difference between authentication and authorization?**
   > Authentication verifies identity (login). Authorization determines what an authenticated user can do (permissions).

2. **Why should passwords never be stored in plain text?**
   > If the database is breached, all passwords are exposed. Hashing (with bcrypt) makes them computationally infeasible to reverse.

3. **What is JWT and how does it work?**
   > JWT is a self-contained token with `header.payload.signature`. The server signs it with a secret; the client sends it on each request; the server verifies the signature without needing a database lookup.

4. **What is the difference between JWT and sessions?**
   > Sessions store state on the server (stateful). JWTs are stateless — all info is in the token. JWTs scale better (no shared session store needed across servers).

5. **What is bcrypt's salt factor?**
   > Salt rounds (e.g., 12) determine how many times the hashing algorithm iterates. Higher = slower & more secure. 10–12 is standard.

6. **How do you invalidate a JWT?**
   > JWTs can't be invalidated directly (no server state). Solutions: short expiry, maintain a blacklist/revocation list in DB/Redis, or use refresh tokens.

---

## 🎯 Top 20 NodeJS Interview Questions (Quick Reference)

| # | Question | Key Answer |
|---|----------|-----------|
| 1 | What is Node.js? | JS runtime on V8 engine, runs outside browser |
| 2 | Is Node.js single-threaded? | Main thread yes, uses event loop + libuv thread pool for I/O |
| 3 | What is the event loop? | Mechanism to handle async callbacks in Node.js |
| 4 | What is a callback? | Function passed as argument, called after async operation |
| 5 | What are Promises? | Object representing future async result |
| 6 | What is async/await? | Syntactic sugar over Promises for cleaner async code |
| 7 | What is Express.js? | Minimal web framework built on Node.js http module |
| 8 | What is middleware? | Function with (req, res, next) in request pipeline |
| 9 | What is REST? | Stateless HTTP-based architecture for APIs |
| 10 | What is JWT? | Stateless token for authentication |
| 11 | Cookies vs Sessions? | Client storage vs server storage with ID in cookie |
| 12 | MongoDB vs SQL? | Document NoSQL vs tabular relational DB |
| 13 | What is Mongoose? | ODM for MongoDB adding schemas and validation |
| 14 | What is MVC? | Model-View-Controller separation of concerns |
| 15 | What is NPM? | Node Package Manager for third-party modules |
| 16 | package.json vs package-lock.json? | Config vs exact version lockfile |
| 17 | What is `req.body`? | Parsed request body, needs `express.json()` middleware |
| 18 | PUT vs PATCH? | Full replace vs partial update |
| 19 | What is bcrypt? | Password hashing library with salt rounds |
| 20 | `populate()` in Mongoose? | Replaces ObjectId reference with full document |

---

## 🔗 Resources

- 📺 [Playlist Link](https://www.youtube.com/watch?v=AZzV3wZCvI4&list=PL78RhpUUKSwfeSOOwfE9x6l5jTjn5LbY3)
- 💻 [GitHub Code](https://github.com/Complete-Coding/NodeJS_Complete_YouTube)
- 📚 [Official Node.js Docs](https://nodejs.org/en/docs)
- 📚 [Express.js Docs](https://expressjs.com/)
- 📚 [Mongoose Docs](https://mongoosejs.com/docs/)
- 📚 [MongoDB Docs](https://www.mongodb.com/docs/)

---

*Made with ❤️ from Complete Coding by Prashant Sir's NodeJS Course*
