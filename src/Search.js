import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { debounce } from './utils/Utils'
import Books from './Books'
import * as BooksAPI from './utils/BooksAPI'

class Search extends Component {
  searchBook(query) {
    
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
              onChange={(event) => this.searchBook(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <Books
            onBookShelf={this.props.onBookShelf}
            books={this.props.books} />
        </div>
      </div>
    )
  }
}

export default Search;
