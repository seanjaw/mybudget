import React, { Component } from 'react';

class AddItem extends Component {
    state = {
        description: '',
        category: '',
        value: '',
        date: ''

    }
    handleSubmit = (event) => {
        event.preventDefault();

        // console.log('form submitted', this.state)
        this.props.add(this.state);
        this.resetForm();
    }

    handleKeyPress = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        // console.log(this.state)
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
                                        <button onClick={this.resetForm} type="button" className="btn-large waves-effect waves-light btn black">clear</button>
                                    </div>
                                    <div className="col s6 center">
                                        <button className="btn-large waves-effect waves-light btn black">add</button>
                                    </div>
                                </div>
                            </form>
        )
    }
}

export default AddItem;