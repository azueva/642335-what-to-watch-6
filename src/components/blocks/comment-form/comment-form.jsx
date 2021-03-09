import React, {useState} from "react";
import PropTypes from "prop-types";
import {MAX_RATING, FieldsNames} from "../../../const";

const CommentForm = (props) => {
  const {rating: initialRating, redirectToPrevPage, postComment} = props;

  const [reviewForm, setReviewForm] = useState({
    stars: Math.round(initialRating),
    comment: ``,
  });

  const handleSubmit = (evt) => {
    const {stars: rating, comment} = reviewForm;
    evt.preventDefault();
    if (comment.toString().length >= 10 && comment.toString().length <= 50) {
      postComment({rating, comment});
      redirectToPrevPage();
    }
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setReviewForm({...reviewForm, [FieldsNames[name]]: value});
  };

  return (
    <form action="#" className="add-review__form"
      onSubmit={handleSubmit}
    >
      <div className="rating">
        <div className="rating__stars">
          {
            Array(MAX_RATING).fill(``).map((item, index) => (
              <React.Fragment key={index}>
                <input className="rating__input" type="radio" name="rating"
                  id={`star-${index + 1}`}
                  value={index + 1}
                  checked={parseInt(reviewForm.stars, 10) === index + 1}
                  onChange={handleFieldChange}
                />
                <label className="rating__label" htmlFor={`star-${index + 1}`}>
                  {`Rating-${index + 1}`}
                </label>
              </React.Fragment>
            ))
          }
        </div>
      </div>

      <div className="add-review__text"
        style={{backgroundColor: `rgba(255, 255, 255, 0.23)`}}
      >
        <textarea className="add-review__textarea" name="review-text" id="review-text"
          placeholder="Review text"
          onChange={handleFieldChange}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
};

CommentForm.propTypes = {
  rating: PropTypes.number,
  redirectToPrevPage: PropTypes.func,
  postComment: PropTypes.func,
};

export default CommentForm;
