import React, { useState } from "react";
import { ReactComponent as Star } from "../../assets/star.svg";
import "./RatingCarousel.css";
import { Button } from "react-bootstrap";

const RatingSlider = ({ id, addRating }) => {
  const [rate, setRate] = useState(0);

  const handleChange = (event) => {
    setRate(parseInt(event.target.value, 10));
  };

  const handleAddRating = () => {
    const formData = new FormData();
    formData.append("mark", rate);
    formData.append("id", id);
    addRating(formData);
  };

  return (
    <div className="rating-slider-container">
      <div className="rating-stars">
        {[0, 1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`star ${star >= rate ? "filled" : ""}`}
            onClick={() => setRate(star)}
          />
        ))}
      </div>
      <input
        type="range"
        min="0"
        max="5"
        step="1"
        value={rate}
        onChange={handleChange}
        className="slider"
      />
      <Button variant="secondary" onClick={handleAddRating}>
        Добавить рейтинг
      </Button>
    </div>
  );
};

export default RatingSlider;
