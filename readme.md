

# 📄 Node.js Express EJS Web App

## 📝 Overview  
A robust Node.js web application built with **Express.js** and **EJS** templating for dynamic server-side rendering.  
Includes a **Book Management Module** with full CRUD functionality, and templated pages ideal for dashboards or admin panels.

***

## 🚀 Features  
- ⚡ **Express.js**: Structured routing and middleware.  
- 🖼️ **EJS Templates**: Dynamic HTML rendering on the server.  
- 📚 **Book Management**: Add, edit, delete, and view books easily.  
- 🌐 **Static Assets**: CSS, JS, images served from `/public`.  
- 📊 **UI Enhancements**: Includes scripts for ripple effects, sidebar navigation, and sparkline charts.

***

## 📁 Folder Structure  
```
project-root/
├── index.js                # Main server file
├── package.json
├── package-lock.json
├── /routes
│   └── booksRouter.js      # Book CRUD routes
├── /controller
│   └── books.controller.js # Books controller handling logic
├── /views
│   ├── index.ejs           # Home page
│   └── /pages
│       ├── tables.ejs
│       ├── form-basic.ejs
│       └── form-wizard.ejs
├── /public
│   ├── js/                 # JavaScript assets (waves.js, sidebar, charts)
│   ├── css/                # Stylesheets
│   └── images/             # Images
└── README.md
```

***

## 🛠️ Installation & Setup  
```bash
# 1. Clone the repository
git clone 
cd 

# 2. Install dependencies
npm install

# 3. Run the server
# Development mode (auto-reload)
npx nodemon index.js
# Production mode
node index.js
```

**Access the app:**  
- Locally: http://localhost:8081  
- Deployed Live Demo: [https://html-to-node-2.onrender.com/](https://html-to-node-2.onrender.com/)

***

## 📜 Main Server (`index.js`)  
```js
const express = require("express");
const app = express();
const port = 8081;

app.set("view engine", "ejs");
app.use(express.static("public"));

// Books module routes
app.use('/books', require('./routes/booksRouter'));

// Static page routes
app.get("/", (req, res) => res.render("index"));
app.get("/tables", (req, res) => res.render("pages/tables"));
app.get("/form-basic", (req, res) => res.render("pages/form-basic"));
app.get("/form-wizard", (req, res) => res.render("pages/form-wizard"));

app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
```

***

## 🔗 Books Router (`routes/booksRouter.js`)  
Handles all book CRUD routes:

```js
const express = require('express');
const router = express.Router();
const bookController = require('../controller/books.controller');

// Show Add Book form
router.get('/addBook', bookController.getCreateForm);

// Handle new book creation
router.post('/create', bookController.createBook);

// Show Edit Book form
router.get('/edit/:id', bookController.getEditForm);

// Handle book update
router.post('/update/:id', bookController.updateBook);

// Delete a book
router.get('/delete/:id', bookController.deleteBook);

// Books list table
router.get('/booksList', bookController.getAllBooks);

// Home / index page route (optional)
router.get('/', bookController.homePage);

module.exports = router;
```

> ⚠️ Implement the controller logic inside `books.controller.js` for handling database actions, validation, and form response rendering.

***

## 🎨 Static Assets  
All files placed in the `/public` directory are accessible in your EJS templates using relative paths from root, for example:

```html





```

Key included scripts:  
- ⚡ `waves.js` — Material ripple effects on buttons  
- 📋 `sidebarmenu.js` — Sidebar navigation and menu handling  
- 📈 `jquery.charts-sparkline.js` — Sparkline and chart demos for UI visualization

***

## ➕ Adding New Pages  
To add new pages:

1. Create an `.ejs` file inside `/views` or `/views/pages`.  
2. Add a new route in `index.js`, for example:

```js
app.get('/new-page', (req, res) => {
  res.render('pages/new-page');
});
```

***

## 📦 Dependencies  
| 📦 Package | Purpose                         |
| :--------- | :------------------------------|
| express   | Web server and routing          |
| ejs       | Server-side HTML templating     |
| nodemon   | Development server auto-reload  |

***

## ⚠️ Troubleshooting  
- **EJS rendering errors:** Confirm view file names and render paths match exactly.  
- **404 errors:** Check route declarations and folder structure.  
- **Port conflicts:** Change the port value in `index.js` (default 8081).  

***

## ⚖ License  
ISC License (see `package.json`)

***

## 👤 Author  
**rohankatitra**

For detailed usage, refer to official Express.js and EJS documentation.

***