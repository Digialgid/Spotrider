const initialState = 0;
const changenumber = (state = initialState, action) => {
    switch (action.type) {
        case "ADDITION": return state + 1;
        case "SUBSTRACTION": return state - 1;
        default: return state;
    }
}
export default changenumber;