import React from 'react';
import { connect } from 'react-redux';
import { editItem } from '../actions';
import edit_item from './edit_item';

const ListRow = (props) => {
   const {description, value, id, category, date } = props.list
   const editItem = () => {
    props.editItem({description, value, id, category, date } );
    }
    return(
        <tr className="yellow lighten-5">
            <td>{description}</td>
            <td>{category}</td>
            <td>{parseFloat(value).toFixed(2)}</td>
            <td>{date}</td>
            <td>
              <a className="btn-floating btn waves-effect waves-light black btn-small operation-button-margin"><i className="material-icons" onClick={()=>{editItem(); props.openModal(props.list.id);}} >edit</i></a>
              <a className="btn-floating btn waves-effect waves-light black btn-small"><i className="material-icons" onClick={()=>{editItem(); props.openDeleteModal(props.list.id)}} >delete</i></a>
            </td>
            
        </tr>
        
    )
}

const mapStateToProps = state => {
	// console.log("STATE", state.row)
  return {
    info: state.edit
  }
} 

export default connect(mapStateToProps, {
  editItem
})(ListRow);





