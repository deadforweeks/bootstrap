import React, {Component} from 'react';

class Directory extends Component {
// This means we are making class inhreitance, child class inheritng parent class 
    constructor(props) {    //props is important keyword in react. whenever you create one you must include the arguemnt named props which is short for properties.
        //gotta use 'super(props)' to inherit;
        super(props);
        this.state = {  
            campsites: [
                // array of objects are common ways that data are represented
                {
                    id:0,
                    name: 'React Lake Campground',
                    image: 'assets/images/react-lake.jpg',
                    elevation:1233,
                    description: "Nestled in the foothills of the Chrome Mountains this campsite on the shores of the pristine REact Lake is a favourite for fly fishers"
                },
                {
                    id:1,
                    name: 'Chrome River Campground',
                    image: 'assets/images/chrome-river.jpg',
                    elevation:877,
                    description: 'Spend few sunny days & starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River.'
                },
                {
                    id:2,
                    name: 'Breadcrumb Trail Campground',
                    image: 'assets/images/redux-woods.jpg',
                    elevation:2941,
                    description: "Let nuCamp be your guide to this off-the-beaten-path, hike in somewhere campground"
                },
                {
                    id:3,
                    name: 'Redux Woods Campground',
                    image: 'assets/images/redux-woods.jpg',
                    elevation:42,
                    description: "You'll never wanna leave this hidden gem, deepw ithin the lustrous Redux Woods."
                }
            ],  
            //different campsites get stored in here. each campsites get different properties in it, like name, image path, elevation, so on. best way to rep taht is gonna be an array of objects.
        };     //end of this.state   //this state gets defined in the constructor. not passed in, but defined right there. always gotta hold an object.
    }

    //HAS TO HAVE A RENDER METHOD AT THE END
    render() {
        //setting up a direcotry variable that's gonna contain an array of elements
        //if you give react an array of elements to render ti'll just pull out elements from the array and render them. it just knows what to do.
        //how do we create this array? use data from local state. we'll grab it from the state.
        const directory = this.state.campsites.map(campsite => {
            //we need a return from tis arrow function.
            return (
                <div className="col">
                    <img src={campsite.image} alt={campsite.name}/>
                    <h2>{campsite.name}</h2>
                    <p>{campsite.description}</p>
                </div>
            )
        }); //end of render
            //map needs a callback function and then be told what to do from there
        //so what happens above, is this MAP will go through all the campsites from the local state, and it'll make a new array where each array item contains this.samesetOfJS.elements but using a different campsite of each item. Whole array will be rendered in this bootstrap row.
 
 
        return (
            // has to return a SINGLE REACT ELEMENT
            <div className="container">
                <div className="row">
                    {/* USE JS INSIDE OF JSX IS TO USE CURLY BRACES 
                    diretory will use little d instead of big d. directory variable, and Directory componenet, are two separate things.*/}
                    {directory}    
                </div>
            </div>
        );
    }
    // exporting component goes at the bottom: which isn't required compoenent per se but useless without componenet
}

export default Directory;   //exporting directory class as a default then also goto app.js and import directory at the top.