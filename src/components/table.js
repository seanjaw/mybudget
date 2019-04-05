import React from 'react';
import ListRow from './list_row';
const Table = (props) =>{
    
    let accumulator = 0;
    const listRows = props.list.map((item) => {
        accumulator += item.value; 
        return <ListRow delete = {props.deleteItem} key={item.id}list={item}/>
        
     }); 
    
     return (
         
                 <table className= "highlight">
                     <thead className= "yellow lighten-1">
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
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td></td>
                            <td>{accumulator}</td>
                        </tr>
                    </tfoot>
                 </table>

     )

}
    
export default Table; 