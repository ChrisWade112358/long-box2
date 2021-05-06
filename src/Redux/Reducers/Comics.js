let Comics = (state = [], action) => {
    
    let index;
    let comic;
   switch(action.type) {
        case 'ADD_RESULTS':
            let comic = {...action.payload, likes: 0} 
            return state.concat(comic);
        case 'LIKE_COMIC':
            index = state.findIndex(com => com.id === parseInt(action.comicId));
            comic = state[index]; 
            return [
                ...state.slice(0, index),
                Object.assign({}, comic, {likes: comic.likes += 1}),
                ...state.slice(index + 1)
            ];
        case 'DISLIKE_COMIC':
            index = state.findIndex(com => com.id === parseInt(action.comicId));
            comic = state[index]; 
            return [
                ...state.slice(0, index),
                Object.assign({}, comic, {likes: comic.likes -= 1}),
                ...state.slice(index + 1)
            ];
        default:
            return state;
        

    }
    
    
}

export default Comics;