import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/action';
import {MAX_RATING, MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH, CommentFieldsNames} from "../../../const";

const CommentForm = (props) => {
  const {postComment, isUploading, startUpload} = props;

  const [reviewForm, setReviewForm] = useState({
    rating: 0,
    comment: ``,
  });

  const isCommentPostValid = ({rating, comment}) => (
    rating > 0 && rating <= MAX_RATING &&
    comment.toString().length >= MIN_COMMENT_LENGTH &&
    comment.toString().length <= MAX_COMMENT_LENGTH
  );

  const handleSubmit = (evt) => {
    const CommentPost = reviewForm;

    evt.preventDefault();
    if (isCommentPostValid(CommentPost)) {
      startUpload();
      postComment(CommentPost);
    }
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setReviewForm({...reviewForm, [CommentFieldsNames[name]]: value});
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
                  checked={parseInt(reviewForm.rating, 10) === index + 1}
                  disabled={isUploading}
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
          minLength={MIN_COMMENT_LENGTH}
          disabled={isUploading}
          onChange={handleFieldChange}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit"
            disabled={!isCommentPostValid(reviewForm) || isUploading}
          >
            {isUploading ? `Uploading to server...` : `Post`}
          </button>
        </div>

      </div>
    </form>
  );
};

CommentForm.propTypes = {
  postComment: PropTypes.func,
  isUploading: PropTypes.bool,
  startUpload: PropTypes.func,
};


const mapStateToProps = (state) => ({
  isUploading: state.isReviewUploading,
});

const mapDispatchToProps = (dispatch) => ({
  startUpload() {
    dispatch(ActionCreator.startCommentUpload());
  },
});

export {CommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
