import React, { Component } from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, 
    Collapse, NavItem, Jumbotron, 
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';
// ^^^added a bunch of more component shit

class Header extends Component {
    //setting up a constructor that serves function as a navbar toggler
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            // ^^^to serve as a toggle button state
            isModalOpen: false  // For modal to be abled to be opened and closed we need to add a boolean property within the componenet state called, isModalOpen, inittially set to false. this will keep track of whether modal is open/closed. 
                                //similar to toggleNav() except toggleModal() like below
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal=this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        //^^^binding shit to the compoennet. so when toggle nav is called, then this.keyword insdie it refers to the correct component.
        //ultimately these properties above are set @ handleLogin with alert w/ this.uesrname.value, this.password.value, this.remember.checked . Those were nt in the constructors as we could see 
        //next part: so we need to make sure they're being set by pulling the values from the forms correctly. this is where we use react innerRefs.

    }

        // method that serves what happens when navbar handler is clicked. toggle down. when triggered, it'll it'll change state to set state to opposite of its current state.
        toggleNav() {
            this.setState( //setState(), not state. Using a not logical operator:
                { isNavOpen: !this.state.isNavOpen }
            );
        }

        toggleModal() {
            this.setState( //setState(), not state. Using a not logical operator:
                { isModalOpen: !this.state.isModalOpen }
            );  //^^^we also need to bind the above to the constructor
        }

        handleLogin(event) {    //sinc we aren't building backend that can authenticate the login. all we doin is ahve it alert us the form values when it's submitted.
            let loggedIn = `Username: ${this.username.value}\nPassword: ${this.password.value}\nRemember Me? ${this.remember.checked}`;
            alert(loggedIn);
            console.log(loggedIn);
            this.toggleModal() //then we close the modal using toggle method
            event.preventDefault();     //prevent page from being rerendered
            //ultimately this handlelongin() needs to also be added to the binding group

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
                            <h3 className="thislabel">We offer places where you can camp in Wuhan, Hubei, China in order to bring back the lovely nostalgic year 2020.</h3>
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

                        {/* Adding a button inside nav bar that will toggle the modal. it's behind Nav but still before end of collapse so that the login button will show up in the collapse menu. using jsx w/ span classnames so it'll have the same text styles, as the navigation links. also align it horizontally to the right. */}
                        <span className="navbar-text ml-auto">
                            {/* We give button below an onclick function to toggle this.toggleMOdal : */}
                            <Button className="loginButton" outline onClick={this.toggleModal}>
                                <i className="fa fa-sign-in fa-lg" /> Login
                                {/* Giving it a login icon and link */}
                            </Button>
                        </span>
                    </Collapse>
                </div>
            </Navbar>

            {/* NOw setting up a Modal componenet beneath the nav bar. */}
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}> 
            {/*^^^ isOpen predefines whether this modal is open or not. When this set to false it'll be close, if state set to true then modal will be visible. 
            For toggle attribute we set it to this.toggleModal*/}
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                            {/* Toggle is added^^ to close the modal when it's open */}
                
                <ModalBody>
                {/* For this to be able to be opened and closed we need to add a boolean property within the componenet state called, isModalOpen, inittially set to false. this will keep track of whether modal is open/closed.  */}
                {/* Reactstrap modal componenet comes 2 built in attributes: isopen, and toggle */}
                {/* Here we place an uncontrolled form: */}
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username"
                            innerRef = {input => this.username = input} />
                            {/* for each of the inputs we need to add an InnerRef attribute and set it to a callback function wiht value of input passed, then we define a property for each one, like this.property and set it = input */}
                        </FormGroup>
                        
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password"
                            innerRef = {input => this.password = input} />
                            {/* for each of the inputs we need to add an InnerRef attribute and set it to a callback function wiht value of input passed, then we define a property for each one, like this.property and set it = input */}                            
                        </FormGroup>
                        
                        <FormGroup check >      
                        {/* Checkbox ^^^ react requires check to be filled in everywhere: */}
                            <Label check>
                                <Input type="checkbox" name="remember"
                                innerRef = {input => this.remember = input} /> Remember Me
                                {/* We don't need an id for the input nor html4 for the label because when you nest input inside label it's already clear what input the label is for. We will add a submit button at the bottom. */}
                            </Label>
                        </FormGroup>

                        <Button type="submit" value="submit" color="primary">Login</Button>
                        {/* This way now when we submit shit into the browser, it's able to pull the form data with the inner refs and then load them into the component state and echo it back to us in the alert. This is how we can access form values from a react compmenent without having to do all the fucked up setup of control form...... controlled forms are still good way but this works as well.  */}
                    </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
        );
    }
}
export default Header;