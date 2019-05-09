import React, { Component } from 'react';
import axios from 'axios';
class AddItem extends Component {
 
    state = {
            description: '',
            category: '',
            value: '',
            date: '',
            descriptionError:''
        }
    
    // setIsValid(isValid) {
    //     this.setState({ isValid: isValid })
    // }
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
        }
        else{
            console.log(this.state)
        }
        this.resetForm();
    }

    handleKeyPress = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    validate = () =>{
        console.log('in the validate function')
        let descriptionError='';
        if (!this.state.description.includes('@')){
            console.log('it did not have the @')
            descriptionError='invalid description';
            console.log('current state', this.state)
        }

        if (descriptionError){
            this.setState({descriptionError:descriptionError})
            console.log('this is new descriptionerror state', this.state)
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

    }

    render() {
        const { description, category, value, date } = this.state;
        return (
                            <form onSubmit={this.handleSubmit}>
                                <div className="row form-margins">
                                    <div className="col input-field s10 offset-s1">
                                        <i className="material-icons prefix">label</i>
                                        <input onChange={this.handleKeyPress} name="description" type="text" id="description" value={description} />
                                        <label htmlFor="description">Description</label>
                                    </div>
                                </div>
                                <div>{this.state.descriptionError}</div>
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