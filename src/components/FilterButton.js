import React from "react";
import Zoom from "react-reveal/Zoom";

const FilterButton = props => (
    <Zoom duration={600}>
        <div className="filter-button">
            <div className="button filter-button__text">{props.text}</div>
            <div className="filter-button__x" onClick={() => props.clicked(props.text)}>
                <img className="filter-button__icon" src="./images/icon-remove.svg" alt="icon-remove" />
            </div>
        </div>
    </Zoom>
)

export default FilterButton;