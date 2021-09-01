import "./Modal.css";
import playButton from "../../images/play.png";

const Modal = (props) => {
  let genres = [];
  if (props.modalInfo.genres) {
    for (let genre of props.modalInfo.genres) {
      genres.push(genre.name);
    }

    genres = genres.join(", ");
  }

  return (
    <div className="modal">
      {props.showType === "tv" ? (
        <div className="modal__card">
          <div
            className="modal__image"
            style={
              props.modalInfo.backdrop_path
                ? {
                    backgroundImage: `linear-gradient(to top, rgba(24, 24, 24), transparent 50%), url(
                https://image.tmdb.org/t/p/original${props.modalInfo.backdrop_path})`,
                  }
                : null
            }
          >
            <div className="modal__close" onClick={() => props.setModal(false)}>
              <span className="material-icons">close</span>
            </div>

            <div className="modal__title-container">
              <h2 className="modal__title">{props.modalInfo.name}</h2>
              <a href="/#" className="modal__button">
                Play
              </a>
            </div>
          </div>

          <div className="modal__info">
            <div className="modal__details">
              <h3 className="modal__rating">
                {Math.round(props.modalInfo.vote_average * 10)}% match
              </h3>
              <h3 className="modal__year">
                {props.modalInfo.first_air_date
                  ? props.modalInfo.first_air_date.substring(0, 4)
                  : null}
              </h3>
              <h3 className="modal__seasons">
                {props.modalInfo.number_of_seasons} season
                {props.modalInfo.number_of_seasons !== 1 ? "s" : ""}
              </h3>
            </div>

            <div className="modal__description">
              <p>
                {props.modalInfo.overview ? (
                  `${props.modalInfo.overview}`
                ) : (
                  <span className="modal__no-description">
                    No overview for this show
                  </span>
                )}
              </p>
              <p>Genres: {genres}</p>
            </div>
          </div>

          <div className="modal__related">
            <h2>Similar shows</h2>

            <div className="modal__grid">
              {props.similarTitles
                ? props.similarTitles.results.map((title, key) => {
                    if (title.backdrop_path) {
                      return (
                        <div className="modal__grid-item" key={key}>
                          <div
                            className="modal__grid-img"
                            style={
                              title.backdrop_path
                                ? {
                                    backgroundImage: `url(https://image.tmdb.org/t/p/original${title.backdrop_path})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                  }
                                : null
                            }
                          >
                            <p className="modal__grid-year">
                              {title.first_air_date !== undefined
                                ? title.first_air_date.substring(0, 4)
                                : ""}
                            </p>
                            <div className="modal__grid-play">
                              <img src={playButton} alt="" />
                            </div>
                          </div>

                          <div className="modal__grid-info">
                            <div className="modal__grid-title">
                              <div className="modal__rating">
                                <h4>
                                  {" "}
                                  {Math.round(title.vote_average * 10)}% match
                                </h4>
                              </div>
                              <h4 className="modal__grid-name">{title.name}</h4>
                            </div>
                            <div className="modal__grid-description">
                              <p>
                                {title.overview.length > 15
                                  ? title.overview.substring(0, 140) + "..."
                                  : title.overview}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return null;
                  })
                : ""}
            </div>
          </div>
        </div>
      ) : (
        <div className="modal__card">
          <div
            className="modal__image"
            style={
              props.modalInfo.backdrop_path
                ? {
                    backgroundImage: `linear-gradient(to top, rgba(24, 24, 24), transparent 50%), url(
                https://image.tmdb.org/t/p/original${props.modalInfo.backdrop_path})`,
                  }
                : null
            }
          >
            <div className="modal__close" onClick={() => props.setModal(false)}>
              <span className="material-icons">close</span>
            </div>

            <div className="modal__title-container">
              <h2 className="modal__title">{props.modalInfo.title}</h2>
              <a href="/#" className="modal__button">
                Play
              </a>
            </div>
          </div>

          <div className="modal__info">
            <div className="modal__details">
              <h3 className="modal__rating">
                {Math.round(props.modalInfo.vote_average * 10)}% match
              </h3>
              <h3 className="modal__year">
                {props.modalInfo.release_date
                  ? props.modalInfo.release_date.substring(0, 4)
                  : null}
              </h3>
              <h3 className="modal__seasons">
                {Math.round(props.modalInfo.runtime / 60)}h{" "}
                {props.modalInfo.runtime % 60}min
              </h3>
            </div>

            <div className="modal__description">
              <p>
                {props.modalInfo.overview ? (
                  `${props.modalInfo.overview}`
                ) : (
                  <span className="modal__no-description">
                    No overview for this show
                  </span>
                )}
              </p>
              <p>Genres: {genres}</p>
            </div>
          </div>

          <div className="modal__related">
            <h2>Similar shows</h2>

            <div className="modal__grid">
              {props.similarTitles
                ? props.similarTitles.results.map((title, key) => {
                    if (title.backdrop_path) {
                      return (
                        <div className="modal__grid-item" key={key}>
                          <div
                            className="modal__grid-img"
                            style={
                              title.backdrop_path
                                ? {
                                    backgroundImage: `url(https://image.tmdb.org/t/p/original${title.backdrop_path})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                  }
                                : null
                            }
                          >
                            <p className="modal__grid-year">
                              {title.release_date !== undefined
                                ? title.release_date.substring(0, 4)
                                : ""}
                            </p>
                            <div className="modal__grid-play">
                              <img src={playButton} alt="" />
                            </div>
                          </div>

                          <div className="modal__grid-info">
                            <div className="modal__grid-title">
                              <div className="modal__rating">
                                <h4>
                                  {" "}
                                  {Math.round(title.vote_average * 10)}% match
                                </h4>
                              </div>
                              <h4 className="modal__grid-name">
                                {title.title}
                              </h4>
                            </div>
                            <div className="modal__grid-description">
                              <p>
                                {title.overview.length > 15
                                  ? title.overview.substring(0, 140) + "..."
                                  : title.overview}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return null;
                  })
                : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
