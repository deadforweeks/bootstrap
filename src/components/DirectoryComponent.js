//PRESENTATIONAL COMPONENT: restructuring the Directory component as a purely presentational component.

//if we want multiple componenets to have the same access to read only compoennet you have to MOVE A STATE UP. 'Lifting State Up'
//in part 2 we will move something up from DIRECTORY componenet to parent componenet, APP.
//app componenet renders the directory so APP is componenet and DIRECTORY is child.
import React, {Component} from 'react'; //before {Componenet} was up there but now it's removed because we've successfully transitioned to functional componenets
import { Card, CardImg, CardImgOverlay,  CardTitle } from 'reactstrap';     //removed cardText & cardBody
// Importing card componenets from reactbootstrap^^^ to be referred to from down render() parts of the campsites (return div...)
// import CampsiteInfo from './CampsiteInfoComponent';   (this is now moved to main componenet)

//before we renderd stuff that didn't render or contain any state. such componenents are great components are good to turn into functional componenennt. We can turn the smaller componenet to functional componene.t
function RenderDirectoryItem( {campsite, onClick} )    {
                              //^^^they are passed via a prop object, framed like this {campsite , onClick}
    return (
        <Card onClick = { () => onClick(campsite.id) } > 
                             {/* This ^^^will then store the id of the oncampsiteselect(campsiteId) component and it will store id from the MainComponenet states' selected campsite property . we need to also change campsite info componenet.*/}
                    {/* The directory cmponenet no longer have any direct access to the ONCAMPSITE method, but react lets us pass react handlers as other handlers as PROPS. We can take the arrow function and take it to the main componenet and pass an onclick in MainComponenet directory as PROP. */}
                    
                        {/* Hereby replacing img and other tags with CardImg & Card__..... */}
                        <CardImg width="100%" src={campsite.image} alt={campsite.name}/>
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                            {/* <p>{campsite.description}</p> */}
                            {/* <p>Elevation: {campsite.elevation}</p> */}
                        {/* We see that all of this^^^ is still wrapped inside a <div> that has a unique key. */}
                        </CardImgOverlay>
                    </Card>
    );
}


///turning directory componenet into a presentation componenet. no longer gonna hold any state componenet
// class Directory extends Component { (changing thsi into a function below:)
function Directory(props) {
// This means we are making class inhreitance, child class inheritng parent class 
    // constructor(props) {    //props is important keyword in react. whenever you create one you must include the arguemnt named props which is short for properties.
    //props is how we pass from a parent component to a child componenet.
    //STATE, is stuff that is dynamic. State is things we wanna change.
        //gotta use 'super(props)' to inherit;
        // super(props);
        // this.state = {  
            //different campsites get stored in here. each campsites get different properties in it, like name, image path, elevation, so on. best way to rep taht is gonna be an array of objects.
            // selectedCampsite:null  //for the selection of cards. (can ake this out also now cuz mainComponenent.js)
        // };     //end of this.state -- this state gets defined in the constructor. not passed in, but defined right there. always gotta hold an object.
    // }

    // renderSelectedCampsite(campsite) {
    //     if (campsite) { //check if campsite actually has objects in it (if not it'd come back null or undefined)
    //         //if so we create a new card componenet giving more information:
    //         return (
    //             // <Card>
    //             //     <CardImg top src={campsite.image} alt={campsite.name} />
    //             //     <CardBody>
    //             //         <CardTitle>{campsite.name}</CardTitle>
    //             //         <CardText>{campsite.description}</CardText>
    //             //         <CardText>Elevation: {campsite.elevation}</CardText>
    //             //     </CardBody>
    //             // </Card>
    //         )
    //     };
    //     return <div/>    //we'll set up an if we didn't make it through the IF blcok, if the campsite didn't make it in, or if it's falsey, then return a simple empty DIV
    //     //lastly we need to call the whole function we just created
    // }
    

    //HAS TO HAVE A RENDER METHOD AT THE END
    // removing rendering { now because it is a function...}
        //setting up a direcotry variable that's gonna contain an array of elements
        //if you give react an array of elements to render ti'll just pull out elements from the array and render them. it just knows what to do.
        //how do we create this array? use data from local state. we'll grab it from the state.
        // const directory = this.state.campsites.map(campsite => { //since previously it's been fetched via states, it's nwo being passed via props
        //this^^^^ is called local state because other parts of the app canot see it. Only way other components can see it is if we pass it. To pass from componenet A to B, incl it ass an attribute when you render compoenent B inside componenet A
            //we need a return from tis arrow function.
            //MAP IS ONE OF THE MOST USEFUL THINGS TO KNOW.
        const directory = props.campsites.map(campsite => {
                        // ^^^ whereas we had this.props.campsites before we no longer need it due to function
                            // ^^^^^ changed from state to props
                            //.map is a fancy react way of listing out things. key is a way React uses to identify ID's
          return (          //return is a part of the this.props.campsites.map
            //every child in list needs a key prop: ignorable but we will fix it in this case
            //list here doesn't refe to HTML list like OL UL LI, but can also apply to HTML lists as well.
            //To render array of elements most eficiently you need to add a unique key attribute to the topmost element in each array item
            //this helps react keep track of this list of items, and render changes to it efficiently.
            //the unique ID we gave each campsite in the state can come in handy here
            //(key={campsite.id})
            <div key={campsite.id} className="col-md-5 m-1"> {/* m-1 is margin-one */}
                    {/* <Card onClick = { () => this.onCampSiteSelect(campsite) } >    */}
                    {/* ^^^ we pass an arrow function which contains a call to the oncampsiteselect method. passing in the current (campsite)obj we got from the props data. 
                    Now we set it up so whenever someone click on a campsite, that campsite becomes the LOCAL state. 
                    Now we gotta display the campsite, to the local view*/}

                    {/* Moved all this nonsense below up to the Render Directory Item function */}
                    {/* <Card onClick = { () => this.props.onClick(campsite.id) } >  */}
                                        {/* This ^^^will then store the id of the oncampsiteselect(campsiteId) component and it will store id from the MainComponenet states' selected campsite property . we need to also change campsite info componenet.*/}
                    {/* The directory cmponenet no longer have any direct access to the ONCAMPSITE method, but react lets us pass react handlers as other handlers as PROPS. We can take the arrow function and take it to the main componenet and pass an onclick in MainComponenet directory as PROP. */}
                    
                        {/* Hereby replacing img and other tags with CardImg & Card__..... */}
                        {/* <CardImg width="100%" src={campsite.image} alt={campsite.name}/> */}
                        {/* <CardImgOverlay> */}
                            {/* <CardTitle>{campsite.name}</CardTitle> */}
                            {/* <p>{campsite.description}</p> */}
                            {/* <p>Elevation: {campsite.elevation}</p> */}
                        {/* We see that all of this^^^ is still wrapped inside a <div> that has a unique key. */}
                        {/* </CardImgOverlay> */}
                    {/* </Card> */}
                    {/* //setting up an event handler for when one of these cards are CLICKED. When clicked we'll get a new card on the bootm that has more details on that particular campsite. */}
                    {/* ^^^^All of this will be changed with function componenets below: */}
                    <RenderDirectoryItem campsite={campsite} onClick={props.onClick} />
                </div>
            );
        }); //end of render
        //map needs a callback function and then be told what to do from there
        //so what happens above, is this MAP will go through all the campsites from the local state, and it'll make a new array where each array item contains this.samesetOfJS.elements but using a different campsite of each item. Whole array will be rendered in this bootstrap row.
        //map is one of the most useful things to know.
 
        return (    
        //FINAL RETURN FOR THE WHOEL ENTIRE DIRECTORY where as other returns are in OTHER RENDERING COMPONENETS
        //while most returns are used to pass datas constained inside  componenet, when we are ready to break out of this componenet and send data back to the parent component, this will happen in the final return
        //this ^^^ is the right return because it's in the top level 
            // has to return a SINGLE REACT ELEMENT
            <div className="container">
                <div className="row">
                    {/* USE JS INSIDE OF JSX IS TO USE CURLY BRACES 
                    diretory will use little d instead of big d. directory variable, and Directory componenet, are two separate things.*/}
                    {directory}    
                </div>
                {/* THE DESCRIPTION CARD AT THE BOTTOM OF PAGE: */}
                {/* <div className="row">
                    <div className="col-md-10 m-1">
                        {this.renderSelectedCampsite(this.state.selectedCampsite)}
                    </div>
                </div> */}
                {/* <CampsiteInfo campsite={this.state.selectedCampsite} /> (moved to main component below where we have directory)*/}
                {/* We take state and pass it as poperty from child */}
                {/* <ExampleParentComponent/> */}
                {/* Rendering this will^^^ see the number 333 rendered bottom page... activate above to see example written below*/}
            </div>
        );
    
    // exporting component goes at the bottom: which isn't required compoenent per se but useless without componenet
}

//comment this out before continuing onto part 2 componenets
class ExampleParentComponent extends Component {
    constructor(props) {
        super(props);   //inherit the properties from compoennet
        this.state = {
            number: 333+832
        }
    }
    //constructor, then render
    render() {
        return <ExampleChildComponent number={this.state.number} greeting="* * * * * END OF COMPONENT * * * * *"/> //this comes out as 333 as defined above
        // Second componenet is the CHILD OF THE FIRST COMPONENET cuz it's being rendered inside of it
    }
}

class ExampleChildComponent extends Component {
        //doesn't need a constructor cuz it ain't gonna hold a state but it must, like all class componenets render a return
        render() {
            return <div>Start of comments:  {this.props.number} {this.props.greeting} Comments:
                   </div>
            {/* // You cannot change props^^ inside this .props.  */}
            {/* //props is a read only variable. This is important to react's one way flow architecture. You can only pass fromp parent to child. */}
        }
}
//props varaible does not have to be just state, but you can pass other data. Like a string literal.
//comment

export default Directory;   //exporting directory class as a default then also goto app.js and import directory at the top.