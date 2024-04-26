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
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}
const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e)
    console.log(e.target.name)
    console.log(e.target.value)
  }
  const handleButtonClick = () => {
    alert('Handle button click')
  }
  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical form</h2>
        <input
          type="text"
          name="Example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        <button type="submit">submit</button>
      </form>
      <div>
        <button onClick={handleButtonClick}>click me</button>
      </div>
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
