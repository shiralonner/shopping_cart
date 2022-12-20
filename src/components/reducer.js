
function Reducer(state = [], action) {

switch (action.type) {
case "ADD":
return [...state, action.payload]
case "DELETE":
    let indexUser = state.findIndex(u => u.id === action.payload.id)
            state.splice(indexUser, 1)
            return [...state]
default:
return state;
}

}
export default Reducer
