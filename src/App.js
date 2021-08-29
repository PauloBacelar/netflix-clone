// Imports
import "./App.css";
import React, { useEffect, useState } from "react";
import data from "./api";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";

// Component
const App = () => {
  // Hooks
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);

  // Methods
  useEffect(() => {
    const loadData = async () => {
      // List of movies
      let movieList = await data.getHomeList();
      setMovieList(movieList);

      // Featured movie
      let netflixOriginals = movieList.filter(
        (type) => type.camel === "originals"
      );
      let randomNumber = Math.floor(
        Math.random() * netflixOriginals[0].items.results.length - 1
      );
      let chosenFeatured = netflixOriginals[0].items.results[randomNumber];
      let chosenInfo = await data.getMovieInfo(chosenFeatured.id, "tv");
      setFeaturedMovie(chosenInfo);
    };

    loadData();
  }, []);

  // JSX
  return (
    <div className="page">
      {/* Header */}
      <section className="header"></section>

      {/* Featured movie */}
      <section className="featured">
        {featuredMovie && <FeaturedMovie featuredData={featuredMovie} />}
      </section>

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
