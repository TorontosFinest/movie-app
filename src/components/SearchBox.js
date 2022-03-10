import React from "react";

export default function SearchBox(props) {
  return (
    <div className="col col-sm-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search for a movie..."
      />
    </div>
  );
}
