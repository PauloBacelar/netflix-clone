import "./Modal.css";

const Modal = (props) => {
  console.log(props.modalInfo);

  return (
    <div className="modal" onClick={() => props.setModal(false)}>
      {props.showType === "tv" ? (
        <div className="modal__card">
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
