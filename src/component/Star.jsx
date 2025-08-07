const Star = ({
  star,
  rating,
  hover,
  color = "gold",
  onRatingClick,
  onHoverEnter,
  onHoverLeave,
}) => {
  return (
    <span
      className="star"
      style={{ color: star <= (hover || rating) ? color : "#ccc" }}
    // style = {color}
      
      onClick={() => onRatingClick(star)}
      onMouseEnter={() => onHoverEnter(star)}
      onMouseLeave={onHoverLeave}
    >
      &#9733;
    </span>
  );
};

export default Star;
