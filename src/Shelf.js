import React, { Component } from 'react'
import Books from './Books'

class Shelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <Books
            updateBook={this.props.updateBook}
            books={this.props.books} />
        </div>
      </div>
    )
  }
}

export default Shelf
