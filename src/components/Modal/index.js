import "./Modal.css";

const Modal = (props) => {
  let genres = [];
  if (props.modalInfo.genres) {
    for (let genre of props.modalInfo.genres) {
      genres.push(genre.name);
    }

    genres = genres.join(", ");
  }

  return (
    <div className="modal" onClick={() => props.setModal(false)}>
      {props.showType === "tv" ? (
        <div className="modal__card" onClick={() => props.setModal(true)}>
          <div
            className="modal__image"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(24, 24, 24), transparent 50%), url(
                https://image.tmdb.org/t/p/original${props.modalInfo.backdrop_path})`,
            }}
          >
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
        </div>
      ) : (
        <div className="modal__card">
          <div
            className="modal__image"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(24, 24, 24), transparent 50%), url(
                https://image.tmdb.org/t/p/original${props.modalInfo.backdrop_path})`,
            }}
          >
            <div className="modal__title-container">
              <h2 className="modal__title">{props.modalInfo.title}</h2>
              <a href="/#" className="featured__buttons--red">
                Play
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
