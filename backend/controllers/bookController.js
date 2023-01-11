const asyncHandler = require('express-async-handler')

const Book = require('../model/bookModel')

const getBooks = asyncHandler( async (req, res) => {
  console.log("Getting Books...")
  const books = await Book.find()
  res.status(200).json(books)
})

const setBook = asyncHandler( async (req, res) => {
  if (!req.body.title) {
    res.status(400)
    throw new Error('Invalid request body...')
  }
  console.log(req.body)
  const book = await Book.create({
    title: req.body.title,
    author: [req.body.author],
    genre: [req.body.genre],
    thumbnail: req.body.thumbnail,
    description: req.body.description,
    publication: req.body.publication
  })

  res.status(200).json(book)
})

const deleteBook = asyncHandler( async (req, res) => {
  const book = await Book.findById(req.params.id)

  if (!book) {
    res.status(400)
    throw new Error('Book not found') 
  }

  await book.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getBooks, setBook, deleteBook
}