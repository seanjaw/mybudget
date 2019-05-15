import React, {Component} from 'react';
import EditItem from './edit_item';

class EditModal extends Component {
   
    
    componentDidMount(){
        var instance = M.Modal.init(this.editModalInstance, {
            opacity:0.5,
            onCloseStart: this.props.closeModal
        })
        instance.open();
    }
   
    render(){
        
        return (
            <div>
                <div ref={(element)=>{this.editModalInstance =element}} id="modal1" className= "modal modal-dsplay" >
                    <span className="close" onClick={this.props.closeModal}>&times;</span>
                    <div className="modal-content">
                        <EditItem refreshAfterEdit ={this.props.editItem} closeModal={this.props.closeModal}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditModal; 