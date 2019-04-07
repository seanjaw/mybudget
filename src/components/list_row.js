import React from 'react';

const ListRow = (props) => {
    // console.log(props)
    console.log(props.list)
   const {description, value, id, category, date } = props.list
    return(
        <tr>
            <td>{description}</td>
            <td>{category}</td>
            <td>{value}</td>
            <td>{date}</td>
            <td><a className="btn-floating btn waves-effect waves-light black"><i className="material-icons" onClick={()=>{}} >edit</i></a></td>
            <td><a className="btn-floating btn waves-effect waves-light black"><i className="material-icons" onClick={()=>{props.delete(id)}} >delete</i></a></td>
 

        </tr>
    )
}

export default ListRow;