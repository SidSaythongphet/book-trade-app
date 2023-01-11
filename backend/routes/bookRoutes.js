const express = require('express')
const router = express.Router()
const { getBooks, setBook, deleteBook } = require('../controllers/bookController')

router.get('/', getBooks)

router.post('/', setBook)

router.delete('/:id', deleteBook)

module.exports = router