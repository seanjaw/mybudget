import React from 'react';
import ListRow from './list_row'


const Table = (props) =>{
    const listRows = props.list.map((list) => {
        return <ListRow delete = {props.deleteItem} key={list.id}list={list}/>
     });
     return (
         
                 <table>
                     <thead>
                         <tr>
                             <th>description</th>
                             <th>value</th>
                             <th>actions</th>
                         </tr>
                     </thead>
                     <tbody>
                        {listRows}
                     </tbody>
                 </table>

     )

}
    

    
export default Table; 