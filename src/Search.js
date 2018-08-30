import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { debounce } from './utils/Utils'
import Books from './Books'
import * as BooksAPI from './utils/BooksAPI'

class Search extends Component {

  state = {
    books: []
  }

  search(query) {
    if (!query) return;
    debounce.search()(debounce, () => {
      BooksAPI.search(query).then(books => {
        books = books.error ? [] : books
        this.setState({books})
      })
    })
  }

  getBooks() {
    let books = this.state.books
    return books.length ? books : this.props.books
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className='close-search'
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.search(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <Books
            updateBook={this.props.updateBook}
            books={this.getBooks()} />
        </div>
      </div>
    )
  }
}

export default Search;
