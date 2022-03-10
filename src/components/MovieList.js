import React from "react";
export default function MovieList(props) {
  console.log("PROPS IS ", props);
  return (
    <>
      {props.movies.map((movie, index) => {
        return (
          <div key={index} className="d-flex justify-content-start m-3">
            <img src={movie.Poster} alt="movie" />
          </div>
        );
      })}
    </>
  );
}
