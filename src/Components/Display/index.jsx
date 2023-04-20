import PropTypes from 'prop-types';
import './styles.css';

export const Display = ({ counter }) => {
    return <h1 className="display">{counter}</h1>;
};

Display.propTypes = {
    counter: PropTypes.number,
};
