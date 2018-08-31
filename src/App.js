import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Search from './Search'
import Books from './Books'
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
          <Books
            updateBook={this.updateBook.bind(this)}
            books={this.state.books} />
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
