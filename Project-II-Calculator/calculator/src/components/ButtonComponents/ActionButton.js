import React from 'react';
import './Button.css';

const ActionButton = (props) =>  {
    return(
        <div className = "ActionButton">
            {props.action}
        </div>
    );
}
export default ActionButton;