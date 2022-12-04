const initState = {
    users: [
        { id: 1, name: 'dieutrinh'},
        { id: 2, name: 'naibee'}
    ],
    posts: []
}
//state là trạng thái của redux (nơi lưu trữ data của redux), không phải của react
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('run into delete user: ', action);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id);
            return {
                ...state, users
            };
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10000)
            let user = { id: id, name: `random - ${id}`}
            return {
                ...state, users: [...state.users, user]
            };
        default: 
            return state;
    }
    
}

export default rootReducer;