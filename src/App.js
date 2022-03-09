import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([
    {
      Title: "White Chicks",
      Year: "2004",
      imdbID: "tt0381707",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTY3OTg2OTM3OV5BMl5BanBnXkFtZTYwNzY5OTA3._V1_SX300.jpg",
    },
    {
      Title: "Chicks in White Satin",
      Year: "1993",
      imdbID: "tt0106555",
      Type: "movie",
      Poster: "N/A",
    },
    {
      Title: "A Couple of White Chicks at the Hairdresser",
      Year: "2007",
      imdbID: "tt0965369",
      Type: "movie",
      Poster: "N/A",
    },
  ]);

  axios.get("");
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
