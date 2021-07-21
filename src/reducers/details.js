import {
    LOGIN_USER,
    GET_DETAILS,
    INVALID_LOGIN,
    LOGOUT
} from '../actions/types';

const initialState = {
    username: '',
    paswrd: '',
    isAuthenticated: '',
    userDetails: [],
    error: null
}

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case LOGIN_USER:
            return {
                ...state,
                username: payload.email,
                paswrd: payload.password,
                isAuthenticated : true,
            }
        case INVALID_LOGIN:
            return {
                ...state,
                isAuthenticated : false,
                error: 'Invalid Credentials',
                username: '',
                paswrd: '',
                }
        case GET_DETAILS:
            return {
                ...state,
                userDetails: payload
            } 
        case LOGOUT: 
           return  {
            ...state,
            username: '',
            paswrd: '',
            isAuthenticated: '',
            userDetails: [],
            error: null
           }  
        default:
            return state;                       
    }
}

