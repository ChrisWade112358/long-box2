let Collection = (state = [], action) => {
    let index;
    let user;
    switch(action.type) {
        case 'ADD_COMIC_TO_COLLECTION':
            return state.concat(action.payload);
        case 'DELETE_COMIC':
            return state.filter(comic => comic.id !== action.id);
        default:
            return state;    
    }
}
