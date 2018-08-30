import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import Search from './Search'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class App extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  updateBook(book) {
    let books = this.state.books,
        bookIndex = books.map(v => v.id).indexOf(book.id)
    if (bookIndex >= 0) {
      books[bookIndex] = book
      this.setState({books})
    } else {
      books = books.concat(book)
      this.setState({books})
    }
    BooksAPI.update(book, book.shelf)
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
               <div>
                <Shelf
                  updateBook={this.updateBook.bind(this)}
                  books={this.state.books.filter(book => book.shelf === `currentlyReading`)}
                  title="Currently Reading" />
                <Shelf
                  updateBook={this.updateBook.bind(this)}
                  books={this.state.books.filter(book => book.shelf === `wantToRead`)}
                  title="Want to Read" />
                <Shelf
                  updateBook={this.updateBook.bind(this)}
                  books={this.state.books.filter(book => book.shelf === `read`)}
                  title="Read" />
               </div>
            </div>
            <div className="open-search">
              <Link
                to='/search'
                className='open-search'
              >Add a book</Link>
            </div>
          </div>
        )}/>
        <Route path='/search' render={({ history }) => (
          <Search
            updateBook={this.updateBook.bind(this)}
            books={this.state.books} />
        )}/>
      </div>
    )
  }
}

export default App
