const todoReducer = (state = [], action) => {
    if (action.type === "ADD_ITEM")
        return [...state, action.payload];
    if (action.type === "REMOVE_ITEM")
        return state.filter((item, index) => index !== action.payload);
    if (action.type === "LOAD_TODO") {
        return action.todos;
    }
    if (action.type === "ITEM_CHECKED") {
        const newState = [...state]
        newState[action.payload].completed = true
        return newState
    }
    return state;
};

export default todoReducer;