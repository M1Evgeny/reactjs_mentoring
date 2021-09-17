import React from 'react';
import PropTypes from 'prop-types';

const SubTitle = ({ text }) => {
  return (
    <div >
      {text}
    </div>
  )
}

SubTitle.propType = {
  found: PropTypes.string
}

export default SubTitle;
