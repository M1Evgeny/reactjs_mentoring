import React from 'react';
import './Logo.css';
import PropTypes from 'prop-types';

export const Logo = (props) => {
    return (
        <div className={`${ props.styleName }`}><b>netflix</b>roulette</div>
    )
}

Logo.propTypes = {
    styleName: PropTypes.oneOf(['header-logo', 'footer-logo'])
}
