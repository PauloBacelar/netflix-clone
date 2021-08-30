import "./Modal.css";

const Modal = (props) => {
  console.log(props.modalInfo);

  return (
    <div className="modal">
      <div className="modal__info">{props.modalInfo.name}</div>
    </div>
  );
};

export default Modal;
