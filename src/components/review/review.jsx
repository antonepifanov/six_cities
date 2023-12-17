import React from 'react';
import {STAR_WIDTH} from '../../constants/constants';
import {REVIEW_TYPES} from '../../prop-types/prop-types';

const Review = ({review}) => (
  <li className="reviews__item" key={review.id}>
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
      </div>
      <span className="reviews__user-name">
        {review.user.name}
      </span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: `${Math.round(review.rating) * STAR_WIDTH}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {review.comment}
      </p>
      <time className="reviews__time" dateTime={new Date(review.date).toLocaleString(`en-CA`, {dateStyle: `short`})}>
        {new Date(review.date).toLocaleString(`en-CA`, {year: `numeric`, month: `long`})}
      </time>
    </div>
  </li>
);

Review.propTypes = {
  review: REVIEW_TYPES,
};

export default Review;
