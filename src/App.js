import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const getMovies = (searchValue) => {
    axios
      .get(`http://www.omdbapi.com/?s=${searchValue}&apikey=c8f1c5a7`)
      .then((res) => {
        console.log(res);
        if (res.data.Search) {
          setMovies(res.data.Search);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };
  return (
    <div className="container-fluid movie-app">
      <div className=" d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="new-container">
        <MovieList
          movies={movies}
          favouriteComponent={AddFavourites}
          handleFavouritesClick={addFavouriteMovie}
        />
      </div>
      <div className=" d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="new-container">
        <MovieList
          movies={favourites}
          favouriteComponent={RemoveFavourites}
          handleFavouritesClick={removeFavouriteMovie}
        />
      </div>
    </div>
  );
}

export default App;
