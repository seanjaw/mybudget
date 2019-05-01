import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editItem } from '../actions';
import axios from 'axios';
class EditItem extends Component {
    
       state = {
            description: '',
            category: '',
            value: '',
            date: ''
    
        }
    componentDidMount(){
        M.updateTextFields()    
    }
    handleSubmit = async (event) => {
        event.preventDefault();
       
        // this.resetForm();
        console.log('this was clicked')
        const editRow = await axios.post('/api/data.php?action=insert',{
            // id: this.state.id,
            description: this.state.description,
            category: this.state.category,
            value: this.state.value,
            date: this.state.date 
        })
        console.log(editRow)
        // this.props.edit()
    }

    handleKeyPress = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    // resetForm = () => {
    //     this.setState({
    //         description: '',
    //         category: '', 
    //         value: '',
    //         date: ''
    //     });

    // }

    render() {
        const { description, category, value, date } = this.props.info;
        console.log('this is state', this.state);
        console.log('this is props', this.props.info)

        return (
          
                            <form onSubmit={this.handleSubmit}>
                                <div className="row form-margins">
                                    <div className="col input-field s10 offset-s1">
                                        <i className="material-icons prefix">label</i>
                                        <input onChange={this.handleKeyPress} name="description" type="text" id="description" placeholder ={description} value ={this.state.description}/>
                                        <label htmlFor="description">Description</label>

                                    </div>
                                </div>
                                <div className="row form-margins">
                                <div className="col input-field s10 offset-s1">
                                        <i className="material-icons prefix">list</i>
                                        <input onChange={this.handleKeyPress} name="category" type="text" id="category" placeholder ={category} value={this.state.category} />
                                        <label htmlFor="description">Category</label>
                                    </div>
                                </div>
                                <div className="row form-margins">
                                <div className="col input-field s10 offset-s1">
                                        <i className="material-icons prefix">attach_money</i>
                                        <input onChange={this.handleKeyPress} name="value" type="number" id="value" placeholder ={value} value={this.state.value} />
                                        <label htmlFor="value">Value</label>
                                    </div>
                                </div>
                                <div className="row form-margins">
                                <div className="col input-field s10 offset-s1">
                                        <i className="material-icons prefix">date_range</i>
                                        <input onChange={this.handleKeyPress} name="date" type="text" id="date" placeholder ={date} value={this.state.date} />
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

const mapStateToProps = state => {
	console.log("STATE", state.edit)
  return {
    info: state.edit
  }
} 

export default connect(mapStateToProps, {
  editItem
})(EditItem);

