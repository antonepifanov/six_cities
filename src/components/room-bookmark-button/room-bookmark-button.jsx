import React, {useState} from 'react';
import {AUTHORIZATION_STATUS, FETCH_STATUS} from '../../constants/constants';
import browserHistory from '../../services/browser-history';
import {BOOLEAN_TYPES, HANDLER_TYPES, NUMBER_TYPES, STRING_TYPES} from '../../prop-types/prop-types';
import {connect} from 'react-redux';
import {changeFetchStatus} from '../../store/action';
import {sendFavoriteStatus} from '../../store/api-actions';

const RoomBookmarkButton = ({id, authorizationStatus, onFavoriteStatusClick, isFavorite}) => {
  const [isFavoriteClass, setIsFavoriteClass] = useState(isFavorite);
  const handleFavoriteClick = () => {
    if (authorizationStatus === AUTHORIZATION_STATUS.NO_AUTH) {
      browserHistory.push(`/login`);
    } else {
      const isFavoriteCard = Number(!isFavorite);
      onFavoriteStatusClick(id, isFavoriteCard);
      setIsFavoriteClass(!isFavoriteClass);
    }
  };

  return <button className={`property__bookmark-button button ${isFavoriteClass ? `property__bookmark-button--active` : ``}`}
    type="button"
    onClick={handleFavoriteClick}
  >
    <svg className="property__bookmark-icon" width="31" height="33">
      <use xlinkHref="#icon-bookmark"></use>
    </svg>
    <span className="visually-hidden">To bookmarks</span>
  </button>;
};

RoomBookmarkButton.propTypes = {
  id: NUMBER_TYPES,
  authorizationStatus: STRING_TYPES,
  onFavoriteStatusClick: HANDLER_TYPES,
  isFavorite: BOOLEAN_TYPES,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteStatusClick(id, isFavoriteCard) {
    dispatch(sendFavoriteStatus(id, isFavoriteCard));
    dispatch(changeFetchStatus(FETCH_STATUS.SENDING));
  },
});

export {RoomBookmarkButton};
export default connect(mapStateToProps, mapDispatchToProps)(RoomBookmarkButton);
