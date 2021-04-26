let Search = (state = [], action) => {
   switch(action.type) {
        case 'ADD_RESULTS':
            return state.concat(action.payload);
        default:
            return state;    
    }
    
    
}

export default Search;