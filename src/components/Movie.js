import React from "react";

import "./Movie.css";

const Movie = (props) => {
  const thumbnail = "/image.png";
  const url =
    props.data && props.data.Poster && props.data.Poster !== "N/A"
      ? props.data.Poster
      : thumbnail;
  return (
    <div key={props.id} className="movie">
      <div
        style={{
          background: `url(${url}) no-repeat`,
          backgroundSize: "cover",
          backgroundColor: "#000000",
        }}
        className="img"
        title={(props.data && props.data.Title) || ""}
      />
      <div className="title">
        {(props.data && props.data.Title) || "This is a movie component."}
      </div>
    </div>
  );
};

export default Movie;
