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

  onBookShelf(shelf, book) {
    const indexFound = this.state.books
    .map(book => book.id)
    .indexOf(book.id)

    if (indexFound != -1) {
      this.state.books[indexFound].shelf = shelf
      let books = this.state.books
      this.setState({books})
    } else {
      BooksAPI.get(book.id).then( response => {
        response.shelf = shelf
        let books = this.state.books
        books.concat(response);
        this.setState({books})
      })
    }

    BooksAPI.update(book, shelf);
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
                  onBookShelf={this.onBookShelf.bind(this)}
                  books={this.state.books.filter(book => book.shelf === `currentlyReading`)}
                  title="Currently Reading" />
                <Shelf
                  onBookShelf={this.onBookShelf.bind(this)}
                  books={this.state.books.filter(book => book.shelf === `wantToRead`)}
                  title="Want to Read" />
                <Shelf
                  onBookShelf={this.onBookShelf.bind(this)}
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
            onBookShelf={this.onBookShelf.bind(this)}
            books={this.state.books} />
        )}/>
      </div>
    )
  }
}

export default App
