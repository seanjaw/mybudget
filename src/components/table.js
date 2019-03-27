import React, { Component } from 'react';
import listData from '../data/get_total';
import ListRow from './list_row'

class Table extends Component {
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
    render() {
        console.log(this.state)
        const listRows = this.state.list.map((list) => {
           return <ListRow key={list.id}list={list}/>
        });
        return (
            <div className="row">
                <div className="col s12 m8">
                    <table>
                        <thead>
                            <tr>
                                <th>item</th>
                                <th>value</th>
                            </tr>
                        </thead>
                        <tbody>
                           {listRows}
                        </tbody>
                    </table>
                </div>

            </div>

        )
    }
}

export default Table; 