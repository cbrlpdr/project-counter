import './styles.css';
import PropTypes from 'prop-types';

export const Description = ({ version }) => {
    return (
        <div className="description">
            <h2>Just a simple counter with React.JS</h2>
            <h4>v{version}</h4>
        </div>
    );
};

Description.propTypes = {
    version: PropTypes.string,
};
