
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
import EditModal from './edit_modal';
import BudgetSummary from './budget_summary';
import {editItem} from '../actions';
import axios from 'axios';

class App extends Component {
    
    state = {
        list: [],
        modalOpen: false
    }

    componentDidMount() {
        this.getListData();
    }

    // componentDidUpdate(){
    //     console.log('component updated')        
    // }
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
            console.log("this is id",id)
            return item.id === id;
        });
        
     
        console.log("current row ", this.state.list[indexToDelete]);
        if (indexToDelete >= 0) {
            const tempItems = this.state.list.slice()
            tempItems.splice(indexToDelete, 1);
            this.setState({
                list: tempItems
            })
        }
    }

    accumulate = () => {
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
    openEditModal = () => {
        this.setState({
           modalOpen: true
        });
        console.log('in the edit modal')
        // console.log('the open modal state',this.state)
    }

    closeEditModal = () => {
        this.setState({
            modalOpen: false
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
                        <Table editItem= {this.editItem} deleteItem={this.deleteItem} openEditModal={this.openEditModal} list={this.state.list} />
                    </div>
                    <div className="col s12 m4 no-padding">
                        <AddItem add={this.addItem} editItem={this.editItem}/>
                    </div>
                </div>
                <div>
            </div>

            { this.state.modalOpen ? <EditModal  closeModal = {this.closeEditModal} /> : "" }
            </div>
        )
    }
}

export default App;
