import React, { PropTypes } from 'react';
import Greet from './Greet';

const App = ({name}) => (
    <div>
        <div className="greet">Some <span>other</span> text</div>
        <Greet name={name}/>
    </div>
);

App.propTypes = {
    name: PropTypes.string
};

export default App;