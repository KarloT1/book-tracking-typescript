import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import * as booksAPI from '../../booksAPI';

interface Props {
  bookCover: string
  bookTitle: string
  bookAuthor: string
  bookYear: number
  bookId: number
  isFavorite: boolean
  removeFavorite: (id: number) => void
}

const FavoriteListItem = ({ bookCover, bookTitle, bookAuthor, bookYear, bookId, isFavorite, removeFavorite }: Props) => {

  const deleteFavorite = (): void => {
    const body = JSON.stringify({
      "id": bookId,
      "title": bookTitle,
      "author": bookAuthor,
      "cover": bookCover,
      "year": bookYear,
      "isFavorite": false
    })

    booksAPI.removeFavorite(bookId);
    booksAPI.updateBook(bookId, body);

    removeFavorite(bookId)
  }
  return (
    <div className="favorite-list__item">
      <img src={bookCover} alt={`${bookTitle} cover.`} />
      <span className="favorite-list__title">{bookTitle}</span>
      <span className="favorite-list__author">{bookAuthor}</span>
      <div className={`
          favorite-list__heart
          ${isFavorite ? "favorite": ""}
        `} 
        onClick={deleteFavorite}
      >
        <FontAwesomeIcon icon={faHeart} />
      </div>
    </div>
  )
}

export default FavoriteListItem