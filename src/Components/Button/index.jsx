import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const Button = React.memo(function Button({ fn }) {
    return (
        <button className="button" onClick={() => fn(2)}>
            Clique
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
});

Button.propTypes = {
    fn: PropTypes.func,
};
