import React, { Component } from 'react'
import { shelfOptions } from './utils/Utils'

class Book extends Component {

  handleShelf(shelf, book) {
    book.shelf = shelf
    this.props.updateBook(book)
  }

  render() {
    return (
        <ol className="books-grid">
          {this.props.books.map((book, key) => (
            <li key={key}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover"
                    style={{
                      backgroundImage: `url(${
                        book.imageLinks ?
                        book.imageLinks.smallThumbnail :
                        ``
                      })`
                    }}>
                  </div>
                  <div className="book-shelf-changer">
                    <select
                      value={
                        book.shelf ?
                        book.shelf :
                        `none`
                      }
                      onChange={
                        event => this.handleShelf(event.target.value, book)
                      }>
                      <option value="move" disabled>Move to...</option>
                      {shelfOptions.map((option, key) => (
                        <option key={key} value={option.value}>
                          {option.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                  { book.authors ?
                    book.authors.join(', ') :
                    book.authors }
                </div>
              </div>
            </li>
          ))}
        </ol>
    )
  }
}

export default Book
