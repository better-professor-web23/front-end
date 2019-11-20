import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, DELETE_USER_START, DELETE_USER_SUCCESS, DELETE_USER_FAILURE } from "../actions/";

const initialState = {
    students: [],
    assignments: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    console.log('reducer goes BAM', action );
    switch(action.type){
        case START_FETCHING:
            return {
                ...state, 
                isFetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false, 
                error: '',
                students: action.payload
            }

        case FETCH_FAILURE: 
            return {
                ...state, 
                error: action.payload,
                isFetching: false
            }
        case DELETE_USER_START:
            return {
                ...state,
                isFetching: true,
                error: ''    
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: ''
            }
        case DELETE_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }
        default: 
            return state;
    }
}
