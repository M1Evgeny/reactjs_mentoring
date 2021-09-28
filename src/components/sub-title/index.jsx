import React from 'react';
import PropTypes from 'prop-types';
import './SubTitle.css';

export const SubTitle = (props) =>{
return (
    <div className="sub-title">
      <b>{props.movieListLength}</b> movie{props.movieListLength > 1 ? 's' : ''} found
    </div>
)
};


SubTitle.propType = {
  movieListLength: PropTypes.number
}
