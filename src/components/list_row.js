import React from 'react';

const ListRow = (props) => {
    // console.log(props)
   const {description, value, id } = props.list
    return(
        <tr>
            <td>{description}</td>
            <td>{value}</td>
            <td>
                <div className="row">
                    <div className="center col s3 offset-s3">
                        {/* <button className="btn btn-small green darken-2">Edit</button> */}
                        <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                    </div>

                    <div className="center col s3">
                        <button onClick={()=>{props.delete(id)}} className="btn btn-small red darken-2">Delete</button>
                    </div>
                </div>
               
               
                
            </td>
        </tr>
    )
}

export default ListRow;