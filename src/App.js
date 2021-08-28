// Imports
import React, { useEffect, useState } from "react";
import data from "./api";

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
      <div className="header"></div>

      {/* Featured movie */}
      <div className="featured"></div>

      {/* Lists of movies */}
      <div className="lists"></div>

      {/* Footer */}
      <div className="footer"></div>
    </div>
  );
};

// Export
export default App;
