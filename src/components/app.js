
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
import BreakdownBar from './breakdown_bar';


class App extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        console.log('im in ')
        this.getListData();
        this.accumulate();
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

    accumulate = () => {
        console.log('list', this.state.list)
        let accumulator = 0;
        this.state.list.map((item) => {
            let parsedInteger = parseInt(item.value);
            accumulator += parsedInteger;
        });
        return accumulator
    }



    render() {
        // console.log('list', this.state.list)
        // let accumulator = 0;
        // this.state.list.map((item) => {
        //     let parsedInteger = parseInt(item.value);
        //     accumulator += parsedInteger;
        // });
        const accumulator = this.accumulate();
        return (
            <div className="yellow lighten-5 z-depth-1">
                <NavBar />
                <div className="row remove-margin">
                    <div className="col s12 m8 no-padding yellow lighten-5 making-height">
                        <div className="col s6 valign-wrapper making-height">
                            <div className="col s3">
                                <div>April's Notes:</div>
                            </div>
                            <div className="col s9">
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maiores consequatur animi excepturi autem tempora.</div>
                            </div>
                        </div>
                        <div className="col s3 making-height valign-wrapper add-vertical-line">
                            <div className="speech-bubble speech-bubble-size center">
                                <div className="white-text accumulation-styling">${accumulator}.00</div>
                                <div className = "text-bottom">To Be Budgeted</div>
                            </div>
                        </div>
                        <div className="col s3 making-height valign-wrapper">
                            <div>
                            <div>+$0.00 Funds For Mar</div>
                            <div>-$0.00 Overspent in Feb</div>
                            <div>-$23.00 Budgeted in Mar</div>
                            <div>-$0.00 Budgeted in Future</div>
                            </div>
                            
                        </div>
                    </div>
                    <BreakdownBar />
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
