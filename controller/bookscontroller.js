const Book = require('../model/booksModel');
const mongoose = require('mongoose');

// Home page
exports.homePage = (req, res) => {
  res.render('index', { title: 'Home Page' });
};

// List all books
exports.getAllBooks = async (req, res) => {
  try {
    const bookData = await Book.find().sort({ createdAt: -1 });
    res.render('pages/books-list', { title: 'Books List', bookData });
  } catch (error) {
    res.status(500).send('Error fetching books: ' + error.message);
  }
};

// Show Add Book form
exports.getCreateForm = (req, res) => {
  res.render('pages/form-basic', { title: 'Add Book' });
};

// Create a new book
exports.createBook = async (req, res) => {
  try {
    await Book.create(req.body);
    res.redirect('/booksList');
  } catch (error) {
    res.status(400).send('Error creating book: ' + error.message);
  }
};

// Show Edit Book form
exports.getEditForm = async (req, res) => {
  try {
    // Validate the ID
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send('Invalid book ID');
    }

    const books = await Book.findById(req.params.id)
      .select('bookName price description category');

    if (!books) {
      return res.status(404).send('Book not found');
    }

    res.render('pages/edit-book', { title: 'Edit Book', books });
  } catch (error) {
    res.status(500).send('Error loading book: ' + error.message);
  }
};

// Update a book
exports.updateBook = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send('Invalid book ID');
    }

    await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { runValidators: true }
    );

    res.redirect('/booksList');
  } catch (error) {
    res.status(400).send('Error updating book: ' + error.message);
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send('Invalid book ID');
    }

    await Book.findByIdAndDelete(req.params.id);
    res.redirect('/booksList');
  } catch (error) {
    res.status(500).send('Error deleting book: ' + error.message);
  }
};
