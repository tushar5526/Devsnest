import '../styles.css';
import Card from './Card';
import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { nanoid } from 'nanoid';

function InputNewCard({ data, setData }) {

    const [cals, setCals] = useState(0);
    const [name, setName] = useState("Food Item")
    function addCard() {
        const newData = [...data, { "cals": cals, "name": name, "id": nanoid() }]
        setData(newData);
    }

    function nameChangeHandler(event) {
        setName(event.target.value);
    }

    function calsChangeHandler(event) {
        setCals(event.target.value);
    }

    return (
        <div>
            <TextField variant="outlined" onChange={nameChangeHandler} label="Food Item" type="text" />
            <TextField variant="outlined" onChange={calsChangeHandler} label="Calories" type="number" />
            <Button variant="contained" onClick={addCard}>Add</Button>
        </div>
    )
}

function Container() {
    const [data, setData] = useState([]);
    return (
        <div className="container">
            <InputNewCard data={data} setData={setData} />
            {
                data.map((ele, index) => {
                    return <Card key={ele.id} setData={setData} cals={ele.cals} name={ele.name} index={index} data={data} />
                })
            }
        </div>
    );

}

export default Container;