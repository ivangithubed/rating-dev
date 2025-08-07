import { useState } from "react";
import Star from "./Star";
import Modal from "./Modal";
import Button from "./Button";
// const Rating = (props) => {
const Rating = ({
  heading = "Оцініть свій досвід",
  color = "gold",
  feedBackMessage = ["Жахливо", "Погано", "Нормально", "Добре", "Відмінно"],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // const feedBackMessage = [
  //   "Жахливо",
  //   "Погано",
  //   "Нормально",
  //   "Добре",
  //   "Відмінно",
  // ];

  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };
  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  };
  return (
    <div className="rating-container">
      {/* <h2>{props.heading}</h2> */}
      <h2>{heading}</h2>
      <div className="stars">
        {stars.map((star) => (
          <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            color={color}
            onRatingClick={setRating}
            onHoverEnter={setHover}
            onHoverLeave={() => setHover(0)}
          />
          // <span
          //   key={star}
          //   className={`star ${star <= (hover || rating) ? "active" : ""}`}
          //   style={{ color: star <= (hover || rating) ? color : "#ccc" }}
          //   onClick={() => setRating(star)}
          //   onMouseEnter={() => setHover(star)}
          //   onMouseLeave={() => setHover(0)}
          // >
          //   &#9733;
          // </span>
        ))}
      </div>
      {/* <p className="feedback">{feedBackMessage[rating - 1]}</p> */}
      {rating > 0 && <p className="feedback">{feedBackMessage[rating - 1]}</p>}
      {/* <button onClick={() => setSubmitted(true)}>Підтвердити</button> */}
      {/* <button className="submit-btn" onClick={handleSubmit} disabled={!rating}>Підтвердити</button> */}
      {/* <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Підтвердити
      </button> */}
      <Button
        className={"submit-btn"}
        onClick={handleSubmit}
        disabled={!rating}
      >
        Підтвердити
      </Button>
      {/* <Button>Test
      </Button> */}
      {/* {submitted && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Дякуємо за ваш відгук!</h2>
            <p>Ви оцінили нас на {rating} {rating === 1?'зірку':rating === 5?'зірок':'зірки'}</p>
            <button className="close-btn" onClick={closeModal}>Закрити</button>
          </div>
        </div>
      )} */}
      <Modal isOpen={submitted} onClose={closeModal} rating={rating} />
    </div>
  );
};
export default Rating;
