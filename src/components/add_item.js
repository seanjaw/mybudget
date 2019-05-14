import React, { Component } from 'react';
import axios from 'axios';
class AddItem extends Component {
 
    state = {
            description: '',
            category: '',
            value: '',
            date: '',
           
        }
    

    // async componentDidMount(){
    //     console.log('component mounted')
    //     const addRow = await axios.post('/api/data.php?action=create',{
    //         description: this.state.description,
    //         category: this.state.category,
    //         value: this.state.value,
    //         date: this.state.date 
    //     });
    //     console.log('component did mount', addRow)
    // }



    handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = this.validate();

        if (isValid) {
            const addRow = await axios.post('/api/data.php?action=insert',{
                description: this.state.description,
                category: this.state.category,
                value: this.state.value,
                date: this.state.date 
            });
            console.log('this is addrow', addRow)
            this.props.add(this.state);
            this.resetForm();
        }
        else{
            console.log(this.state)
        }
        
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
    resetForm = () => {
        this.setState({
            description: '',
            category: '',
            value: '',
            date: ''    
        });
        let descriptionError='';
        let categoryError='';
        let valueError= '';
        let dateError='';
        let formError = ''; 
        this.setState({descriptionError,categoryError, valueError, dateError, formError});

    }
    // findNumberOfDecimalPlaces = (value) => {
    //     let numericValue = parseFloat(value);
    //     if (Math.floor(numericValue) !== numericValue)
    //     return numericValue.toString().split(".")[1].length || 0;
    // return 0;

    // }
    validateDecimal = (ele) => {
        console.log('in validate decimal')
        console.log('this is ele', ele)
        let numericValue = parseFloat(ele);
        console.log('this is numervalue', numericValue)
        // var regex = /(?:\d*\.\d{1,2}|\d+)$/;
        var regex = /^\d+\.\d{2}$/;
        console.log('this is regex test', regex.test(numericValue))
        return regex.test(numericValue);
    }
    validateDate = (date) =>{
        var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
    return date_regex.test(date);
    }
    render() {
        const { description, category, value, date } = this.state;
        return (
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col input-field s10 offset-s1">
                                        <i className="material-icons prefix">label</i>
                                        <input onChange={this.handleKeyPress} name="description" type="text" id="description" value={description} />
                                        <label htmlFor="description">Description</label>
                                    </div>
                                </div>
                                <div className="errorFont">{this.state.descriptionError}</div>
                                <div className="row">
                                <div className="col input-field s10 offset-s1">
                                        <i className="material-icons prefix">list</i>
                                        <input onChange={this.handleKeyPress} name="category" type="text" id="category" value={category} />
                                        <label htmlFor="description">Category</label>
                                    </div>
                                </div>
                                <div className="errorFont">{this.state.categoryError}</div>

                                <div className="row">
                                <div className="col input-field s10 offset-s1">
                                        <i className="material-icons prefix">attach_money</i>
                                        <input onChange={this.handleKeyPress} name="value" type="number" id="value" value={value} />
                                        <label htmlFor="value">Value</label>
                                    </div>
                                </div>
                                <div className="errorFont">{this.state.valueError}</div>

                                <div className="row">
                                <div className="col input-field s10 offset-s1">
                                        <i className="material-icons prefix">date_range</i>
                                        <input onChange={this.handleKeyPress} name="date" type="text" id="date" value={date} />
                                        <label htmlFor="description">mm/dd/yyyy</label>
                                    </div>
                                </div>
                                <div className="errorFont">{this.state.dateError}</div>
                                <div className="formErrorFont">{this.state.formError}</div>

                                <div className="row">
                                    <div className="col s6 center">
                                        <button onClick={this.resetForm} type="button" className="btn waves-effect waves-light btn black">clear</button>
                                    </div>
                                    <div className="col s6 center">
                                        <button className="btn waves-effect waves-light btn black">add</button>
                                    </div>
                                </div>
                            </form>
        )
    }
}

export default AddItem;