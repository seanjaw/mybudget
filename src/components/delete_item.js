import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../actions';
import axios from 'axios';


class DeleteItem extends Component{

    state = {
        description: '',
        category: '',
        value: '',
        date: ''

    }
    componentDidMount(){
        this.setState(this.props.info);   
    }

}

const mapStateToProps = state => {
	console.log("STATE", state.edit)
  return {
    info: state.edit
  }
} 

export default connect(mapStateToProps, {
  deleteItem
})(DeleteItem);