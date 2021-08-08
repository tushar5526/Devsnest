const addItem = (item) => {
    return {
        payload: item,
        type: "ADD_ITEM",
    };
}

const removeItem = (id) => {
    return {
        type: "REMOVE_ITEM",
        payload: id
    }
}

const itemChecked = (id) =>{
    return {
        type:"ITEM_CHECKED",
        payload: id
    }
}


const loadTodo = (url) => {
    return (dispatch) => {
        fetch(url)
        .then((res) => res.json())
        .then((todos) => {
            return dispatch({
                type: "LOAD_TODO",
                todos: todos.splice(0,5)
            })
        });
    }
}

export { addItem, removeItem, loadTodo, itemChecked };