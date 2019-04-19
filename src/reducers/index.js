import { combineReducers} from 'redux';
import rowReducer from './row_reducer';
 
//State:

// const exampleState= {
//         row: {
//             description: '',
//             category: '',
//             value: '',
//             date: ''
//         }
//     }


const rootReducer = combineReducers({
    row: rowReducer
});  


export default rootReducer;