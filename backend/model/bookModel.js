const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Must have a title']
    },
    author: [String],
    genre: [String],
    thumbnail: String,
    description: String,
    publication: String
  },
  {
    versionKey: false
  }
)

module.exports = mongoose.model('Book', bookSchema)