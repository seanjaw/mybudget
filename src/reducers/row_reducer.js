import types from '../actions/types';
const DEFAULT_STATE={
    description: 'sean',
    category: 'is',
    value: 'a',
    date: 'test'
};


function rowReducer(state= DEFAULT_STATE,action){
    switch(action.type){
        case "GET_STUDENT_INFO":
            return action.payload;
        default:
            return state; 
    }
}


export default rowReducer;