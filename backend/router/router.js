const express = require('express');
const { createNewBook, getAllBooks, getBookById, updateBookDetails, deleteBookById } = require('../controllers/controllers');

const router = express.Router()

// Create a new book
router.post('/', createNewBook)

// Get all books
router.get('/', getAllBooks)

// Get book by id
router.get('/:id', getBookById)

// Get book by id
router.put('/:id', updateBookDetails)

// Delete book by id
router.delete('/:id', deleteBookById)

module.exports = router;