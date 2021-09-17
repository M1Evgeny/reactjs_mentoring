import React from 'react';
import './Filter.css';
import PropTypes from 'prop-types';

const Filter = ({filterMovies}) => {
    return (
        <ul className="container">
          <li className='filter-item' onClick={() => filterMovies("all")} >all</li>
          <li className='filter-item' onClick={() => filterMovies("Adventure")} >Adventure</li>
          <li className='filter-item' onClick={() => filterMovies("Drama")} >Drama</li>
          <li className='filter-item' onClick={() => filterMovies("Comedy")} >Comedy</li>
        </ul>
    )
}

Filter.prototype = {
  filterMovies: PropTypes.func
}

export default Filter;