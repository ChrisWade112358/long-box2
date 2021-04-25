let Search = (state = [], action) => {
   switch(action.type) {
        case 'ADD_RESULTS':
            return Object.assign({}, state, {result: action.payload})
        default:
            return state;    
    }
    
    
}

export default Search;