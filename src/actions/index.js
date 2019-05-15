 export function editItem(item){
    
    return {
        type: 'EDIT_STUDENT_INFO',
        payload: item
    }
 }

export function deleteItem(item){

    return {
        type: 'DELETE_STUDENT_INFO',
        payload: item
    }
}
 

 