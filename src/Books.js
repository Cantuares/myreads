import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { shelfOptions } from './utils/Utils'
import Shelf from './Shelf'

class Books extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
           <div>
           {
             shelfOptions.filter(o => o.value !== 'none').map((o, key) => (
             <Shelf
              key={key}
              updateBook={this.props.updateBook}
              books={this.props.books.filter(book => book.shelf === o.value)}
              title={o.title} />
             ))
          }
           </div>
        </div>
        <div className="open-search">
          <Link
            to='/search'
            className='open-search'
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Books
