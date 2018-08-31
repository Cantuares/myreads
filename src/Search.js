import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { debounce } from './utils/Utils'
import Book from './Book'
import * as BooksAPI from './utils/BooksAPI'

class Search extends Component {

  state = {
    books: [],
    error : false
  }

  search(query) {
    try {
      if (!query.length) throw Error(`empty field`)
      debounce.search()(debounce, () => {
        BooksAPI.search(query).then(books => {
          books.map(book => book.shelf = `none`)
          this.setState({books, error: false})
        }).catch(err => {
          this.setState({error: true})
        })
      })
    } catch (err) {
      this.setState({error: true})
    }
  }

  getBooks() {
    const books = this.state.books,
          booksIds = this.props.books.map(book => book.id)

    books.map(book => {
      const index = booksIds.indexOf(book.id)
      if (index !== -1) book.shelf = this.props.books[index].shelf
      return book
    })

    return books.length
    ? this.state.error
      ? []
      : books
    : this.state.error
      ? []
      : this.props.books
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
          <Book
            updateBook={this.props.updateBook}
            books={this.getBooks()} />
        </div>
      </div>
    )
  }
}

export default Search;
