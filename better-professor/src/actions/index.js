import axiosWithAuth from "../utils/axiosWithAuth";

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE'

export const fetchStudents = () => dispatch => {
    const id = localStorage.getItem('id')
    dispatch({type: START_FETCHING})
    axiosWithAuth()
    .get(`https://better-professor-back-end.herokuapp.com/students/user/${id}`)
    .then(response => {
        dispatch({type: FETCH_SUCCESS, payload: response.data})
    })
    .catch(err => dispatch({type: FETCH_FAILURE, payload: err.response}))
}

export const deleteStudent = () => dispatch => {
    const id = localStorage.getItem('id')
    dispatch ({type: DELETE_USER_START})
    axiosWithAuth() 
    .delete(`https://better-professor-back-end.herokuapp.com/students/${id}`)
    .then(console.log('deleted user'))
    .catch(err => dispatch({type: DELETE_USER_FAILURE, payload: err.response}))
}



// export const fetchAssignments = () => dispatch => {
//     const id = props.match.params.id
//     dispatch({type: START_FETCHING})
//     axiosWithAuth()
//     .get(`https://better-professor-back-end.herokuapp.com/projects/students/${id}`)
//     .then(response => {
//         dispatch({type: FETCH_SUCCESS, payload: response.data})
//     })
//     .catch(err => dispatch({type: FETCH_FAILURE, payload: err.response}))

// }