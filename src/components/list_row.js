import React from 'react';

const ListRow = (props) => {
   const {item, value} = props.list
    return(
        <tr>
            <td>{item}</td>
            <td>{value}</td>
        </tr>
    )
}

export default ListRow;