import React from 'react';
import {REVIEWS_TYPES} from '../../prop-types/prop-types';
import Review from '../review/review';

const ReviewsList = ({placeReviews}) => (
  <ul className="reviews__list">
    {placeReviews.map((review) =>
      <Review
        key={review.id}
        review={review}
      />
    )}
  </ul>
);

ReviewsList.propTypes = {
  placeReviews: REVIEWS_TYPES,
};

export default ReviewsList;
