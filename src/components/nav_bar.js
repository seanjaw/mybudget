import React, { Component } from 'react';

class NavBar extends Component {
    // componentDidMount(){
    //     console.log('side nav mounted')
    // }
    render() {
        return (
            <nav className = "light-green lighten-1">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo black-text">MyBudget</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html" className="black-text">Overview</a></li>
                        <li><a href="badges.html" className="black-text">Charts</a></li>
                        <li><a href="collapsible.html" className="black-text">Goals</a></li>
                    </ul>
                </div>
            </nav>
        )

    }
}

export default NavBar; 