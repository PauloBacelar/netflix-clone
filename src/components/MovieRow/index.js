// Imports
import "./MovieRow.css";
import { useState, useEffect } from "react";

// Component
const MovieRow = ({ title, list }) => {
  // Hooks
  const [movieList, setMovieList] = useState(list);

  // Methods
  useEffect(() => {
    const shuffleList = (unshuffledList) => {
      for (let i = unshuffledList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [unshuffledList[i], unshuffledList[j]] = [
          unshuffledList[j],
          unshuffledList[i],
        ];
      }

      return unshuffledList;
    };

    setMovieList(shuffleList(movieList.results));
  }, []);

  // JSX
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow__listarea">
        <div className="movieRow__list">
          {list.results.length > 0 &&
            list.results.map((movie, key) => {
              return (
                <div className="movieRow__movie" key={key}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.original_title}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

// Export
export default MovieRow;
