import React from 'react';

const ListRow = (props) => {
   const {description, value, id } = props.list
    return(
        <tr>
            <td>{description}</td>
            <td>{value}</td>
            <td className='center'>
                <button onClick={()=>{props.delete(id)}} className="btn btn-small red darken-2">Delete</button>
            </td>
        </tr>
    )
}

export default ListRow;