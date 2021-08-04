
//very much like contactus.html page, in js
import React , {Component} from 'react';
// import {  Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';     //removed cardText & cardBody
            // formfeedback is to check form input and give feedback. 
//NOW^^^ we using redux store in reactApp we need to configure contact form to use redux store instead of contact component's local state.  all state data must be in redux store as it should be the single source of truth in app state.
//replacing reactstrap form componenets with ones from react-redux forms. Therefore, crossed out above, and now using:
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
                            //^ adding Errors due to redux validation,a nd then above the contact compoenent validation we need to first define few componenetns to help us w/ validation... 

//VALIDATION LOGIC REDUX:
const required = val => val
//^^^first function required receives value as arugment. this will be string value that receives. we know because all form inputs are received as strngs even if numbers. then inside functions we check if there are values that just cuz all form inputs are received as strings,even if numbers. then inside function we check if there's a val that's received (not undefined or null) thus allwe gotta put is val beaucse val would be falsy if undefined or null. then we check if length of string is greater than zero. 
// so we see if this fill has something in it thus true if something's in it, otherwise false if not. if returns false if it fails the test and creates an error.
const maxLength = len => val => !val || (val.length<=len);
//next, ^^^^^^, is called maxLength. the way it's called later requires us to be wrapping it around a function, so there are two arrow functions not just one. first takes max lenght second takes value. then from inner function we wanna return true, if max length hasn't been exceeded. so !val will return true if there is no value then max length clearly isn't exceeded. OR, we will also return true, if value's length is less or equal to maximum.
//if both condition returns false then this function will return false for maxLength, which means the test has been failed for maxlength thus create an error.
const minLength = len => val => val && (val.length >= len);
//^^ works similarly    wraps function isnide a function, and this inner function will return true (val), and the value is greater than and equal to minimum. And it will reutrn false, if either those conditions are false, and that'll mean it has failed a test for minLength and that'll create an error.
const isNumber = val => !isNaN(+val) 
//^^ wanna check if this shit is a number, so we use + to turn it into a number if it can be. and if value isn't a valid number then this + will turn it into a special value NAN, which is NOT a nubmer
                        //^^^and we'll check if the value is the opposite is an !isNan(+val), so if it's not a valid number then this'll utlimately return false, and if it is, then it'll return true. basically we are saying it's NOT NOTaNumber.
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
// ^^using a regEx to check for a valid email. more thorough than checking for valid symbol:
//to make sure if email begins a-z and contains only the chars valid in an email address which is 0-9, dot, percentage, plus or minus. then we see if there is an @ sign, then we check if there's only a-z, then \. and see if there's a .com or anything within [2,4].
//we put a .test after that to see if it passes the test.



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
        //next we can remove the handle-input-change and handle-blur methods, including this binding below since now we let react-redux take care of that behaviour. 
        // this.handleInputChange = this.handleInputChange.bind(this);
        // ^^^makes it so that we can use this. keyword inside handleinputchange to have it point to the correct object.
        this.handleSubmit = this.handleSubmit.bind(this);
        //^^also bind this event handler in the the constructor, so that when we refer this.state in the handlesubmit method, it knows to look for that state in the constructor of 'this.' compoenent. 
    }

    //FURTHERMORE WE CAN REMOVE THE WHOLE VALIDATE METHOD thanks to redux
    // validate(firstName, lastName, phoneNum, email) {
    //     //setting up errors object. property will hold error messages for the four fields IF there is an error.
    //     const errors = {
    //         firstName:'',
    //         lastName:'',
    //         phoneNum:'',
    //         email:''       
    //     }   //we initialize them as empty strings which means there are no errors
    //     if (this.state.touched.firstName) {
    //     //has it been touched?! if so is it less than two? if true then we'll set up error message that says it must be longer
    //         if (firstName.length<2) {
    //             errors.firstName = 'First name must be at least 2 characters';
    //         } else if (firstName.length > 15) { //if true then it must be 15 or less characters
    //             errors.firstName = 'First name must be 15 or less characters.';
    //         }   //use the same for last name as well
    //     }

    //     if (this.state.touched.lastName) {
    //     //has it been touched?! if so is it less than two? if true then we'll set up error message that says it must be longer
    //         if (lastName.length<2) {
    //             errors.lastName = 'Last name must be at least 2 characters';
    //         } else if (lastName.length > 15) { //if true then it must be 15 or less characters
    //             errors.lastName = 'Last name must be 15 or less characters.';
    //         }   
    //     }

    //     //next we use regex, regex = a way to specify a pattern to be matched, will return true or false whether ti's matched or not. what it's doing to checking the phone num value, and make sure it only include digits.
    //     const reg = /^\d+$/;    //does it contain only digits? this is a boolean check test        
    //     if (this.state.touched.phoneNum && !reg.test(phoneNum) ) {
    //         errors.phoneNum = 'The phone number should only contain numbers.';
    //     }

    //     if (this.state.touched.email && !email.includes('@')) {     ///has email been touched but does it NOT contain an @ symbol??  Then setting up an error message:
    //         errors.email='Email should contain an @ symbol';
    //     }
    //     return errors;
    //     //if there are any errors obj, if tehre are any validation errors for any fields then the corresponding property in error property should contain an error message. if not then it should contain empty string.
    //     //down @ render there needs to be an error as well because this error is locally scoped and not available in render.
    // }

    //REMOVING HANDLEINPUTCHANGE && HANDLEBLUR BELOW, because of letting redux take care of this behaviour:
    //corresponding with onBlur, we require this handleBlur function
    // handleBlur = (field) => () => { //because we pass in argument other than event we gotta do different here: wrap handleblur method in another function
    //wrap handleblur method in another function. also we use arrow function tod efine this method. //event handlers can be bound in react by using arrow function by arrow definition instead of using bind method in the constructor. again.  //so that we don't have to bind this. in this method as we did with others.
        // this.setState(  //used to change the touched object but we don't wanna change entire object so we only wanna change one of the properties inside of it. Doing it by using ...SPREAD syntax, will spread out this.state.touched object and then will update the property that corresponds to the [field]: that triggered the event, whether first name or last name or etc. We use computed property name syntax here to get the name of that property. We set the name of that property then to true so we knwo it's been touched.
            // {
                // touched: {...this.state.touched, [field]:true }
            // }   //next, onto validation!
        // )
    // }
    
    //Now adding two class methods, one to handle changes inf orm elements and the othe to handle submissions. 
    // handleInputChange(event) {
        // const target=event.target;
        // const name=target.name;
        // makes it easier to reference shit as in event.target, and event.target.name
        // const value=target.type==='checkbox' ? target.checked:target.value;
        //^^^^if type of form element that triggered this event is a checkbox, then we get the value target.checked attribute.t he checked attribute is a boolean attribute that can hold either true or false. if it's not a checkbox then we get the value from target's value.
        // this.setState(
            // {   //setting target's name by []. depending on which thing that triggered the event, could be first name, last name, email, etc
                //so name is taken from the input that has been changed
                // [name]: value   //we get the variable from the value from above
            // }   //to make this happen we need to put this.handleinputchange=this.handleinputchange.bind(this) few lines above
        // )
    // }

    //although despite of above, we still need handle submit method except changing from event to values and remove the this.state, and alert, changing them to values obj. 
    handleSubmit(values) {
        // console log & alert expects a string not an object so we use JSON.stringify --- makes a string out of a fucking object
        let tellMeCurrentState = "Current state is: " + JSON.stringify(values)
        console.log(tellMeCurrentState);
        alert(tellMeCurrentState);
        // lastly when you submit a form, it usually refreshes the entire page. don't wnat that. so stop with this line:
        // event.preventDefault();      <<this can be now removed because react.redux will handle this for us now.
    }
    
    // now wrap our return statement in a render since we switched from function to class
    render() {

        //REMOVED : ERROR VARIABLE IN THE RENDER MOETHOD IN THE RENDER METHOD THAT CALLED TEH VALIDATE METHOD.
        //thanks redux:
        // const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email);
        // ^^^  down @ render there needs to be an error as well because the above errors is locally scoped and not available in render.
        // ^^ passing the urrent values of firstNam lastNam email and phone which is conveniently stored in state. then that method will validate those fields, and RETURN error object, which is stored inside this varaible!! anytime there's a change in the error field this will be rerendered.
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
                    {/* Next in REDUX we change Form to LocalForm: just the start tag and then the end tag. */}
                    {/* we can stil use the handle submit method to handle form submission which is set up in the onsubmit method, in the form, which is now localForm. This shoudl be modified to work w/ react form.
                    by using (values => ths.handlesubmit(values) arrow function and then pass the value to the arrow function */}
                    <LocalForm onSubmit={values => this.handleSubmit(values) }>
                    {/* Previous: <Form onSubmit={this.handleSubmit}> */}
                    {/* In every form we need to set out the usual attributes. type, attribute, name, and placeholder. That's the form setup. 
                    Then, to make it into a controlled form, we set up the value of each input to this.state.statePropertyDefinedBefore
                    With the exception to the checkbox may we contact you (this.state.agree). 
                    Each state componenet get an onchange handler set to this.handleinputchange that we created before.  
                    Enter form also gets an onSubmit = this.handleSubmit*/}
                    
                    {/* REDUX: NOW ALL THE FORM GROUP COMPONENETS BELOW, WILL BE UPDATED TO THE ROW COMPONENENT W/ className of Formgroup, for we are no logner using formgroup with reactStrap and that only worked w/ reactstrap */}
                        {/* FIRST NAME */}
                        {/* <FormGroup row> */}
                        <Row className="form-group">
                            <Label htmlFor="firstName" md={2}>First Name</Label> {/* md={2} is the same as className=md-2 */}
                            <Col md={10}> {/* Col md {10} in curly braces: equivalent to div className=div-md-10. We can use them interchangeably to enter into the browser dom. */}
                                {/* INPUT: all input replaced with control.text thanks to REDUX, and also with this we can remove type="text" as would otherwise be w/ input 
                                also, for control componenets, we need to add a model attribute. We will name each attribute within control componenet accordingly. this tells redux value of each fill will be stored within the value, accordingly. starting with a dot .firstName. also need a classname=formcontrol to each of these contorl componenets.
                                before the input component we were using , to add form-control class..... but we ain't using that any more so add it manually!
                                finally remove value, invalid, onblur, onchange, etc... at this time.   */}
                                <Control.text model=".firstName" 
                                id="firstName" name="firstName" 
                                placeholder="First Name"
                                className = "form-control"
                                validators = {{ 
                                    //update the contact form!
                                    //each of the control componenents in the form, starting w/ first name, we will add new attribute called validators.
                                    //we need to add an atribute called validator.    
                                    //for value of that attribute we give it an object that contains functions that are appropriate for the componenent
                                    //so for FIRST NAME, we wanna give the required function, then the minlength function. and we will specifiy that we want minLenght that's 2, and maxLength that's 15. it'll be exactly the same for LastNames.
                                    required,
                                    minLength: minLength(2), 
                                    maxLength: maxLength(15)
                                    //it'll be the same for lastName so copy/paste
                                }}
                                // this is ADDED because of REDUX
                                // removing the rest of the attributes used for validation -- thanks to redux -- can be removed at this time
                                // value={this.state.firstName}
                                // invalid={errors.firstName} //is there an error message for this field? an empty string would evaluate as false, but if shit isn't empty string then it'd evaluate here is true, so it'd be true here. Then down at the <formfeedback> just below it gives the form feedback value for the field if user does put something erroneous.
                                // onBlur={this.handleBlur("firstName")}
                                // ^^so any time when user enter but moves away from this field that will fire this event handler.
                                // onChange={this.handleInputChange}
                                />
                                {/* <FormFeedback>{errors.firstName}</FormFeedback> NEED TO REMOVE ALL THE FORM FEEDBACKS AS WELL---- REDUX
                                Replacing it with errors: */} 
                                <Errors className="text-danger" //to make it red
                                        model = ".firstName" //to make it match the firstName to match the model of the componenet
                                        show="touched"      //cause the form filled to only show error messages if it's been touched by the user. same fucntionality as code before, as we did previous exercise, except simpler
                                        component = "div" // to wrap each error message in a div, telling the redux componenent
                                        messages = {{
                                            required: "Field Required",
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be at least 15 characters or less'
                                        }}      //this can be copied&pasted for the rest of the components
                                />
                            </Col>
                        </Row>

                        {/* LAST NAME */}
                        <Row className="form-group">
                            <Label htmlFor="lastName" md={2}>Last Name</Label>
                            <Col md={10}>
                                {/* each modal compoennet: add modal attribute, add form control className, and remove invalid, onblur, and invalid attributes  */}
                                <Control.text model = ".lastName" 
                                id="lastName" name="lastName"
                                className="form-control"
                                placeholder="Last Name"
                                //removing below thanks to redux:
                                // value={this.state.lastName}
                                // invalid={errors.lastName} 
                                //^^^is there an error message for this field? an empty string would evaluate as false, but if shit isn't empty string then it'd evaluate here is true, so it'd be true here. Then down at the <formfeedback> just below it gives the form feedback value for the field if user does put something erroneous.
                                // onBlur={this.handleBlur("lastName")}
                                // ^^so any time when user enter but moves away from this field that will fire this event handler.
                                // onChange={this.handleInputChange} 
                                validators = {{ 
                                    //each of the control componenents in the form, starting w/ first name, we will add new attribute called validators.
                                    //we need to add an atribute called validator.    
                                    //for value of that attribute we give it an object that contains functions that are appropriate for the componenent
                                    //so for FIRST NAME, we wanna give the required function, then the minlength function. and we will specifiy that we want minLenght that's 2, and maxLength that's 15. it'll be exactly the same for LastNames.
                                    required,
                                    minLength: minLength(2), 
                                    maxLength: maxLength(15)        //next, phoneNum is different
                                }}
                                />                                
                                {/* <FormFeedback>{errors.lastName}</FormFeedback> */}
                                <Errors className="text-danger" //to make it red
                                        model = ".lastName" //to make it match the firstName to match the model of the componenet
                                        show="touched"      //cause the form filled to only show error messages if it's been touched by the user. same fucntionality as code before, as we did previous exercise, except simpler
                                        component = "div" // to wrap each error message in a div, telling the redux componenent
                                        messages = {{
                                            required: "Field Required",
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be at least 15 characters or less'
                                        }}      //this can be copied&pasted for the rest of the components
                                />
                            </Col>
                        </Row>

                        {/* PHONE NUMBER */}
                        <Row className="form-group">
                            <Label htmlFor="phoneNum" md={2}>Phone</Label>
                            <Col md={10}>
                                <Control.text model=".phoneNum" 
                                id="phoneNum" name="phoneNum"
                                placeholder="Phone Number"
                                className="form-control"
                                //removing all below thanks to redux:
                                // value={this.state.phoneNum}
                                // invalid={errors.phoneNum} 
                                //^^^is there an error message for this field? an empty string would evaluate as false, but if shit isn't empty string then it'd evaluate here is true, so it'd be true here. Then down at the <formfeedback> just below it gives the form feedback value for the field if user does put something erroneous.
                                // onBlur={this.handleBlur("phoneNum")}
                                // ^^so any time when user enter but moves away from this field that will fire this event handler.
                                // onChange = {this.handleInputChange} 
                                validators ={{ //for phoneNum control we add required validator
                                    required,
                                    minLength: minLength(10),
                                    maxLength: maxLength(15),
                                    isNumber    //see if it is a number
                                }}       />
                                {/* <FormFeedback>{errors.phoneNum}</FormFeedback> */}
                                <Errors className="text-danger" //to make it red
                                        model = ".phoneNum" //to make it match the firstName to match the model of the componenet
                                        show="touched"      //cause the form filled to only show error messages if it's been touched by the user. same fucntionality as code before, as we did previous exercise, except simpler
                                        component = "div" // to wrap each error message in a div, telling the redux componenent
                                        messages = {{
                                            required: "Field Required",
                                            minLength: 'Must be at least 10 numbers',
                                            maxLength: 'Must be at least 15 numbers or less',
                                            isNumber: 'must be a number'  // if isnNum fails?
                                        }}      //this can be copied&pasted for the rest of the components
                                />
                            </Col>
                        </Row>

                        {/* EMAIL */}
                        <Row className="form-group">
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Control.text model=".email"
                                id="email" name="email"
                                placeholder="Email"
                                // removing all below thanks to REDUX
                                // value={this.state.email}
                                // invalid={errors.email} 
                                //^^^is there an error message for this field? an empty string would evaluate as false, but if shit isn't empty string then it'd evaluate here is true, so it'd be true here. Then down at the <formfeedback> just below it gives the form feedback value for the field if user does put something erroneous.
                                // onBlur={this.handleBlur("email")}
                                // ^^so any time when user enter but moves away from this field that will fire this event handler.
                                // onChange={this.handleInputChange} 

                                // email control we need just the required, and validemail functions for validators
                                validators = {{ //valid email we need just required && validEmail
                                    required,
                                    validEmail
                                }}
                                />
                                {/* <FormFeedback>{errors.email}</FormFeedback> 
                                similarly for email, below, we need to change model and give this an error message, for validEmail */}
                                <Errors className="text-danger" //to make it red
                                        model = ".email" //to make it match the firstName to match the model of the componenet
                                        show="touched"      //cause the form filled to only show error messages if it's been touched by the user. same fucntionality as code before, as we did previous exercise, except simpler
                                        component = "div" // to wrap each error message in a div, telling the redux componenent
                                        messages = {{
                                            required: "Field Required",
                                            validEmail: 'invalid email address!'    //for invalid email
                                        }}      //this can be copied&pasted for the rest of the components
                                />
                            </Col>
                        </Row>

                        {/* MAY WE CONTACT YOU? */}
                        <Row className="form-group">
                            <Col md={ {size:4, offset:2} }>
                            {/* ^^^ Instead of just a number behind it, here we give it an object that includes a size, and offest, so to define an object, we gotta give it a second set of {} braces. This ives it a responsive column size, and offest, at the same time. 
                            This renders out to be like <div class="col-md-4 offset-md-2" */}
                                {/* <FormGroup check> Formchecked has to be renamed into a div with the attribute of formcheck */}
                                <div className="form-check">
                                    <Label check>
                                        {/* inbox with checkbox has to be replaced into Contorl.Checkbox --redux */}
                                        {/* old: <Input type="checkbox"  */}
                                        <Control.checkbox model=".agree"
                                        name="agree"
                                        className="form-check-input"  //different name than the above. needed to add input on top of form-check
                                        // erasing this below thanks to redux:
                                        // checked={this.state.agree}
                                        // onChange = {this.handleInputChange} 
                                        />  {' '}   {/* Using this for space char */}
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </div>
                            </Col>
                            <Col md={4}>
                                {/* select will be changed to contorl.select */}
                                <Control.select model=".contactType" 
                                name="contactType" 
                                className="form-control" //class name of form-control will still be applied
                                // value={this.state.contactType} onChange={this.handleInputChange}
                                >
                                    <option>By Phone</option>
                                    <option>By Email</option>
                                </Control.select>
                            </Col>
                        </Row>

                        {/* Your Feedback */}
                        <Row className="form-group">
                            <Label htmlFor="feedback" md={2}>Your Fucking Feedback</Label>
                            <Col md={10}>
                                {/* <Input type="textarea" changed to control.textarea --- redux */}
                                <Control.textarea model=".feedback" 
                                id="feedback" name="feedback"
                                rows="12" className="form-control"
                                // erased thanks to REDUX:
                                // value={this.state.feedback}  
                                // onChange={this.handleInputChange} 
                                />
                                {/* ^^^changed the above into a self closing tag */}
                            </Col>
                        </Row>

                        {/* Submit */}
                        <Row className="form-group">
                            <Col md={{size:10, offset:2}}>
                            {/* ^^^above renders out to be like <div class="col-md-10 offset-md-2"> */}
                                <Button type="submit" color="primary">
                                    Send Feedback 
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                    {/* <div className="getResult"></div> */}
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