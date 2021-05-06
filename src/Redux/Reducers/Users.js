let Users = (state = [], action) => {
    let index;
    let user;
    switch(action.type) {
        case 'ADD_USER':
            return state.concat(action.payload);
        case 'DELETE_USER':
            return state.filter(user => user.id !== action.userId);
           
        case 'EDIT_USER':
            index = state.findIndex(user => user.id === action.user.id);
             user = state[index];
            
            return [
                ...state.slice(0, index),
                Object.assign({}, user, action.user),
                ...state.slice(index + 1)

            ];
        default:
            return state;    
    }
    
    
}

export default Users;