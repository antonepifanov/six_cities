import React, {useState} from 'react';
import {RATING_TITLES} from '../../constants/constants';

const CommentForm = () => {
  const [commentForm, setCommentForm] = useState({
    rating: null,
    review: ``,
  });

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setCommentForm({...commentForm, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_TITLES.map((title, index) => (
          <React.Fragment key={index}>
            <input onChange={handleFieldChange} className="form__rating-input visually-hidden" name="rating" value={index + 1} id={`${index + 1}-stars`} type="radio"/>
            <label htmlFor={`${index + 1}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        )).reverse()}
      </div>
      <textarea onChange={handleFieldChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" minLength="50" maxLength="300"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="true">Submit</button>
      </div>
    </form>
  );
};

export default CommentForm;
