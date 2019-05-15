import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deleteItem } from '../actions';
import { editItem } from '../actions';

class DeleteModal extends Component {
    
    state = {
        description: '',
        category: '',
        value: '',
        date: ''

    }

    componentDidMount(){
        this.setState(this.props.info)
        console.log('this is props.info', this.props.info)
        var instance = M.Modal.init(this.deleteModalInstance, {
            opacity:0.5,
            onCloseStart: this.props.closeDeleteModal
        })
        instance.open();
    }
  
   
    

    render(){
        console.log('this is state.edit', this.state.edit)
        return (
            <div>
                <div ref={(element)=>{this.deleteModalInstance =element}} id="modal1" className= "modal modal-dsplay" >
                    <span className="close" onClick={this.props.closeDeleteModal}>&times;</span>
                    <div className="modal-content">
                    <div className="row">
                        <div className = "center"> Are you sure you would like to delete?</div>
                    </div>
                     
                       <div className="row">
                                    <div className="col s6 center">
                                        <button onClick={this.resetForm} type="button" className=" btn-small btn waves-effect waves-light btn black" onClick={()=>{this.props.closeDeleteModal()}}>No</button>
                                    </div>
                                    <div className="col s6 center">
                                        <button className="btn-small btn waves-effect waves-light btn black" onClick={()=>{this.props.deleteItem(this.props.info.id)}}>Yes</button>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
	console.log("STATE", state.edit)
  return {
    info: state.edit
  }
} 

export default connect(mapStateToProps, {
  editItem
})(DeleteModal);
