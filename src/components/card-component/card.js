import React, { useState } from 'react';
import { IoIosBrush } from "react-icons/io";

function Card({ data }) {
    const [selected, setselected] = useState(false);
    function divDescription() {
        if (selected)
            return <div className="card-description">
                <div>{data.description}</div>
                <div className=""><button className="button-edit"><IoIosBrush /></button></div>
            </div>
    }

    return (<div className={"card" + (selected ? " active" : "")}>
        <div className="flex center-between top-card" onClick={() => { setselected(!selected); }}>
            <div>{data.category}</div>
            <div>{data.date}</div>
            <div>{data.sum}</div>
            <div>{data.type}</div>
        </div>
        {divDescription()}
    </div>)
}

export default Card;