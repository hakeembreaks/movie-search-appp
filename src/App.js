import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
const latest = "latest";
const max = 3;

function MovieView(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const handleFetch = (i) => {
    setError("");
    const API = `https://www.omdbapi.com/?s=${i}&type=movie&apikey=59710824`;
    console.log(API);
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.Error) {
          setError(data.Error);
          setData([]);
        } else if (data && data.Search) setData(data.Search);
      });
  };

  useEffect(() => {
    handleFetch(latest);
  }, []);

  useEffect(() => {
    if (props.search && props.search.length > max - 1)
      handleFetch(props.search);
    else handleFetch(latest);
  }, [props.search]);

  return (
    <div className="inner">
      <label>Movie</label>
      <div className="movie-container">
        {data.length > 0 &&
          data.map((movie, index) => <Movie id={index} data={movie} />)}
        {error && (
          <div
            style={{
              display: "flex",
              flexFlow: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "300px",
              textAlign: "center",
              fontSize: "18px",
              color: "red",
            }}
          >
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

function SeriesView(props) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const handleFetch = (i) => {
    setError("");
    const API = `https://www.omdbapi.com/?s=${i}&type=series&apikey=59710824`;
    console.log(API);
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.Error) {
          setError(data.Error);
          setData([]);
        } else if (data && data.Search) setData(data.Search);
      });
  };

  useEffect(() => {
    handleFetch(latest);
  }, []);

  useEffect(() => {
    if (props.search && props.search.length > max - 1)
      handleFetch(props.search);
    else handleFetch(latest);
  }, [props.search]);

  return (
    <div className="inner">
      <label>Series</label>
      <div className="movie-container">
        {data.length > 0 &&
          data.map((movie, index) => <Movie id={index} data={movie} />)}
        {error && (
          <div
            style={{
              display: "flex",
              flexFlow: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "300px",
              textAlign: "center",
              fontSize: "18px",
              color: "red",
            }}
          >
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main id="main-content">
        <div className="inner">
          <div className="search">
            <p className="label">Search</p>
            <input
              placeholder={`Type ${max} character to search`}
              value={search}
              onChange={({ target: { value } }) => setSearch(value)}
            />
          </div>
          <div className="movies">
            <MovieView search={search} />
            <SeriesView search={search} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
