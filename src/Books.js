import React, { Component } from 'react'

class Books extends Component {
  state = {
    options: [
      { name: `Currently Reading` , value: `currentlyReading`},
      { name: `Want to Read` , value: `wantToRead`},
      { name: `Read` , value: `read`},
      { name: `None` , value: `none`},
    ]
  }

  handleShelf(shelf, book) {
    this.props.onBookShelf(shelf, book);
  }

  render() {
    return (
        <ol className="books-grid">
          {this.props.books.map(book => (
            <li key={book.id}>
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
                      {this.state.options.map((option, key) => (
                        <option key={key} value={option.value}>
                          {option.name}
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

export default Books
