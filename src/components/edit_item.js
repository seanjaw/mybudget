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
        this.setState(this.props.info);
        M.updateTextFields()    
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid){
            const editRow = await axios.post('/api/data.php?action=update',{
                id: this.props.editID,
                description: this.state.description,
                category: this.state.category,
                value: this.state.value,
                date: this.state.date 
            })
            console.log(editRow)
            this.props.refreshAfterEdit();
            this.props.closeModal();
        }
        console.log('this was clicked')
       

    }

    handleKeyPress = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    validate = () =>{
        console.log('in the validate function')
        let descriptionError='';
        let categoryError='';
        let valueError= '';
        let dateError='';
        let formError = ''; 
        this.setState({descriptionError,categoryError, valueError, dateError, formError});

      
        if (this.state.description === '' || this.state.category === '' || this.state.value === '' || this.state.date === ''){
            formError= "form must be filled out completely. try again"
        }
        if (this.state.description !== ''){
            if (this.state.description.length < 2 || this.state.description.length > 19){
                console.log('its not long enough mate')
                descriptionError='must be between 2 and 20 characters';
            }
        }
        if(this.state.category !== ''){
            if (this.state.category.length < 2 || this.state.category.length > 19){
                console.log('its not long enough mate')
                categoryError='must be between 2 and 20 characters';
            }
        }
        if(this.state.value !== ''){
            // if (this.findNumberOfDecimalPlaces(this.state.value)!= 0 && this.findNumberOfDecimalPlaces(this.state.value)!= 2){
            //     console.log('it aint decimal mate')
            //     valueError = 'must be whole number or contain 2 decimals';
            // }
            if (!this.validateDecimal(this.state.value)){
                valueError = 'must contain two decimal places';
            }
    
        }
        if(this.state.date!==''){
            if (!this.validateDate(this.state.date)){
                dateError = 'must be in mm/dd/yyyy format'
            }
        }
       
      
        if (formError || descriptionError || categoryError || valueError || dateError){
            this.setState({descriptionError,categoryError, valueError, dateError, formError});
            return false;
        }
       
    
        return true;
    }
    // findNumberOfDecimalPlaces = (value) => {
    //     let numericValue = parseFloat(value);
    //     if (Math.floor(numericValue) !== numericValue)
    //     return numericValue.toString().split(".")[1].length || 0;
    // return 0;

    // }
    validateDecimal = (ele) => {
        let numericValue = parseFloat(ele);
        // var regex = /(?:\d*\.\d{1,2}|\d+)$/;
        var regex = /^\d+\.\d{2}$/;

        return regex.test(numericValue);
    }

    validateDate = (date) =>{
        var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
    return date_regex.test(date);
    }
    render() {
        const { description, category, value, date } = this.props.info;
    

        return (
          
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col input-field s10 offset-s1">
                                        <i className="material-icons prefix">label</i>
                                        <input onChange={this.handleKeyPress} name="description" type="text" id="description" placeholder ={description} value ={this.state.description}/>
                                        <label htmlFor="description">Description</label>
                                    </div>
                                </div>
                                <div className="errorFont">{this.state.descriptionError}</div>
                                <div className="row">
                                <div className="col input-field s10 offset-s1">
                                        <i className="material-icons prefix">list</i>
                                        <input onChange={this.handleKeyPress} name="category" type="text" id="category" placeholder ={category} value={this.state.category} />
                                        <label htmlFor="description">Category</label>
                                    </div>
                                </div>
                                <div className="errorFont">{this.state.categoryError}</div>
                                <div className="row">
                                <div className="col input-field s10 offset-s1">
                                        <i className="material-icons prefix">attach_money</i>
                                        <input onChange={this.handleKeyPress} name="value" type="number" id="value" placeholder ={value} value={this.state.value} />
                                        <label htmlFor="value">Value</label>
                                    </div>
                                </div>
                                <div className="errorFont">{this.state.valueError}</div>
                                <div className="row">
                                <div className="col input-field s10 offset-s1">
                                        <i className="material-icons prefix">date_range</i>
                                        <input onChange={this.handleKeyPress} name="date" type="text" id="date" placeholder ={date} value={this.state.date} />
                                        <label htmlFor="description">Date</label>
                                    </div>
                                </div>
                                <div className="errorFont">{this.state.dateError}</div>
                                <div className="formErrorFont">{this.state.formError}</div>
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

