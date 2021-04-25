let Search = (state = [], action) => {
    let index;
    let user;
    let message = console.log("I'm in User");
    switch(action.type) {
        case 'ADD_RESULTS':
            return {
                ...state,
                attributionHTML: [action.payload.attributionHTML],
                attributionText: [action.payload.attributionText],
                copyright: [action.payload.copyright],
                results: [action.payload.data.results]
            };
        default:
            return state;    
    }
    
    
}

export default Search;