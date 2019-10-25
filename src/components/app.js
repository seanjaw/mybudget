
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import 'material-icons/iconfont/material-icons.scss';
import React, { Component } from 'react';
import Table from './table';
import AddItem from './add_item';
import { randomString } from '../helpers';
import NavBar from './nav_bar';
import '../assets/css/app.scss';
import BreakdownBar from './breakdown_bar';
import Notes from './notes'
import EditModal from './edit_modal';
import DeleteModal from './delete_modal';
import BudgetSummary from './budget_summary';
import axios from 'axios';
import WarningModal from './warning_modal';

class App extends Component {
    
    state = {
        list: [],
        modalOpen: false,
        deleteModalOpen:false,
        warningModalOpen: true 
    }
    
    async componentDidMount() {
        const getrows= await axios.get('/api/data.php?action=readAll');
        // console.log(getrows)
        this.setState({
            list: getrows.data.data 
        });
    }


    addItem = (newItem) => {
        newItem.id = randomString();
        this.setState({
            list: [...this.state.list, newItem]
        });
        console.log('submitted add item', this.state.list)
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
        return posAccumulator.toFixed(2);
    }

    expenseAccumulate = () =>{
        let negAccumulator = 0;
        this.state.list.map((item)=>{  
            let parsedFloat = parseFloat(item.value);
            if (parsedFloat < 0){
                negAccumulator+=parsedFloat;
            }
        })
        negAccumulator= negAccumulator*-1
        return negAccumulator.toFixed(2);
    }
    openEditModal = (id) => {
        this.setState({
           modalOpen: true,
           editID: id
        });
        console.log('in the edit modal')

    }

    closeEditModal = () => {
        this.setState({
            modalOpen: false
        });
    }

    openDeleteModal = (id) => {
      
        this.setState({
           deleteModalOpen: true,
           deleteID: id
        });
        console.log('this is state after delete modal is opened', this.state)
        console.log('in the delete modal')
        // console.log('the open modal state',this.state)
    }

    closeDeleteModal = () => {
        this.setState({
            deleteModalOpen: false
        });
    }
    closeWarningModal = () => {
        this.setState({
            warningModalOpen: false
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
                        <Table editItem= {this.editItem} openDeleteModal={this.openDeleteModal} openEditModal={this.openEditModal} list={this.state.list} />
                    </div>
                    <div className="col s12 m4 no-padding">
                        <BreakdownBar posAccumulator={this.incomeAccumulate()} negAccumulator={this.expenseAccumulate()} />

                        <AddItem add={this.addItem}/>
                    </div>
                </div>
                <div>
            </div>

            { this.state.modalOpen ? <EditModal editItem={this.editItem} closeModal = {this.closeEditModal} /> : "" }
            { this.state.deleteModalOpen ? <DeleteModal deleteItem={this.deleteItem} closeDeleteModal = {this.closeDeleteModal}/> : "" }
            { this.state.warningModalOpen ? <WarningModal closeWarningModal = {this.closeWarningModal}/> : "" }

            </div>
        )
    }
}


export default App; 