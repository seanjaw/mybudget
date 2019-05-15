import types from '../actions/types';

function deleteReducer(state= null,action){
    switch(action.type){
        case types.DELETE_STUDENT_INFO:
            return action.payload;
        default:
            return state; 
    }
}

export default deleteReducer;