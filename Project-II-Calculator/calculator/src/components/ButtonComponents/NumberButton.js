import React from 'react';
import './Button.css';

const NumberButton = (props) =>  {
    return(
        <div className = "NumberButton">
            {props.num}
        </div>
    );
};

export default NumberButton;