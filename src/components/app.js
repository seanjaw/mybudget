
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
import Notes from './notes'
import EditModal from './editModal';
import BudgetSummary from './budget_summary';
class App extends Component {
    
    state = {
        list: [],
        editModalOpen: false
    }

    componentDidMount() {
        this.getListData();
        // this.accumulate();
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
        // console.log('list', this.state.list)
        let accumulator = 0;
        this.state.list.map((item) => {
            let parsedInteger = parseInt(item.value);
            accumulator += parsedInteger;
        });
        return accumulator
    }

    incomeAccumulate = () =>{
        let posAccumulator = 0;
        this.state.list.map((item)=>{  
            let parsedInteger = parseInt(item.value);
            if (parsedInteger > 0){
                posAccumulator+=parsedInteger;
            } 
        })
        return posAccumulator;
    }

    expenseAccumulate = () =>{
        let negAccumulator = 0;
        this.state.list.map((item)=>{  
            let parsedInteger = parseInt(item.value);
            if (parsedInteger < 0){
                negAccumulator+=parsedInteger;
            }
        })
        return negAccumulator*-1;
    }
    editModalOpen = () => {
        this.setState({
           editModalOpen: true,
        });
    }

    editModalClosed = () => {
        this.setState({
            editModalOpen: false
        });
    }

    render() {

        const accumulator = this.accumulate();
        return (
            <div className="yellow lighten-5 z-depth-1">
                <NavBar />
                <div className="row remove-margin">
                    <div className="col s12 m8 no-padding yellow lighten-5 making-height">
                        <Notes/>
                        <BudgetSummary accumulator={accumulator}/>
                    </div>
                    <BreakdownBar posAccumulator={this.incomeAccumulate()} negAccumulator={this.expenseAccumulate()} />
                </div>
                <div className="row">
                    <div className="col s12 m8 no-padding">
                        <Table deleteItem={this.deleteItem} list={this.state.list} />
                    </div>
                    <div className="col s12 m4 no-padding">
                        <AddItem add={this.addItem} />
                    </div>
                </div>
                <div>
            </div>

                
            </div>
        )
    }
}

export default App;
