
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import React, { Component } from 'react';
import Table from './table';
import AddItem from './add_item';
import listData from '../data/get_total';
import { randomString } from '../helpers';
import NavBar from './nav_bar';
import './app.scss';



class App extends Component {
    state = {
        list: []
    }
    componentDidMount() {
        this.getListData();
    }

    getListData() {
        this.setState({
            list: listData
        })
    }

    addItem = (newItem) => {
        newItem.id = randomString();
        this.setState({
            list: [...this.state.list, newItem]
        });
    }

    deleteItem = (id) => {
        const indexToDelete = this.state.list.findIndex((item) => {
            return item.id === id;
        });

        if (indexToDelete >= 0) {
            const tempItems = this.state.list.slice()
            tempItems.splice(indexToDelete, 1);
            this.setState({
                list: tempItems
            })
        }


    }
    render() {
        return (
            <div>
                <NavBar />
                <h1 className="center">April's Budget:</h1>
                <h2 className="center">Over 9000</h2>
                <div className="row">
                    <div className="col s12 m8">
                        <Table deleteItem={this.deleteItem} list={this.state.list} />
                    </div>
                    <div className="col s12 m4">
                        <AddItem add={this.addItem} />
                    </div>
                </div>

            </div>
        )
    }
}

export default App;
