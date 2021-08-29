// Imports
import "./App.css";
import React, { useEffect, useState } from "react";
import data from "./api";
import MovieRow from "./components/MovieRow";

// Component
const App = () => {
  // Hooks
  const [movieList, setMovieList] = useState([]);

  // Methods
  useEffect(() => {
    const loadData = async () => {
      let movieList = await data.getHomeList();
      setMovieList(movieList);
    };

    loadData();
  }, []);

  // JSX
  return (
    <div className="page">
      {/* Header */}
      <section className="header"></section>

      {/* Featured movie */}
      <section className="featured"></section>

      {/* Lists of movies */}
      <section className="lists">
        {movieList.map((list, key) => {
          return <MovieRow key={key} title={list.title} list={list.items} />;
        })}
      </section>

      {/* Footer */}
      <section className="footer"></section>
    </div>
  );
};

// Export
export default App;
