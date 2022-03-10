import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    axios
      .get("http://www.omdbapi.com/?s=white chicks&apikey=c8f1c5a7")
      .then((res) => {
        console.log(res);
        setMovies(res.data.Search);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
