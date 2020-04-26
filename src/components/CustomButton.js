import React from 'react';

const CustomButton = (props) => {

    const handleButton = props.action;

    return (
        <button onClick={handleButton}>{props.label}</button>
    );
}

export default CustomButton;
