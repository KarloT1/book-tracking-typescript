import { useState, useEffect } from "react";
import BookListItem from "./bookListItem";
import SearchField from "../searchField";
import * as booksAPI from "../../booksAPI";

interface State {
  id: number
  title: string
  author: string
  cover: string
  year: number
  isFavorite: boolean
}

const BookList = () => {
  const [books, setBooks] = useState<State[]>([])
  const [value, setValue] = useState<string>("")

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = (): void => {
    booksAPI.getBooks()
      .then(books => {
        setBooks(books)
      })
  }

  const handleChange = (value: string): void => {
    booksAPI.searchBooks(value).then(books => {
      setBooks(books)
    })
  }

  return (
    <>
      <SearchField handleChange={handleChange} />
      <ul className="book-list">
        {books.map(book => (
          <li key={book.id}>
            <BookListItem
              bookCover={book.cover}
              bookTitle={book.title}
              bookAuthor={book.author}
              bookYear={book.year}
              bookId={book.id}
              isFavorite={book.isFavorite}
              fetchBooks={fetchBooks}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default BookList