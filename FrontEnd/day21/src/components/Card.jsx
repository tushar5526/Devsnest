import "../styles.css";
import { Button, Input } from '@material-ui/core';
import { useState } from 'react';

function Edit({ cals, name, data, index, setData, setEditMode }) {

    const [editCals, setEditCals] = useState(cals);
    const [editName, setEditName] = useState(name);

    function editDone() {
        const newData = data.filter((ele, id) => {
            if (id === index) {
                ele.cals = editCals;
                ele.name = editName;
            }
            return ele;
        })
        setData(newData);
        setEditMode(false);
    }

    function handleCalsChange(event) {
        setEditCals(event.target.value);
    }
    function handleNameChange(event) {
        setEditName(event.target.value);
    }
    return (
        <div className="card">
            <Input type="text" onChange={handleNameChange} label="Food Item" value={editName} />
            <Input type="number" onChange={handleCalsChange} label="Calories" value={editCals} />
            <Button variant="contained" onClick={editDone}>Done</Button>
        </div>
    )
}

function Card({ cals, name, data, setData, index }) {
    const [editMode, setEditMode] = useState(false)
    if (!editMode) {
        return (
            <div className="card">
                <div>Consumed {name} with {cals}</div>
                <Button variant="contained" color="primary" onClick={() => {
                    setEditMode(true);
                }}>Edit</Button>

                <Button variant="contained" color="secondary" onClick={() => {
                    const newData = data.filter((ele, id) => index !== id)
                    setData(newData);
                }}>Delete</Button>
            </div>
        )
    }
    return (
        <Edit cals={cals} name={name} data={data} index={index} setData={setData} setEditMode={setEditMode} />
    )

}

export default Card;