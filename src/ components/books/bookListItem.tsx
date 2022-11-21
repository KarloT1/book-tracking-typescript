import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import * as booksAPI from "../../booksAPI";

interface Props {
  bookCover: string
  bookTitle: string
  bookAuthor: string
  bookYear: number
  bookId: number
  isFavorite: boolean
  fetchBooks: () => void
}

const BookListItem = ({ bookCover, bookTitle, bookAuthor, bookYear, bookId, isFavorite, fetchBooks }: Props) => {

  const addFavorite = () => {
    const body: string = JSON.stringify({
      "id": bookId,
      "title": bookTitle,
      "author": bookAuthor,
      "cover": bookCover,
      "year": bookYear,
      "isFavorite": true
    })

    booksAPI.addFavorite(body);
    booksAPI.updateBook(bookId, body).then(() => {
      fetchBooks()
    })
  }

  const removeFavorite = () => {
    const body: string = JSON.stringify({
      "id": bookId,
      "title": bookTitle,
      "author": bookAuthor,
      "cover": bookCover,
      "year": bookYear,
      "isFavorite": false
    })

    booksAPI.removeFavorite(bookId);
    booksAPI.updateBook(bookId, body).then(() => {
      fetchBooks()
    })
  }

  const deleteBook = (): void => {
    booksAPI.deleteBook(bookId).then(() => {
      fetchBooks()
    }).then(() => {
      if (isFavorite) {
        booksAPI.removeFavorite(bookId)
      }
    })
  }
  return (
    <div className="book-list__item">
        <img src={bookCover} alt={`${bookTitle} cover.`} />
        <span className="book-list__title">{bookTitle}</span>
        <span className="book-list__author">{bookAuthor}</span>
        <div 
          className={`book-list__heart 
            ${isFavorite ? "favorite" : ""}
          `} 
          onClick={isFavorite
            ? removeFavorite
            : addFavorite
          }
        >
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div 
          className="book-list__trash"
          onClick={deleteBook}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      </div>
  )
}

export default BookListItem