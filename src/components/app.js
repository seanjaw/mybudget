
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import 'material-icons/iconfont/material-icons.scss';
import React, { Component } from 'react';
import Table from './table';
import AddItem from './add_item';
import listData from '../dummydata/get_total';
import { randomString } from '../helpers';
import NavBar from './nav_bar';
import '../assets/css/app.scss';


class App extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        console.log('im in ')
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
        console.log('list', this.state.list)
        let accumulator = 0;
        this.state.list.map((item) => {
            let parsedInteger = parseInt(item.value);
            accumulator += parsedInteger;
        });
        return (
            <div>
                <NavBar />
                <div className="row remove-margin">
                    <div className="col s12 m8 no-padding">
                        <div className="white-text blue making-height">
                            <div>April's Budget:</div>
                            <div>{accumulator}</div>
                        </div>
                    </div>
                    <div className="col s12 m4 no-padding">
                        <div className="blue making-height">hi</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m8 no-padding">
                        <Table deleteItem={this.deleteItem} list={this.state.list} />
                    </div>
                    <div className="col s12 m4 no-padding">
                        <AddItem add={this.addItem} />
                    </div>
                </div>

            </div>
        )
    }
}

export default App;
