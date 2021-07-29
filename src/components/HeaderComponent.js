import React, { Component } from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import {NavLink} from 'react-router-dom';
// ^^^added a bunch of more component shit

class Header extends Component {
    //setting up a constructor that serves function as a navbar toggler
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        //^^^binding shit to the compoennet. so when toggle nav is called, then this.keyword insdie it refers to the correct component.
        this.state = {
            isNavOpen: false
            // ^^^to serve as a toggle button state
        };
    }

        // method that serves what happens when navbar handler is clicked. toggle down. when triggered, it'll it'll change state to set state to opposite of its current state.
        toggleNav() {
            this.setState( //setState(), not state. Using a not logical operator:
                { isNavOpen: !this.state.isNavOpen }
            );
        }

    

    //react doesn't always need a constructor but always requires a render
    render() {
        return (
        //either we use a div to wrap all of this, or we can do something else, called React.Fragment -- accesses a wrapper around components and it won't create extra dom node but it'll allow us to receive the condition of a returning a single top level component.      
        //short hand for React.Fragment is actually <> but it isn't supported all around yet
        <React.Fragment>
            <Jumbotron fluid>
                <div className="container">
                    <div className="headrow row">
                        <div className="d-none d-md-block col-md-2"><img src="assets/images/wuhan.png"/></div>
                        <div className="col">
                            <h1>WuCamp</h1>
                            <h3>We offer places where you can camp in Wuhan, Hubei, China in order to bring back the lovely nostalgic year 2020.</h3>
                        </div>
                    </div>
                </div>
            </Jumbotron>

            {/* Goal: add navigation links to the navbar and make it responsive */}
            <Navbar dark sticky="top" expand="md">  
            {/*                             ^^^collapse and only show viewports smaller than meidum */}
            {/* Stickytop navbar^^^ */}
                <div className="container"> {/* We cannot say class=certain in JSX, we gotta say className */}
                    <NavbarBrand className="mr-auto">
                        {/* WuCamp Clan (Ain't Nuthin to Fuck With)<br/><small>Click campsite to expand details at the bottom</small> */}
                        {/* ^^^replacing above with below - an image used as an icon */}
                        <img src="/assets/images/logo.png" height="30" width="30" alt="Nucamp Logo" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                        {/* This will make it so clicking on toggle button will trigger the toggleNav method. */}

                    {/* NavBar brand ^^^^ when we are using or rendering react componenets, the syntax is like <> angle brackets. The telltale sign that it's componenent, is gonna be the first letter. If it's capitalized you know it's React component. if it's lower case you're dealing with a JSX component. So Navbar is dealing w/ a react component. */}
                    
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    {/* First, wrap navlinks inside a collapse function. So this returns either false or true depending on the state */}
                        <Nav navbar>
                            {/* Put a NavItem wrap around all of these, will make it either right beside each other when expanded out, or contracted when in 'collapsed' state. */}
                            <NavItem>
                                {/* 4 nav links */}
                                <NavLink className="nav-link" to="/home">
                                    <i className="fa fa-home fa-lg" /> Home
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/directory">
                                    <i className="fa fa-list fa-lg" /> Directory
                                </NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <i className="fa fa-info fa-lg" /> About
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <i className="fa fa-address-card fa-lg" /> Contact Us
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </React.Fragment>
        );
    }
}
export default Header;