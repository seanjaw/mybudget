import types from '../actions/types';
const DEFAULT_STATE={
    description: '',
    category: '',
    value: '',
    date: ''
};


function rowReducer(state= DEFAULT_STATE,action){
    switch(action.type){
        default:
            return state; 
    }
}


export default rowReducer;