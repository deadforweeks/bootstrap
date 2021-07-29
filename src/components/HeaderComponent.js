import React, { Component } from 'react';
import {Navbar, NavbarBrand, Jumbotron} from 'reactstrap';

class Header extends Component {
    //doesn't always need a constructor but always requires a render
    render() {
        return (
        //either we use a div to wrap all of this, or we can do something else, called React.Fragment -- accesses a wrapper around components and it won't create extra dom node but it'll allow us to receive the condition of a returning a single top level component.      
        //short hand for React.Fragment is actually <> but it isn't supported all around yet
        <React.Fragment>
            <Jumbotron fluid>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>NuCamp</h1>
                            <h2>A better way to camp tho</h2>
                        </div>
                    </div>
                </div>
            </Jumbotron>

            <Navbar dark sticky="top">
            {/* Stickytop navbar^^^ */}
                <div className="container"> {/* We cannot say class=certain in JSX, we gotta say className */}
                    <NavbarBrand href="/">NuCamp</NavbarBrand>
                    {/* NavBar brand ^^^^ when we are using or rendering react componenets, the syntax is like <> angle brackets. The telltale sign that it's componenent, is gonna be the first letter. If it's capitalized you know it's React component. if it's lower case you're dealing with a JSX component. So Navbar is dealing w/ a react component. */}
                </div>
            </Navbar>
        </React.Fragment>
        );
    }
}
export default Header;