import React from 'react';
import { connect } from 'react-redux';
import { editItem } from '../actions';

const ListRow = (props) => {
   const {description, value, id, category, date } = props.list
   const editItem = () => {
    props.editItem({description, value, id, category, date } );
    }
    return(
        <tr className="yellow lighten-5">
            <td>{description}</td>
            <td>{category}</td>
            <td>{value}</td>
            <td>{date}</td>
            <td>
              <a className="btn-floating btn waves-effect waves-light black btn-small operation-button-margin"><i className="material-icons" onClick={()=>{editItem(); props.openModal(props.list.id);}} >edit</i></a>
              <a className="btn-floating btn waves-effect waves-light black btn-small"><i className="material-icons" onClick={()=>{props.delete(id)}} >delete</i></a>
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





