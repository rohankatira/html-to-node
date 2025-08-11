const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: [true, 'Book name is required'],
      trim: true,
      minlength: [2, 'Book name must be at least 2 characters long']
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative']
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      minlength: [10, 'Description must be at least 10 characters long']
    },
    category: {
      type: String,
      enum: [
        'Fantasy',
        'Science Fiction',
        'Historical',
        'Realistic',
        'Crime',
        'Horror',
        'Romance',
        'Biography',
        'Reference Book',
        'Essay'
      ],
      required: [true, 'Category is required']
    }
  },
  {
    timestamps: true 
  }
);

module.exports = mongoose.model('Book', bookSchema);
