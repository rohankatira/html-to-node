const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const connectDB = require("./config/db"); // Our MongoDB connection
const bookRoutes = require("./router/booksRouter"); // CRUD routes

const app = express();
const PORT = 8081; // Hardcoded without env

// ======================
// Connect to MongoDB Atlas
// ======================
connectDB();

// ======================
// Middleware
// ======================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, "public")));

// View Engine (EJS)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ======================
// Routes
// ======================
app.use("/", bookRoutes);

// ======================
// Start Server
// ======================
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
