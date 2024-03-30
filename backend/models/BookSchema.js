const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const books = new mongoose.model("Book", bookSchema);
module.exports = books;