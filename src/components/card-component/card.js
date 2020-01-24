import React, { useState } from 'react';

function Card({ dataOrg }) {
    const [data, setData] = useState(dataOrg);
    return (<div className={"flex center-between card" + (data.selected ? " active" : "")} onClick={() => {
        data.selected = !data.selected;
        setData(data);
    }}>
        <div>{data.category}</div>
        <div>{data.date}</div>
        <div>{data.sum}</div>
        <div>{data.type}</div>
    </div>)
}

export default Card;