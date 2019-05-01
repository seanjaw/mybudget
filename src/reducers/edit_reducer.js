import types from '../actions/types';



function editReducer(state= null,action){
    switch(action.type){
        case types.EDIT_STUDENT_INFO:
            return action.payload;
        default:
            return state; 
    }
}


export default editReducer;