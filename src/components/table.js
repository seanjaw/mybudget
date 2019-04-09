import React from 'react';
import ListRow from './list_row';
const Table = (props) =>{
    
    const listRows = props.list.map((item) => {
        return <ListRow delete = {props.deleteItem} key={item.id}list={item}/>
     }); 
    
     return (
         
                 <table className= "highlight table-margin">
                     <thead className= "teal lighten-1 white-text">
                         <tr>
                             <th>Description</th>
                             <th>Category</th>
                             <th>Value</th>
                             <th>Date</th>
                             <th>Edit</th>
                             <th>Delete</th>
                         </tr>
                     </thead>
                     <tbody>
                        {listRows}
                     </tbody>
                 </table>

     )

}
    
export default Table; 