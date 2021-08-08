import { useSelector } from "react-redux";
import { removeItem, itemChecked } from "../actions";
import { useDispatch } from "react-redux";
import { Checkbox, FormControlLabel, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        "& *": {
            marginLeft: "3px",
            textAlign: "left"
        }
    },
    checked: {
        textDecoration: "line-through",
    }
});



const ListTodo = () => {
    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Box mt={3} className={classes.root}>
            {
                todos.map((todo, index) => (
                    <div key={index}>
                        <FormControlLabel style={{ textDecoration : todo.completed ? 'line-through' : 'none' }}
                            control={<Checkbox checked={todo.done} onChange={() => { dispatch(itemChecked(index)) }} />}
                            // label={todo.done ? `<strike>todo.title</strike>` : todo.title}
                            label={todo.title}
                        />
                        <Button variant="outlined" color="secondary" onClick={() => {
                            dispatch(removeItem(index))
                        }}>Delete</Button>
                    </div>
                ))
            }
        </Box>

    )
}

export default ListTodo;