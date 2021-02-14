import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {MAX_RATING, FieldsNames} from "../../../const";

class CommentForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      stars: Math.round(this.props.rating),
      comment: ``,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(evt) {
    const {comment} = this.state;
    const {history} = this.props;

    evt.preventDefault();
    if (comment.toString().length >= 10 && comment.toString().length <= 50) {
      history.go(-3);
    }
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[FieldsNames[name]]: value});
  }

  render() {
    const {stars} = this.state;

    return (
      <form action="#" className="add-review__form"
        onSubmit={this.handleSubmit}
      >
        <div className="rating">
          <div className="rating__stars">
            {
              Array(MAX_RATING).fill(``).map((item, index) => (
                <React.Fragment key={index}>
                  <input className="rating__input" type="radio" name="rating"
                    id={`star-${index + 1}`}
                    value={index + 1}
                    checked={parseInt(stars, 10) === index + 1}
                    onChange={this.handleFieldChange}
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
            onChange={this.handleFieldChange}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    );
  }
}

CommentForm.propTypes = {
  rating: PropTypes.number,
  history: PropTypes.object.isRequired
};

export default CommentForm;
