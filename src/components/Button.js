import React from "react";

const Button = () => {
    const refreshFunction = () => {
        window.location.reload(false);
    };
    return (
        <button onClick={refreshFunction} className="btn btn-warning btn-large">
            Choose!
        </button>
    );
};

export default Button;
