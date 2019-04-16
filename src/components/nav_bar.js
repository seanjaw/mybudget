import React, { Component } from 'react';

class NavBar extends Component {
    componentDidMount(){
        console.log('side nav mounted')
        M.Sidenav.init(this.sidenav);

    }
    render() {
        return (
            <div>
            <nav className="teal lighten-1">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">MyBudget</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Overview</a></li>
                        <li><a href="badges.html">Charts</a></li>
                        <li><a href="collapsible.html">Goals</a></li>
                    </ul>
                </div>
            </nav>

            <ul ref={(element)=>{this.sidenav =element}} className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Overview</a></li>
                <li><a href="badges.html">Charts</a></li>
                <li><a href="collapsible.html">Goals</a></li>
            </ul>
            </div>
        )

    }
}

export default NavBar; 