// Imports
import "./MovieRow.css";
import { useState, useEffect } from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

// Component
const MovieRow = ({
  title,
  list,
  showMovieInfo,
  modalIsOn,
  getModalMovieInfo,
}) => {
  // Hooks
  const [scrollX, setScrollX] = useState(-400);

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

    list.results = shuffleList(list.results);
  }, []);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);

    if (x > 0) {
      x = 0;
    }

    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = list.results.length * 200;

    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }

    setScrollX(x);
  };

  // JSX
  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow__left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow__right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow__listarea">
        <div
          className="movieRow__list"
          style={{
            marginLeft: scrollX,
            width: list.results.length * 200,
          }}
        >
          {list.results.length > 0 &&
            list.results.map((movie, key) => {
              return (
                <div className="movieRow__movie" key={key}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.original_title}
                    onClick={() => {
                      showMovieInfo(!modalIsOn);
                      if (title !== "Netflix Originals") {
                        getModalMovieInfo([movie.id, "movie"]);
                      } else {
                        getModalMovieInfo([movie.id, "tv"]);
                      }
                    }}
                    style={modalIsOn ? { opacity: 0.7 } : null}
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
