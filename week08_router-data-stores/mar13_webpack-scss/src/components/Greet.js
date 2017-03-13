import React, { PropTypes } from 'react';
import styles from './Greet.scss';

console.log(styles);

const Greet = ({name}) => (
    <div className={styles.greet}>
        Hello <span>{name}</span>
    </div>
);

Greet.propTypes = {
    name: PropTypes.string
};

export default Greet;