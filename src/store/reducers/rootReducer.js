import {Switch} from "react-router-dom";

const initState = {
    users: [
        {id: 1, name: 'Eric'},
        {id: 2, name: 'Hoi Dan IT'},
        {id: 3, name: 'Hoi Dan IT voi ERIC'}
    ]
}

const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'DELETE_USER':
            console.log('run into delete user: ' + JSON.stringify(action))
            let users = state.users
            users = users.filter(item => item.id !== action.payload.id)
            return {...state, users};
        case 'CREATE_USER':
            console.log('run into create user: ' + JSON.stringify(action))
            let id = Math.floor(Math.random() * 10000);
            let user = {id: id, name: `random - ${id}`}
            return {
                ...state, users: [...state.users, user]
            };
        default:
            return state;
    }

}

export default rootReducer;