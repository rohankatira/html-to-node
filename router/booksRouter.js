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
