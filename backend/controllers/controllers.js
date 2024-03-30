const express = require('express');
const books = require('../models/BookSchema.js'); 

// Create a new book
async function createNewBook(req, res) {
    try {
        if (
          !req.body.title ||
          !req.body.author ||
          !req.body.publishYear
        ) {
          return res.status(400).send({"message": "Send all required fields: title, author, publishYear"});
        }
        const newBook = {
          title: req.body.title,
          author: req.body.author,
          publishYear: req.body.publishYear,
        };
    
        const book = await books.create(newBook); 
    
        return res.status(201).send(book);
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
      }
}

// Get all books
async function getAllBooks(req, res){
    try {
        const AllBooks = await books.find();
        return  res.status(200).json(AllBooks)
    } catch (err) {
        return res.status(500).json({"message": "No books found"})
    }
}

// Get book by id
async function getBookById(req, res){
    try {
        const { id } = req.params;
        const book = await books.findById(id)
        return res.status(200).send(book)
    } catch (err) {
        res.status(500).send({"Message": "No  book with that ID"});
    }
}

// Update book details
async function updateBookDetails(req, res) {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ "message": "Send all required fields: title, author, publishYear" });
        }

        const { id } = req.params;
        const updatedBook = await books.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedBook) {
            return res.status(404).send({ "message": "Book not found" });
        }
        return res.status(200).json(updatedBook);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ "message": "Internal Server Error" });
    }
}

// Delete book by id
async function deleteBookById(req, res) {
    try {
        const { id } = req.params;
        const bookToDelete = await books.findByIdAndDelete({ _id: id })
        res.status(200).json({"message": "Book successfully deleted"})
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports = {
    createNewBook,
    getAllBooks,
    getBookById,
    updateBookDetails,
    deleteBookById,
};
