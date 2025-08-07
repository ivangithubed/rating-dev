import Button from "./Button";


const Modal = ({ isOpen, onClose, rating }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Дякуємо за ваш відгук!</h2>
        <p>
          Ви оцінили нас на {rating}{" "}
          {rating === 1 ? "зірку" : rating === 5 ? "зірок" : "зірки"}
        </p>
        {/* <button className="close-btn" onClick={onClose}>
          Закрити
        </button> */}
        <Button className="close-btn" onClick={onClose}>
          Закрити
        </Button>
      </div>
    </div>
  );
};

export default Modal;
