const books = "http://localhost:8080/books";
const favorites = "http://localhost:8080/favorites";
const bookByIsbn = "https://openlibrary.org/isbn";

export const getBooks = () =>
  fetch(books, {
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())

export const searchBooks = (query: string) =>
  fetch(`${books}?q=${query}`, {
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())

export const getFavorites = () =>
fetch(favorites, {
  headers: {
    "Content-Type": "application/json"
  }
})
.then(res => res.json())

export const addFavorite = (body: string) =>
  fetch(`${favorites}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  })
  .then(res => res.json())

export const removeFavorite = (bookId: number) => 
  fetch(`${favorites}/${bookId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())

export const updateBook = (bookId: number, body: string) =>
  fetch(`${books}/${bookId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  })
  .then(res => res.json())

export const addBook = (body: string) =>
  fetch(`${books}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  })

export const deleteBook = (bookId: number) => 
  fetch(`${books}/${bookId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())

export const searchBookByIsbn = (bookIsbn: string) =>
  fetch(`${bookByIsbn}/${bookIsbn}.json`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  })
  .then(res => res.json())

export const searchAuthorByIsbn = (authorLink: string) =>
  fetch(`https://openlibrary.org${authorLink}.json`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  })
  .then(res => res.json())
  
  export const searchBookCoverByIsbn = (bookIsbn: string) => {
  fetch(`https://covers.openlibrary.org/b/isbn/${bookIsbn}-S.jpg`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  })
  .then(res => res.json())
}