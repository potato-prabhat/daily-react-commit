import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './books'
import Book from './Book'

const BookList = () => {
  const someValue = 'shakeAndBake'
  const displayValue = () => {
    console.log(someValue)
  }

  return (
    <div>
      <h1>Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book
              {...book}
              key={book.id}
              displayValue={displayValue}
              number={index}
            />
          )
        })}
      </section>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
