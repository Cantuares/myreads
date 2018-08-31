import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <Book
            updateBook={this.props.updateBook}
            books={this.props.books} />
        </div>
      </div>
    )
  }
}

export default Shelf
