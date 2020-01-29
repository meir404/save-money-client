import React, { useState } from 'react';
import Card from '../card-component/card'
import ListHeader from '../list-header-component/list-header'
import { IoIosAdd } from 'react-icons/io'

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

    const [showPopUp, setShowPopUp] = useState(false);
    return (<>
        <div className="list-card-container">
            <ListHeader />
            <div className="cards">
                {data.map((d, i) => <Card key={d.id} data={d} />)}
            </div>
            <button className="button-add" onClick={() => setShowPopUp(!showPopUp)}><IoIosAdd /> </button>
            {showPopUp ?
                <div className="flex center popup-register">
                    <div className="flex flex-column popup-container ">
                        <div className="flex flex center title">Add Income or expense</div>
                        <div className="flex-column center inputs-container">
                            <label>Category:</label>
                            <input type="text" className="input" placeholder="Category" />
                            <label>Date:</label>
                            <input type="date" className="input" placeholder="Date"/>
                            <label>Sum:</label>
                            <input type="number" className="input" placeholder="Sum"/>
                            <label>Details:</label>
                            <textarea type="text" rows="8"  className="textarea" placeholder="Details"/>
                        </div>
                        <div className="flex center buttons-container">
                            <button className="button" onClick={() => setShowPopUp(false)} >Ok</button>
                            <button className="button" onClick={() => setShowPopUp(false)} >Cancel</button>
                        </div>
                    </div>
                </div> : ''}
        </div>
    </>);
}

export default ListCard;