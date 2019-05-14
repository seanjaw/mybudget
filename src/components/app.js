
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
// import {editItem} from '../actions';
import axios from 'axios';
import {connect} from 'react-redux';

class App extends Component {
    
    state = {
        list: [],
        modalOpen: false
    }
    // async getData(){
    //     const getrows= await axios.get('/api/data.php?action=readAll');
    //     console.log('inside async getdata', getrows.data.data)
    // }
    async componentDidMount() {
        const getrows= await axios.get('/api/data.php?action=readAll');
        // console.log(getrows)
        this.setState({
            list: getrows.data.data 
        });

        // console.log(this.state)
        // this.getListData();
        // this.getData();
    }

    // componentDidUpdate(){
    //     console.log('component updated')        
    // }
    // getListData() {
    //     this.setState({
    //         list: listData
    //     })
    // }

    addItem = (newItem) => {
        newItem.id = randomString();
        this.setState({
            list: [...this.state.list, newItem]
        });
    }

    editItem = async () =>{
        const getrows= await axios.get('/api/data.php?action=readAll')
        this.setState({
            list: getrows.data.data
        })
    }

    deleteItem = async (id) => {
        const indexToDelete = this.state.list.findIndex((item) => {
            console.log("this is index to delete",id)
            return item.id === id;
        });
        console.log(this.state);
        console.log(indexToDelete);
        const deleteRow =await axios.post('/api/data.php?action=delete',{
            id: this.state.list[indexToDelete].id
        });
        console.log(deleteRow)
     
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
            let parsedFloat = parseFloat(item.value);
            accumulator += parsedFloat;
        });
        return accumulator
    }

    incomeAccumulate = () =>{
        let posAccumulator = 0;
        this.state.list.map((item)=>{  
            let parsedFloat = parseFloat(item.value);
            if (parsedFloat > 0){
                posAccumulator+=parsedFloat;
            } 
        })
        return posAccumulator;
    }

    expenseAccumulate = () =>{
        let negAccumulator = 0;
        this.state.list.map((item)=>{  
            let parsedFloat = parseFloat(item.value);
            if (parsedFloat < 0){
                negAccumulator+=parsedFloat;
            }
        })
        return negAccumulator*-1;
    }
    openEditModal = (id) => {
        this.setState({
           modalOpen: true,
           editID: id
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
                {/* <NavBar />
                <div className="row remove-margin">
                    <div className="col s12 m8 no-padding yellow lighten-5 making-height">
                        <Notes/>
                        <BudgetSummary accumulator={accumulator}/>
                    </div>
                    <BreakdownBar posAccumulator={this.incomeAccumulate()} negAccumulator={this.expenseAccumulate()} />
                </div> */}
                {/* <div className="row">
                <h2>WhereIsMyMoney?</h2>
                </div> */}
                <div className="row">
                    <div className="col s12 m8 no-padding table-overflow">
                        <h3>WhereIsMyMoney?</h3>
                        <Table editItem= {this.editItem} deleteItem={this.deleteItem} openEditModal={this.openEditModal} list={this.state.list} />
                    </div>
                    <div className="col s12 m4 no-padding">
                        <BreakdownBar posAccumulator={this.incomeAccumulate()} negAccumulator={this.expenseAccumulate()} />

                        <AddItem add={this.addItem}/>
                    </div>
                </div>
                <div>
            </div>

            { this.state.modalOpen ? <EditModal editItem={this.editItem} editID={this.state.editID} closeModal = {this.closeEditModal} /> : "" }
            </div>
        )
    }
}


export default App; 