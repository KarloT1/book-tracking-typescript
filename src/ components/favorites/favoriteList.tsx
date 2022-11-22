import { useEffect, useState } from "react";
import * as booksAPI from "../../booksAPI";
import FavoriteListItem from "./favoriteListItem";

interface State {
  id: number
  title: string
  author: string
  cover: string
  year: number
  isFavorite: boolean
}

const FavoriteList = () => {
  const [favorites, setFavorites] = useState<State[]>([]);

  useEffect(() => {
    booksAPI.getFavorites().then(favoriteItems => {
      setFavorites(favoriteItems)
    })
  }, [])

  const removeFavorite = (bookId: number): void => {
    favorites.forEach((favorite, index) => {
      const favoriteItems: State[] = [...favorites]

      if (favoriteItems[index].id === bookId) {
        favoriteItems.splice(index, 1);

        setFavorites(favoriteItems)
      }
    })
  }

  const favoritesLength: number = favorites.length;

  return (
    <>
      {
        !favoritesLength
        ? <div className="no-favorites">
            There are no books on your Favorites list. <br/>
            Add some on the Home page and you can view them here.
          </div>
        : <ul className="favorite-list">
            {favorites.map((favorite) => (
              <li key={favorite.id}>
                <FavoriteListItem 
                  bookCover={favorite.cover}
                  bookTitle={favorite.title}
                  bookAuthor={favorite.author}
                  bookYear={favorite.year}
                  bookId={favorite.id}
                  removeFavorite={removeFavorite}
                  isFavorite={favorite.isFavorite}
                />
              </li>
            ))}
          </ul>
      }
    </>
  )
}

export default FavoriteList