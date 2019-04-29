import React from 'react';
import { connect } from 'react-redux';
import { editItem } from '../actions';

const ListRow = (props) => {
   const {description, value, id, category, date } = props.list
   const editItem = () => {
    props.editItem(id);
    }
    return(
        <tr className="yellow lighten-5">
            <td>{description}</td>
            <td>{category}</td>
            <td>{value}</td>
            <td>{date}</td>
            <td><a className="btn-floating btn waves-effect waves-light black"><i className="material-icons" onClick={()=>{editItem(id); props.openModal();}} >edit</i></a></td>
            <td><a className="btn-floating btn waves-effect waves-light black"><i className="material-icons" onClick={()=>{props.delete(id)}} >delete</i></a></td>
        </tr>
        
    )
}

const mapStateToProps = state => {
	// console.log("STATE", state.row)
  return {
    info: state.row
  }
} 

export default connect(mapStateToProps, {
  editItem
})(ListRow);





