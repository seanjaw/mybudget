import React from 'react';
import ListRow from './list_row';




const Table = (props) =>{
    const listRows = props.list.map((item) => {
        return <ListRow edit={props.editItem} delete = {props.deleteItem}  openDeleteModal = {props.openDeleteModal} openModal = {props.openEditModal} closeModal = {props.closeEditModal} key={item.id}list={item}/>
     }); 
    
     return (
         
                 <table className= "highlight table-margin">
                     <thead className= "teal lighten-1 white-text">
                         <tr>
                             <th>Name</th>
                             <th>Category</th>
                             <th>Value</th>
                             <th>Date</th>
                             <th>Operations</th>
                
                         </tr>
                     </thead>
                     <tbody>
                        {listRows}
                     </tbody>
                 </table>

     )

}
    
export default Table;