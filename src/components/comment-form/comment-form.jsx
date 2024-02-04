import React, {useEffect, useState} from 'react';
import {BACKEND_URL, FETCH_STATUS, RATING_TITLES, REVIEW_LENGTH} from '../../constants/constants';
import {connect} from 'react-redux';
import {HANDLER_TYPES, OBJECT_TYPES, STRING_TYPES} from '../../prop-types/prop-types';
import {postReview} from '../../store/api-actions';
import {ActionCreator} from '../../store/action';

const CommentForm = ({room, onCommentFormSubmit, fetchStatus}) => {
  const [commentForm, setCommentForm] = useState({
    rating: null,
    comment: ``,
  });

  const [isButtonDisabled, setButtonDisabled] = useState(true);

  useEffect(() =>
    !commentForm.rating || commentForm.comment.length < REVIEW_LENGTH.MIN || fetchStatus === FETCH_STATUS.SENDING
      ? setButtonDisabled(true)
      : setButtonDisabled(false)
  );

  useEffect(() => {
    if (fetchStatus === FETCH_STATUS.DONE) {
      setCommentForm({
        rating: null,
        comment: ``
      });
    }
  }, [fetchStatus]);

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setCommentForm({...commentForm, [name]: value});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onCommentFormSubmit(commentForm, room.id, evt.target);
  };

  return (
    <form className="reviews__form form"
      action={BACKEND_URL}
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_TITLES.map((title, index) => (
          <React.Fragment key={index}>
            <input onChange={handleFieldChange} className="form__rating-input visually-hidden" name="rating" value={index + 1} id={`${index + 1}-stars`} type="radio" checked={commentForm.rating - 1 === index}/>
            <label htmlFor={`${index + 1}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        )).reverse()}
      </div>
      <textarea onChange={handleFieldChange} className="reviews__textarea form__textarea" id="review" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" minLength={REVIEW_LENGTH.MIN} maxLength={REVIEW_LENGTH.MAX} value={commentForm.comment}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isButtonDisabled}>Submit</button>
      </div>
      {fetchStatus === FETCH_STATUS.ERROR ? <span className="review-error">Oops, ERROR. Try again</span> : ``}
    </form>
  );
};

CommentForm.propTypes = {
  onCommentFormSubmit: HANDLER_TYPES,
  room: OBJECT_TYPES,
  fetchStatus: STRING_TYPES,
};

const mapStateToProps = (state) => ({
  room: state.room,
  fetchStatus: state.fetchStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onCommentFormSubmit(reviewData, id) {
    dispatch(ActionCreator.changeFetchStatus(FETCH_STATUS.SENDING));
    dispatch(postReview(reviewData, id));
  }
});

export {CommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
