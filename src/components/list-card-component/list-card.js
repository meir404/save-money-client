import React, { useState } from 'react';
import Card from '../card-component/card'
import ListHeader from '../list-header-component/list-header'

function ListCard() {
    const orgData = [
        { id: 1, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 2, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 3, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 4, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 5, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 6, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 7, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 8, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 9, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 10, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 11, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 12, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 13, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 14, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 15, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 16, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 17, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 18, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 19, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 20, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 21, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
        { id: 22, type: "income", date: "20/12/2019", sum: "152.5", category: "fuel" },
    ];
    const [data, setData] = useState(orgData);

    return (<>
        <div className="list-card-container">
            <ListHeader />
            <div className="cards">
                {data.map((d, i) => <Card key={d.id} dataOrg={d} />)}
            </div>
        </div>
    </>);
}

export default ListCard;