import React from "react";

const Button = props => (
    <div className="button" onClick={() => props.clicked(props.text)}>
        {props.text}
    </div>
)

export default Button;