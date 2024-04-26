import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
const books = [
  {
    author: 'Emily Henry',
    title: 'Funny Story',
    img: 'https://m.media-amazon.com/images/I/91Yb6fD29xL._AC_UY218_.jpg',
    id: 1,
  },
  {
    author: 'Ann Napolitano',
    title: 'Hello Beautiful',
    img: 'https://m.media-amazon.com/images/I/91ejqv4ZJ6L._AC_UY218_.jpg',
    id: 2,
  },
]

const BookList = () => {
  const someValue = 'shakeAndBake'
  const displayValue = () => {
    console.log(someValue)
  }
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author, displayValue } = props

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayValue}>click me</button>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
