import React, {Component} from 'react';
// import EditItem from './edit_item';
import AddItem from './add_item';


class EditModal extends Component {
    componentDidMount(){
        var instance = M.Modal.init(this.editModalInstance);
         console.log('modal is mounted', this.state)
        instance.open();
    
    }
    render(){
        return (
            <div>
                <div ref={(element)=>{this.editModalInstance =element}} id="modal1" className= "modal modal-dsplay" >
                    <span className="close" onClick={this.props.closeModal}>&times;</span>
                    <div className="modal-content">
                        <AddItem/>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditModal; 