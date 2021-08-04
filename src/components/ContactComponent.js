//very much like contactus.html page, in js
import React , {Component} from 'react';
import {  Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';     //removed cardText & cardBody
            // formfeedback is to check form input and give feedback. 
import {Link} from 'react-router-dom';

//  replacing:
// function Contact(props) with:
// replacing function with class extending component
class Contact extends Component {

    constructor(props) {
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            phoneNum:'',
            email:'',
            agree:false,
            contactType:'By Phone',
            feedback:'',
            // setting up a new property named touched to check whether the form has been 'touched' or  not:
            // setting it up as a nested object. this will keep track whtether the four fields, have been touched or not -- has the user answered it or not? If something is entered but also have they clicked their mouse into it? done by a boolean true or false, an d initial value would be false. if not touched then don't run validation on it yet.
            // This is done by BLUR, which is fired when user touches an input field and leaves it. we add an unblur event handler in form group, called onBlur, way below
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        // ^^^makes it so that we can use this. keyword inside handleinputchange to have it point to the correct object.
        this.handleSubmit = this.handleSubmit.bind(this);
        //^^also bind this event handler in the the constructor, so that when we refer this.state in the handlesubmit method, it knows to look for that state in the constructor of 'this.' compoenent. 
    }

    validate(firstName, lastName, phoneNum, email) {
        //setting up errors object. property will hold error messages for the four fields IF there is an error.
        const errors = {
            firstName:'',
            lastName:'',
            phoneNum:'',
            email:''       
        }   //we ninitailize them as empty strings which means there are no errors

        if (this.state.touched.firstName) {
        //has it been touched?! if so is it less than two? if true then we'll set up error message that says it must be longer
            if (firstName.length<2) {
                errors.firstName = 'First name must be at least 2 characters';
            } else if (firstName.length > 15) { //if true then it must be 15 or less characters
                errors.firstName = 'First name must be 15 or less characters.';
            }   //use the same for last name as well
        }

        if (this.state.touched.lastName) {
        //has it been touched?! if so is it less than two? if true then we'll set up error message that says it must be longer
            if (lastName.length<2) {
                errors.lastName = 'Last name must be at least 2 characters';
            } else if (lastName.length > 15) { //if true then it must be 15 or less characters
                errors.lastName = 'Last name must be 15 or less characters.';
            }   
        }

        //next we use regex, regex = a way to specify a pattern to be matched, will return true or false whether ti's matched or not. what it's doing to checking the phone num value, and make sure it only include digits.
        const reg = /^\d+$/;    //does it contain only digits? this is a boolean check test        
        if (this.state.touched.phoneNum && !reg.test(phoneNum) ) {
            errors.phoneNum = 'The phone number should only contain numbers.';
        }

        if (this.state.touched.email && !email.includes('@')) {     ///has email been touched but does it NOT contain an @ symbol??  Then setting up an error message:
            errors.email='Email should contain an @ symbol';
        }

        return errors;
        //if there are any errors obj, if tehre are any validation errors for any fields then the corresponding property in error property should contain an error message. if not then it should contain empty string.
        //down @ render there needs to be an error as well because this error is locally scoped and not available in render.
    }

    //corresponding with onBlur, we require this handleBlur function
    handleBlur = (field) => () => { //because we pass in argument other than event we gotta do different here: wrap handleblur method in another function
    //wrap handleblur method in another function. also we use arrow function tod efine this method. //event handlers can be bound in react by using arrow function by arrow definition instead of using bind method in the constructor. again.  //so that we don't have to bind this. in this method as we did with others.
        this.setState(  //used to change the touched object but we don't wanna change entire object so we only wanna change one of the properties inside of it. Doing it by using ...SPREAD syntax, will spread out this.state.touched object and then will update the property that corresponds to the [field]: that triggered the event, whether first name or last name or etc. We use computed property name syntax here to get the name of that property. We set the name of that property then to true so we knwo it's been touched.
            {
                touched: {...this.state.touched, [field]:true }
            }   //next, onto validation!
        )
    }
    
    //Now adding two class methods, one to handle changes inf orm elements and the othe to handle submissions. 
    handleInputChange(event) {
        const target=event.target;
        const name=target.name;
        // makes it easier to reference shit as in event.target, and event.target.name
        const value=target.type==='checkbox' ? target.checked:target.value;
        //^^^^if type of form element that triggered this event is a checkbox, then we get the value target.checked attribute.t he checked attribute is a boolean attribute that can hold either true or false. if it's not a checkbox then we get the value from target's value.
        
        this.setState(
            {   //setting target's name by []. depending on which thing that triggered the event, could be first name, last name, email, etc
                //so name is taken from the input that has been changed
                [name]: value   //we get the variable from the value from above
            }   //to make this happen we need to put this.handleinputchange=this.handleinputchange.bind(this) few lines above
        )
    }

    handleSubmit(event) {
        // console log & alert expects a string not an object so we use JSON.stringify --- makes a string out of a fucking object
        let tellMeCurrentState = "Current state is: " + JSON.stringify(this.state)
        console.log(tellMeCurrentState);
        alert(tellMeCurrentState);
        // lastly when you submit a form, it usually refreshes the entire page. don't wnat that. so stop with this line:
        event.preventDefault();
    }
    
    // now wrap our return statement in a render since we switched from function to class
    render() {

        //down @ render there needs to be an error as well because the above errors is locally scoped and not available in render.
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email);
        //^^ passing the urrent values of firstNam lastNam email and phone which is conveniently stored in state. then that method will validate those fields, and RETURN error object, which is stored inside this varaible!! anytime there's a change in the error field this will be rerendered.
        //then setting up an invalid handle field (boolean field) for each input we are validating. invalid=(errors.property)? 


        return(
        <div className="container">
            {/* Breadcrumb starst here: */}
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Contact Us</h2>
                    <hr/>
                </div>
            </div>
        
            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h4>Our Address</h4>
                    <address>
                        1 WuCamp Way<br/>
                        Wuhan, HB<br/> 
                        China
                    </address>
                </div>

                <div className="col">
                    <a role="button" className="btn btn-link" href="tel:+14168088080">
                        <i className="fa fa-phone" /> 1 (911) 911-9111</a><br/>
                    <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.com">
                        <i className="fa fa-envelope-o"/> campsites@wucamp.com</a>
                </div>
            </div>

            <div className="row row-content"> {/* Start the form: send us your feedback */}
                <div className="col-12">
                    <h2>Send us your feedback</h2>
                    <hr/>
                </div>
                <div className="col-md-10">
                    <Form onSubmit={this.handleSubmit}>
                    {/* In every form we need to set out the usual attributes. type, attribute, name, and placeholder. That's the form setup. 
                    Then, to make it into a controlled form, we set up the value of each input to this.state.statePropertyDefinedBefore
                    With the exception to the checkbox may we contact you (this.state.agree). 
                    Each state componenet get an onchange handler set to this.handleinputchange that we created before.  
                    Enter form also gets an onSubmit = this.handleSubmit*/}

                        {/* FIRST NAME */}
                        <FormGroup row>
                            <Label htmlFor="firstName" md={2}>First Name</Label> {/* md={2} is the same as className=md-2 */}
                            <Col md={10}> {/* Col md {10} in curly braces: equivalent to div className=div-md-10. We can use them interchangeably to enter into the browser dom. */}
                                <Input type="text" 
                                id="firstName" 
                                name="firstName" 
                                placeholder="First Name"
                                value={this.state.firstName}
                                invalid={errors.firstName} //is there an error message for this field? an empty string would evaluate as false, but if shit isn't empty string then it'd evaluate here is true, so it'd be true here. Then down at the <formfeedback> just below it gives the form feedback value for the field if user does put something erroneous.
                                onBlur={this.handleBlur("firstName")}
                                // ^^so any time when user enter but moves away from this field that will fire this event handler.
                                onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.firstName}</FormFeedback>
                            </Col>
                        </FormGroup>

                        {/* LAST NAME */}
                        <FormGroup row>
                            <Label htmlFor="lastName" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input type="text" id="lastName" name="lastName"
                                placeholder="Last Name"
                                value={this.state.lastName}
                                invalid={errors.lastName} 
                                //^^^is there an error message for this field? an empty string would evaluate as false, but if shit isn't empty string then it'd evaluate here is true, so it'd be true here. Then down at the <formfeedback> just below it gives the form feedback value for the field if user does put something erroneous.
                                onBlur={this.handleBlur("lastName")}
                                // ^^so any time when user enter but moves away from this field that will fire this event handler.
                                onChange={this.handleInputChange} />                                
                                <FormFeedback>{errors.lastName}</FormFeedback>
                            </Col>
                        </FormGroup>

                        {/* PHONE NUMBER */}
                        <FormGroup row>
                            <Label htmlFor="phoneNum" md={2}>Phone</Label>
                            <Col md={10}>
                                <Input type="tel" id="phoneNum" name="phoneNum"
                                placeholder="Phone Number"
                                value={this.state.phoneNum}
                                invalid={errors.phoneNum} 
                                //^^^is there an error message for this field? an empty string would evaluate as false, but if shit isn't empty string then it'd evaluate here is true, so it'd be true here. Then down at the <formfeedback> just below it gives the form feedback value for the field if user does put something erroneous.
                                onBlur={this.handleBlur("phoneNum")}
                                // ^^so any time when user enter but moves away from this field that will fire this event handler.
                                onChange = {this.handleInputChange} />
                                <FormFeedback>{errors.phoneNum}</FormFeedback>
                            </Col>
                        </FormGroup>

                        {/* EMAIL */}
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input type="email" id="email" name="email"
                                placeholder="Email"
                                value={this.state.email}
                                invalid={errors.email} 
                                //^^^is there an error message for this field? an empty string would evaluate as false, but if shit isn't empty string then it'd evaluate here is true, so it'd be true here. Then down at the <formfeedback> just below it gives the form feedback value for the field if user does put something erroneous.
                                onBlur={this.handleBlur("email")}
                                // ^^so any time when user enter but moves away from this field that will fire this event handler.
                                onChange={this.handleInputChange} />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>

                        {/* MAY WE CONTACT YOU? */}
                        <FormGroup row>
                            <Col md={ {size:4, offset:2} }>
                            {/* ^^^ Instead of just a number behind it, here we give it an object that includes a size, and offest, so to define an object, we gotta give it a second set of {} braces. This ives it a responsive column size, and offest, at the same time. 
                            This renders out to be like <div class="col-md-4 offset-md-2" */}
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="agree"
                                        checked={this.state.agree}
                                        onChange = {this.handleInputChange} /> 
                                        {' '}   {/* Using this for space char */}
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <Input type="select" name="contactType" 
                                value={this.state.contactType}
                                onChange={this.handleInputChange}>
                                    <option>By Phone</option>
                                    <option>By Email</option>
                                </Input>
                            </Col>
                        </FormGroup>

                        {/* Your Feedback */}
                        <FormGroup row>
                            <Label htmlFor="feedback" md={2}>Your Fucking Feedback</Label>
                            <Col md={10}>
                                <Input type="textarea" id="feedback" name="feedback"
                                rows="8" value={this.state.feedback}
                                onChange={this.handleInputChange}></Input>
                            </Col>
                        </FormGroup>

                        {/* Submit */}
                        <FormGroup row>
                            <Col md={{size:10, offset:2}}>
                            {/* ^^^above renders out to be like <div class="col-md-10 offset-md-2"> */}
                                <Button type="submit" color="primary">
                                    Send Feedback 
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                    <div className="getResult"></div>
                </div>
            </div>
        </div>
        );
    }
}
export default Contact;
//now we tell our original app how to route to this componenet ContactComponent

/* WE HAVE NOW OFFICIALLY SET UP A "CONTROLLED FORM" - WHEREAS UNCONTROLLED IS DIFFERENT : useful when we need a qick/dirty way to set up uncontrolled form, or set up a react form and integrate it with non-react code. 
using uncontrolled forms can integrate react code with old non react code. */
// Controlled forms: react controls form state
// Uncontrolled forms: dom continues to handle the form state and react just retrieves the data when needed. the form element within the dom that acts as the single source of truth. instead of react. the way we retrieve that data is by using 'ref' to retrieve that data... in reactstrap, called innerRef precisely.
//(implementing an uncontrolled form with login modal in Header component now...)