import React from 'react';
import PropTypes from 'prop-types';

import './BookingListItem.scss';

const BookingListItem = ({time, owner, game}) => {
  return (
    <div className="BookingListItem">
      <span className="BookingListItem--time">{time}</span>
      <span className="BookingListItem--owner">{owner}</span>
      <span className="BookingListItem--game">{game}</span>
      <span className="BookingListItem--edit-button">EDIT</span>
    </div>
  );
};

BookingListItem.PropTypes = {
  time: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  game: PropTypes.string.isRequired
};

export default BookingListItem;