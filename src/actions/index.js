import listData from '../dummyData/get_total';


 export function editItem(id){
     const indexToEdit = listData.findIndex((item)=>{
         return item.id === id;
     });
     console.log("this is my action");
    //  return this.state.list[indexToEdit];
    // const response = listData[indexToEdit];
    
    return {
        type: 'GET_STUDENT_INFO',
        payload: response
    }
 }
