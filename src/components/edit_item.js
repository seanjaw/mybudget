import React, { Component } from 'react';
import {connect} from 'react-redux';


class EditItem extends Component {
   
       state = {
            description: '',
            category: '',
            value: '',
            date: ''
    
        }
  
  
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.add(this.state);
        this.resetForm();
    }

    handleKeyPress = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    resetForm = () => {
        this.setState({
            description: '',
            category: '', 
            value: '',
            date: ''
        });

    }


    editForm = () =>{
        this.setState({
            description: 'description',
            category: 'rofl',
            value: 1,
            date: 'haha'
        });

    }

    render() {
        const { description, category, value, date } = this.state;
        console.log('row props:', this.props);
        return (
          
                            <form onSubmit={this.handleSubmit}>
                                <div className="row form-margins">
                                    <div className="col input-field s10 offset-s1">
                                        <i className="material-icons prefix">label</i>
                                        <input onChange={this.handleKeyPress} name="description" type="text" id="description" value={description} />
                                        <label htmlFor="description">Description</label>
                                    </div>
                                </div>
                                <div className="row form-margins">
                                <div className="col input-field s10 offset-s1">
                                        <i className="material-icons prefix">list</i>
                                        <input onChange={this.handleKeyPress} name="category" type="text" id="category" value={category} />
                                        <label htmlFor="description">Category</label>
                                    </div>
                                </div>
                                <div className="row form-margins">
                                <div className="col input-field s10 offset-s1">
                                        <i className="material-icons prefix">attach_money</i>
                                        <input onChange={this.handleKeyPress} name="value" type="number" id="value" value={value} />
                                        <label htmlFor="value">Value</label>
                                    </div>
                                </div>
                                <div className="row form-margins">
                                <div className="col input-field s10 offset-s1">
                                        <i className="material-icons prefix">date_range</i>
                                        <input onChange={this.handleKeyPress} name="date" type="text" id="date" value={date} />
                                        <label htmlFor="description">Date</label>
                                    </div>
                                </div>

                                <div className="row">
                                   
                                    <div className="col s12 center">
                                        <button className="btn-large waves-effect waves-light btn black">edit</button>
                                    </div>
                                </div>
                            </form>
        )
    }
}

function mapStatetoProps(state){
    return {
        rowinfo: state.row.rowReducer
    }
}

export default connect(mapStatetoProps)(EditItem); 