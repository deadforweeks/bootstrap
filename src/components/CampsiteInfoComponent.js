import React from 'react';  //REMOVED {component} as well
import { Nav, Navbar, NavbarBrand, NavbarToggler, 
    Collapse, NavItem, Jumbotron, Breadcrumb, BreadcrumbItem, Col, Row,
     Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button, 
    Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
// import {  Breadcrumb, BreadcrumbItem } from 'reactstrap';     //removed cardText & cardBody
import {Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


// import CampsiteInfo from './CampsiteInfoComponent';

// Changing things to componenets; we need to spin out three componenets. ONe for each class component.
//render campsite, render comments, and one render.     each will handle different parts.
// class CampsiteInfo extends Component {

    function RenderCampsite({campsite}) {
        return (
            <div className="col-12 col-sm-12 m-2 selectedCamp">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        {/* <CardTitle>{campsite.name}</CardTitle> */}
                        <CardText>{campsite.description}</CardText>
                        <CardText>Elevation: {campsite.elevation}</CardText>
                        {/* <CardText>Comment: {campsite.comments.rating}</CardText> */}
                    </CardBody>
                </Card>
            </div>
        )
    }
    function RenderComments ( {comments,
    addComment, campsiteId } )      //using object destructuring here from the parameter list to grab the props addcomment and campsiteID
    //when this is done {} it's destructuring something from a property
    {
        if (comments) { //truthy statement if comment is there
          return (
            <div className="col-11 col-sm-11 ml-4 mt-1 mb-4 comments">
                <h3> Comments for this great campsite:</h3>
                {/* <small>We encourage you to read the original camper's experience on the first premise first day before it all went downhill from there.</small> */}
                    {comments.map(comment => {
                    return (
                        <div key={comment.id}><br/>
                            <strong>{comment.author} wrote on {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} :</strong>
                            <p></p>
                            <p className="userComment">"{comment.text}"<br/>
                            <small>(Unformatted date): {comment.date} </small></p>
                        </div>

                    );
                })};
                <CommentForm campsiteId={campsiteId} addComment={addComment} />
                {/* ^^^then we gonna pass it one more time to the comment form componenet, we aren't doing anything in this compoenent w/ these props except just pass them to child componenet CommentForm  */}
            </div>    
          );
        };
        return <div/>;   //else
    }

    function CampsiteInfo(props) {
        if (props.campsite) {   //removed this. since it's now a function (from render() to campsiteInfo)
            return (
                <div className="container">

                    {/* Breadcrumb starts here: we use props.campsite.name to name things dynamically */}
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h2 className="ml-2">{props.campsite.name}</h2>
                        </div>
                    </div>                    

                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />    {/*          before: {this.renderCampsite(this.props.campsite)} */}
                        {/* <RenderComments comments={props.campsite.comments} />    before: {this.renderComments(this.props.campsite.comments)} */}
                        {/* Above no longer works ^^^^^^ because we have comments in its own js file now. Replace above with the following: */}
                        <RenderComments 
                            comments={props.comments} 
                            //from this component we'll now pass that addComment prop along with the rendercomments componenet along with the campsite's ID:
                            addComment={props.addComment}
                            campsiteId={props.campsite.id}
                        />
                    </div>
                </div>
            );
        }
        return <div />;
    }
    //^^^ the above was modified from the following past nonsense:
    // render() {
    //     if (this.props.campsite !== null) {
    //         return (
    //             <div className="row">
    //                 {this.renderCampsite(this.props.campsite)}
    //                 {this.renderComments(this.props.campsite.comments)}
    //             </div>
    //         );
    //     } 
    //         return <div/>;        
    // }

    class CommentForm extends React.Component {

        constructor(props) {
            super(props);
    
            this.state = {
                isNavOpen: false,
                // ^^^to serve as a toggle button state
                // isModalOpen: false  // For modal to be abled to be opened and closed we need to add a boolean property within the componenet state called, isModalOpen, inittially set to false. this will keep track of whether modal is open/closed. 
                                    //similar to toggleNav() except toggleModal() like below
            };
        }
            
        toggleModal = () => {
            this.setState( //setState(), not state. Using a not logical operator:
                { isModalOpen: !this.state.isModalOpen }
            );  //^^^we also need to bind the above to the constructor
        }

            handleSubmit(values) {   
                // console log & alert expects a string not an object so we use JSON.stringify --- makes a string out of a fucking object
                let tellMeCurrentState = "Current state is: " + JSON.stringify(values)                
                console.log(tellMeCurrentState);
                // alert(tellMeCurrentState);

                this.toggleModal();
                // lastly when you submit a form, it usually refreshes the entire page. don't wnat that. so stop with this line:
                // event.preventDefault();      <<this can be now removed because react.redux will handle this for us now.
            
                this.props.addComment(this.props.campsiteId, values.rating, values.author, values.text);
                //^^finally in the commentform componenet we'll use this props in the handlesubmit method, we'll add this line ^^ so when the form's submitted, the addComment actionCreator will create an action, using the values from this form. then this action will get dispatched to its reducer which will update the state. console.log and alert can be removed now.
                //now this finally enables updating comments to happen
            }

            // this.toggleNav = this.toggleNav.bind(this);
            // this.toggleModal=this.toggleModal.bind(this);
            // this.handleLogin = this.handleLogin.bind(this);
            //^^^binding shit to the compoennet. so when toggle nav is called, then this.keyword insdie it refers to the correct component.
            //ultimately these properties above are set @ handleLogin with alert w/ this.uesrname.value, this.password.value, this.remember.checked . Those were nt in the constructors as we could see 
            //next part: so we need to make sure they're being set by pulling the values from the forms correctly. this is where we use react innerRefs.
    
        render() {

            const required = val => val && val.length;
            const maxLength = len => val => !val || (val.length <= len);    //function inside a function
            const minLength = len => val => val && (val.length >= len);     //function inside a function

            return (
                <React.Fragment>
                    {/* <LocalForm> */}
                    <Button outline onClick={this.toggleModal}>
                        <i className="fa fa-pencil fa-lg"/> Submit Comment
                    </Button>

                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}> 
                            {/* ^^^^If this is just replaced as {true} then it will always pop up. */}
                            {/*^^^ isOpen predefines whether this modal is open or not. When this set to false it'll be close, if state set to true then modal will be visible. 
                            For toggle attribute we set it to this.toggleModal*/}
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                            {/* Toggle is added^^ to close the modal when it's open */}
                
                    <ModalBody>
                
                    {/* <Form onSubmit={this.handleLogin}> */}
                    <LocalForm onSubmit = {values => this.handleSubmit(values)}>
                        
                        <Row className="form-group">
                            <Label htmlFor='rating' md={12}>Rating</Label>
                            <Col md={10}>
                            <Control.select model=".rating" 
                                name="rating" id="rating" defaultValue={1}
                                className="form-control" //class name of form-control will still be applied
                                // value={this.state.contactType} onChange={this.handleInputChange}
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>

                                </Control.select>
                            
                                {/* <Errors
                                    className="text-danger"
                                    model=".rating"
                                    show="touced"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength:'Must be 2 char',
                                        maxLength: 'Must be under 15 chars'
                                    }} /> */}
                            </Col>
                        </Row>

                        <Row className="form-group">
                        <Label htmlFor='rating' md={12}>Author</Label>
                            <Col md={10}>
                                <Control.text model='.author' 
                                id='author' name='author'
                                placeholder="Author:" 
                                className="form-control"
                                validators={{
                                    required,
                                    minLength: minLength(2),
                                    maxLength: maxLength(15)
                                }} />
                            
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength:'Must be at least two characters',
                                        maxLength: 'Must be under fifteen characters'
                                    }} />
                            </Col>
                        </Row>

                        <Row className="form-group">
                        <Label htmlFor='rating' md={12}>Comment</Label>
                            <Col md={10}>
                            <Control.textarea model=".text" 
                                id="text" name="text"
                                rows="6" className="form-control"
                                // erased thanks to REDUX:
                                // value={this.state.feedback}  
                                // onChange={this.handleInputChange} 
                                />
                            
                                {/* <Errors
                                    className="text-danger"
                                    model=".text"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength:'Must be 2 char',
                                        maxLength: 'Must be under 15 chars'
                                    }} /> */}
                            </Col>
                        </Row>

                        <Button type="submit" value="submit" color="primary">Submit</Button>
                    </LocalForm>
                        {/* This way now when we submit shit into the browser, it's able to pull the form data with the inner refs and then load them into the component state and echo it back to us in the alert. This is how we can access form values from a react compmenent without having to do all the fucked up setup of control form...... controlled forms are still good way but this works as well.  */}
                    {/* </Form> */}
                </ModalBody>
                </Modal>
                </React.Fragment>
            )
        }
    }

export default CampsiteInfo;