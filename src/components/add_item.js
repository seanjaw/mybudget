import React, { Component } from 'react';

class AddItem extends Component {
    state ={
        description: '',
        value: ''
    }
    handleSubmit = (event) => {
        event.preventDefault();

        console.log('form submitted', this.state)
        this.props.add(this.state);
        this.resetForm();
    }

    handleKeyPress = (event)=>{
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
    }

    resetForm = () =>{
        this.setState({
            description: '',
            value:''
        });
      
    }
    render(){
        const {description, value} = this.state; 
        return(

        
            <form onSubmit={this.handleSubmit}>
            <div className="row">
                <div className="col input-field s10 offset-s1">
                    <input onChange= {this.handleKeyPress} name="description" type="text" id="description" value={description}/>
                    <label htmlFor="description">Description</label>
                </div>
            </div>
            <div className="row">
                <div className="col input-field s10 offset-s1">
                    <input onChange= {this.handleKeyPress} name="value"type="text" id="value" value = {value}/>
                    <label htmlFor="value">Value</label>
                </div>
            </div>
            <div className="row">
                <div className="col s6 center">
                    <button onClick={this.resetForm} type="button" className="waves-effect waves-light btn red darken-2">clear</button>
                </div>
                <div className="col s6 center">
                    <button className="waves-effect waves-light btn green darken-2">add</button>
                </div>
            </div>
            </form>
            
        )
    }
}

export default AddItem;