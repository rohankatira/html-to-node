# 📄 Project Documentation: Node.js Express EJS Web App

## 📝 Overview

A robust, extensible Node.js web application leveraging **Express.js** and **EJS** for rapid development and server-side rendering. This template is ideal for scalable sites, dashboards, and admin panels.

## 🚀 Features

- ⚡ **Express.js**: High-performance routing \& middleware.
- 🖼️ **EJS**: Templating for dynamic HTML.
- 📂 **Static File Serving**: `/public` directory for assets.
- 🗂️ **Views \& Routing:**
    - 🏠 `/` — Home page
    - 📋 `/tables` — Tables view
    - 📝 `/form-basic` — Basic form view
    - 🔗 `/form-wizard` — Form wizard view


## 📁 Directory Structure

```text
project-root/
├── index.js               # Main server file
├── package.json
├── package-lock.json
├── /views
│   ├── index.ejs
│   └── /pages
│       ├── tables.ejs
│       ├── form-basic.ejs
│       └── form-wizard.ejs
└── /public                # CSS/JS/images
```


## 🛠️ Installation \& Setup

1. 📦 **Clone this repository**
2. 💻 **Install Node.js (v18+)**: [Get Node.js](https://nodejs.org/)
3. 🔧 **Install dependencies**:

```bash
npm install
```

4. ▶️ **Run the server**:
    - For development (auto-reload):
`npx nodemon index.js`
    - For production:
`node index.js`
5. 🌐 **Visit locally**: `http://localhost:8081`
6. 🚀 **Deployed Live Demo**: [https://html-to-node.onrender.com/](https://html-to-node.onrender.com/)

## 📚 Code Overview

**index.js**

```js
const express = require("express");
const app = express();
const port = 8081;

app.set("view engine", "ejs");
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/tables", (req, res) => {
  res.render("pages/tables")
})

app.get("/form-basic", (req, res) => {
  res.render("pages/form-basic")
})

app.get("/form-wizard", (req, res) => {
  res.render("pages/form-wizard")
})

app.listen(port, (err) => {
  if(err){
    console.log(err);
  } else {
    console.log("server is started", port);
  }
})
```


## ➕ Adding New Routes \& Views

1. 📝 **Create a new EJS view** in `/views` or `/views/pages/`
2. 🛤️ **Add a route** in `index.js`:

```js
app.get('/your-route', (req, res) => res.render('pages/your-view'));
```


## 🎨 Static Assets

- All `/public` files are web-accessible and usable in EJS.
- Example:

```html
<link rel="stylesheet" href="/style.css">
```


## 📦 Dependencies

| 📦 Package | 📃 Purpose |
| :-- | :-- |
| express | Web routing/middleware |
| ejs | Dynamic HTML templating |
| nodemon | Dev server auto-restart |

## 🖥️ Example EJS Usage

```ejs
<!-- views/index.ejs -->
<!DOCTYPE html>
<html>
<head>
  <title>Home</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <h1>🏠 Welcome to Home Page!</h1>
  <a href="/tables">📋 Tables</a>
  <a href="/form-basic">📝 Basic Form</a>
  <a href="/form-wizard">🔗 Form Wizard</a>
</body>
</html>
```


## 🧩 Notes

- **Node Version:** Express 5.x (Node.js ≥18 required).
- **Template Directory:** `views/` and subfolders.
- **Deployment:** Use `node index.js` and process managers (e.g., PM2) in production.


## 🛑 Troubleshooting

- ❗ *EJS errors*: File names/paths must match routes.
- ❓ *404*: Check route and view map.
- 🔁 *Port in use*: Change `const port = 8081` in `index.js`.


## ⚖ License

ISC (see `package.json` for details).

## 👤 Author

rohankatitra

_See also: official Express.js guide and EJS documentation._


