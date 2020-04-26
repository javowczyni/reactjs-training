import React from 'react';

const Console = (props) => {
    const handleLogButton = () => console.log("logging");
    return (
        <button onClick={handleLogButton}>{props.loginButtonLabel}</button>
    )
};

export default Console;
