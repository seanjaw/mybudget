import React, { Component } from 'react';

class NavBar extends Component {
    // componentDidMount(){
    //     console.log('side nav mounted')
    // }
    render() {
        return (
            <nav className = "teal lighten-1">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">MyBudget</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Overview</a></li>
                        <li><a href="badges.html">Charts</a></li>
                        <li><a href="collapsible.html">Goals</a></li>
                    </ul>
                </div>
            </nav>
        )

    }
}

export default NavBar; 