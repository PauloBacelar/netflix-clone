import "./Modal.css";

const Modal = (props) => {
  console.log(props);
  return (
    <div className="modal">
      {props.showType === "tv" ? (
        <div className="modal__info">{props.modalInfo.name}</div>
      ) : (
        <div className="modal__info">{props.modalInfo.title}</div>
      )}
    </div>
  );
};

export default Modal;
