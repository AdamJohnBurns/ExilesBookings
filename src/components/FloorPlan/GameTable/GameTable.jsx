import React from 'react';
import PropTypes from 'prop-types';

import BookingList from './BookingList/BookingList.jsx';

import './GameTable.scss';

const GameTable = ({name}) => {
  return (
    <div className="GameTable">
      <div className="GameTable--name">{name}</div>
      <div className="GameTable--add-button">+BOOK</div>
      <BookingList />
    </div>
  );
};

GameTable.PropTypes = {
  name: PropTypes.string.isRequired
};

export default GameTable;