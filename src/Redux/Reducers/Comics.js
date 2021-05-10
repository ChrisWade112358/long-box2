let Comics = (state = [], action) => {
    
    let index;
    let comic;
   switch(action.type) {
        case 'ADD_RESULTS':
            comic = {...action.payload, likes: 0} 
            return state.concat(comic);
/*added like checkbox that updates when checked. If you dont pause 
during the reducer before comic is initialized it will give an error but 
works if you puase using break points in dev tools. Otherwise you get an 
error cannot access comic before initialized." can't figure out error" */
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