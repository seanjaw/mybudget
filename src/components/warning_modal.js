import React, {Component} from 'react';

class WarningModal extends Component{

    componentDidMount(){
        var instance = M.Modal.init(this.warningModalInstance, {
            opacity:0.5,
            onCloseStart: this.props.closeWarningModal
        })
        instance.open();
    }
   

    render(){
        return (
            <div>
                <div ref={(element)=>{this.warningModalInstance =element}} id="modal1" className= "modal modal-dsplay" >
                    <span className="close" onClick={this.props.closeWarningModal}>&times;</span>
                    <div className="modal-content">
                    <div className="row">
                        <div className = "center"> This site is accessible to the public. Do not put any sensitive information inside the budgeter!</div>
                    </div>
                     
                       <div className="row">
                                    <div className="col s12 center">
                                        <button type="button" className=" btn-small btn waves-effect waves-light btn black" onClick={()=>{this.props.closeWarningModal()}}>OK</button>
                                    </div>
                
                        </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}


export default WarningModal; 