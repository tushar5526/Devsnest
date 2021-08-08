import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, loadTodo } from "../actions";
import { Input, Button, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        "& > *":{
            margin: "5px"
        }
    },
});

const AddTodo = () => {
    const [item, setItem] = useState("");
    const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <Box mt={3} className={classes.root}>
            <Input type="text" placeholder="Add a todo..." value={item} onChange={(e) => setItem(e.target.value)} />
            <Button variant="outlined" color="primary" onClick={() => {
                dispatch(addItem({
                    title: item,
                    completed: false
                }));
                setItem('');
            }}>Add</Button>
            <div>
                {/* <Button variant="outlined" color="primary" onClick={() => { dispatch(loadTodo('https://jsonplaceholder.typicode.com/todos/')) }}>Load Todo</Button> */}
            </div>
        </Box>
    )
}

export default AddTodo;