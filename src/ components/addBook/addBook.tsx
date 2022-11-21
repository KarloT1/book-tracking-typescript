import React, { useState } from "react";
import * as booksAPI from "../../booksAPI";
import AddByIsbn from "./addByIsbn";

const AddBook = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [cover, setCover] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [bookAdded, setBookAdded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (): void => {
    const body: string = JSON.stringify({
      "title": title,
      "author": author,
      "cover": cover,
      "year": year,
      "isFavorite": false
    })

    booksAPI.addBook(body).then(res => {
      if (res.ok) {
        setBookAdded(true);
        setTimeout(() => {
          setBookAdded(false);
        }, 3000);
      } else {
        setError(true)
        setTimeout(() => {
          setError(false)
        }, 3000);
      }
    })
  }

  const addByIsbn = (bookData: any): void => {
    setTitle(bookData.title)
    setAuthor(bookData.author)
    setCover(bookData.cover)
    setYear(bookData.year)
    setIsFavorite(bookData.isFavorite)
  }

  return (
    <>
      <h3 className="add-book__title">Add a New Book</h3>
        <form className="add-book__form">
          <div className="add-book__input-wrapper">
            <input 
              type="text" 
              id="title" 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder=" " 
              name="title"
              value={title}
            />
            <label htmlFor="title">Book Title</label>
          </div>
          <div className="add-book__input-wrapper">
            <input 
              type="text"
              id="author"
              onChange={(e) => setAuthor(e.target.value)}
              placeholder=" "
              name="author"
              value={author}
            />
            <label htmlFor="author">Book Author</label>
          </div>
          <div className="add-book__input-wrapper add-book__tooltip">
            <input 
              type="text"
              id="cover"
              onChange={(e) => setCover(e.target.value)}
              placeholder=" "
              name="cover"
              value={cover}
            />
            <span className="tooltiptext">provide valid image URL</span>
            <label htmlFor="cover">Book Cover</label>
          </div>
          <div className="add-book__input-wrapper">
            <input 
              type="text"
              id="year"
              onChange={(e) => setYear(e.target.value)}
              placeholder=" "
              name="year"
              value={year}
            />
            <label htmlFor="year">Book Year</label>
          </div>
        </form>
        <div 
          className="add-book__button"
          onClick={handleSubmit}  
        >
          Add Book
        </div>
        {
          bookAdded && (
            <div className="add-book__success">
              Your book was successfully added.
            </div>
          )
        }

        {
          error && (
            <div className="add-book__error">
              There was an error while adding a book.
            </div>
          )
        }
        <hr className="add-book__line" />
        <AddByIsbn addByIsbn={addByIsbn} />
    </>
  )
}

export default AddBook