import React from "react";

const Spinner = (props) => {
    return (
            <div className="ui active dimmer">
                <div className="ui text loader">{props.message}</div>
            </div>
    );
};

// Add default props, just in case null
Spinner.defaultProps = {
    message: "Loading..."
}

export default Spinner;