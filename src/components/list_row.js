import React from 'react';

const ListRow = (props) => {
   const {description, value, id, category, date } = props.list
    return(
        <tr className="yellow lighten-5">
            <td>{description}</td>
            <td>{category}</td>
            <td>{value}</td>
            <td>{date}</td>
            <td><a className="btn-floating btn waves-effect waves-light black"><i className="material-icons" onClick={()=>{props.openModal()}} >edit</i></a></td>
            <td><a className="btn-floating btn waves-effect waves-light black"><i className="material-icons" onClick={()=>{props.delete(id)}} >delete</i></a></td>

        </tr>
        
    )
}

export default ListRow;