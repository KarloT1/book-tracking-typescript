import { useState } from "react";
import * as booksAPI from "../../booksAPI";

interface Props {
  addByIsbn: (args: {}) => void
}
const AddByIsbn = ({ addByIsbn }: Props) => {
  const [bookIsbn, setBookIsbn] = useState<string>("")
  const [title, setTitle] = useState<string>("")
  const [author, setAuthor] = useState<string>("")
  const [cover, setCover] = useState<string>("")
  const [year, setYear] = useState<string>("")
  const [isFavorite, setIsFavorite ] = useState<boolean>(false)

  const handleSubmit = (): void => {
    booksAPI.searchBookByIsbn(bookIsbn).then(data => {
      console.log(data)
      if (data.authors) {
        let authorLink: string = data.authors[0].key;
        booksAPI.searchAuthorByIsbn(authorLink).then(authorData => {
          setAuthor(authorData.name)
          setTitle(data.title)
          setYear(data.publish_date)
          setCover(`https://covers.openlibrary.org/b/isbn/${bookIsbn}-M.jpg`)
          setIsFavorite(false)

          const bookData = {
            "title": title,
            "author": author,
            "year": year,
            "isFavorite": isFavorite,
            "cover": cover
          }

          addByIsbn(bookData)
        })

      } else {
        let authorData: string = data.contributions[0]
        let authorName: string[] = authorData.split(",")
        let author: string = authorName[1].trim().concat(" ", authorName[0])

        setAuthor(author)
        setTitle(data.title)
        setYear(data.publish_date)
        setCover(`https://covers.openlibrary.org/b/isbn/${bookIsbn}-M.jpg`)
        setIsFavorite(false)

        const bookData = {
          "title": title,
          "author": author,
          "year": year,
          "isFavorite": isFavorite,
          "cover": cover
        }

        addByIsbn(bookData)
      }
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(typeof e.target.value)
    setBookIsbn(e.target.value)
  }

  return (
    <>
      <h3 className="add-book__title">Add Book by ISBN</h3>
        <h4 className="add-book__title">Enter a valid ISBN 10 or 13</h4>
        <form className="add-book__form">
          <div className="add-book__input-wrapper">
            <input 
              type="text" 
              id="bookIsbn" 
              onChange={handleChange} 
              placeholder=" " 
              name="bookIsbn"
              value={bookIsbn}
            />
            <label htmlFor="title">Book ISBN</label>
          </div>
        </form>
        <div 
          className="add-book__button add-book__button--isbn"
          onClick={handleSubmit}  
        >
          Find Book by ISBN
        </div>
    </>
  )
}

export default AddByIsbn