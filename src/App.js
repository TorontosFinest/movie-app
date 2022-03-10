import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

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

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);
  return (
    <div className="container-fluid movie-app">
      <div className=" d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="new-container">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
