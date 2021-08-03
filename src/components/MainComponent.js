//creating a new container component named Main
//strictly a CONTAINER COMPONENT  
  //now pasting everything from app.js to Main.js:
  import React, {Component} from 'react';
  // import {Navbar, NavbarBrand} from 'reactstrap' (moved to header);
  import Directory from './DirectoryComponent';
  import CampsiteInfo from './CampsiteInfoComponent';
  import Header from './HeaderComponent';
  import Footer from './FooterComponent';
  import Home from './HomeComponent';
  import Contact from './ContactComponent';
  // ^^^routing it from ContactComponenet.js
  import { Switch, Route, Redirect } from 'react-router-dom';
  // ^^^  to set up brains of our router so they know where to send users when thye click on different things with their app. Before this, when we went app it showed us directory view default. we gonna change by setting default homepage view. 
  // one of things we gotta do we gotta erase below, the clicking/selecting campsite for more info. This won't be done now after adding this.
  import { CAMPSITES } from '../shared/campsites';
                        //   ^^^^dot dot slash means go down two folders!!!!
  import { COMMENTS } from '../shared/comments';
  import { PARTNERS } from '../shared/partners';
  import {PROMOTIONS} from '../shared/promotions';
  // After putting all of this ^^^{ } we'll put it in Main Componenet's this.state 
  import About from './AboutComponent';

  class Main extends Component {

    constructor(props) {
      super(props);
      this.state= {
        campsites: CAMPSITES,
        // (Next after ^^^this we gotta pass it down as props to the directory component )

        // selectedCampsite: null  //moved here from directoryComponent
        // ^^^deleted after route switching
        comments: COMMENTS,
        partners: PARTNERS,
        promotions: PROMOTIONS
      };
    }

    // Below is now deleted because of route switching:
    // onCampsiteSelect(campsiteId) {  //changed campsite to campsiteId so we can be clear
      // this.setState( {selectedCampsite: campsiteId} );       //setstate instead of =
      // }
      //.setState changes the value of the selected campsite's property of state
      //in this case we updated the selected campsite property to the: campsite object that's passed into the method.
      //this is important: in react, you never wanna update the state directly.  Don't do:
      // this.state.selectedCampsite = campsite //by doing this you trigger a warning in consle that says DO NOT MUTATE STATE DIRECTLY
      //a constructor is where you can assign values to state properties directly with assignemnt opperator. Outside constructor ALWAYS USE SET STATE. DON'T USE =
      //because react has special things it does behind the scenes and you don't wanna bypass that. 
      // This is why react is declarative and NOT imperative.
      //next we have to trigger this method. when one click on a card.
  

    render() {
      //creating homepage using arrow function. RInstead of function declaration: it's a feature of arrow functions: that has to do with feature of this.keyword inside keywords. 
      //arrow functions inhereit THIS of their parent scope. if we had used the function declaration then we use this. inside of it, it wouldn't have pointed to the state of their parent class, and it would have actually been undefined!
      //so we have to use arrow function below so we can easily get the data from the main componenet state.
      const HomePage = () => {
        //only accessible within main componenent which is why it's locally scoped. It just acts as a wrapper for home componenet for now. to be added more alter.
        return (
          // Re rendering home component we will pass in three props one for each item we wanna feature on homepage.. featured promotion and featured partner. we use filter method like this.state.campsites.promotions or .partners , and filter returns a new array. It returns one object. and we use array index zero t pull the object out of the array, then we pass it to the home component as props.
          //this is repeated with promotions, with .filter, as well, logic is the same. Pass [0] to the home component as props.
          //psame as partner:
          <Home
              campsite={ this.state.campsites.filter(campsite => campsite.featured)[0] }
              promotion={ this.state.promotions.filter(promotion => promotion.featured)[0] } 
              partner = {this.state.partners.filter(partner => partner.featured)[0]}   
              
              />
          
        );
      };

      // Const homepageWithId here, with =() = function cuz again it receives props in the bracket, in this case we pass in match, and we use it by this.
      const CampsiteWithId = ( {match} ) => {
        return (  //render the campsite info componenet in here, passing certaing thing as props, one campsiteInfo campsite obj, then all the comments for taht site.
          <CampsiteInfo 
          campsite={this.state.campsites.filter(campsite=>campsite.id === +match.params.campsiteId)[0] } 
          comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}    />
            //^^^we hae all campsite info inside main component state. and comments. use this.state.campsites. 
            //then we filter and look for the campsite object that has the ID that matches what stored inside match.params.campsiteID
            //because the value is stored as a string maybe we use a unary plus operator, which is +match.params.campsiteId >>> when you have number stored as a string & you wanna convert it into a number, this is how you do it.
            //anytime you put a + in front of a "666666" in the console, whatever numbers within the " " will become num.    i.e. type in console.log( typeof(+"1") )
            //since filter returns an array, i want the campsite object, i'll use a zero index at the end to fetch the object.
            //then for COMMENTS, need to filter out whatever comment that matches the campsiteId. Then here we gotta do the whole array, not just a single comment, so no need for zero index behind it.
            )
      }

      return ( //   (taking out the className='App' below)
        <div>
          {/* Navbar component moved to Header.js */}
          <Header/>
            {/* Setting up some Router Logic under Header: */}
          <Switch>
            <Route path='/home' component={HomePage} />
            {/* Two paths, (1) Anything tries to goto the home, send it to Homepage
                        ^^^ also same as typing /home on URL */}
            
            <Route exact path='/directory' render={ () => <Directory campsites={this.state.campsites} />} />
            {/* 2nd path: w/ boolean attribute 'exact'. Thsi path will be directory, and next tot hat it's a render attribute that set up the old arrow function that returns the Directory component.  */}
            
            <Route path='/directory/:campsiteId' component={CampsiteWithId} />
            {/* Adding ROUTING PARAMETER, path to directory/:campsiteId -> colon is important because what follows a forward slash will be a parameter and it takes whatever taht is, and puts it in the property, campsiteId. Route comp itself named match itself in its state, which has a property called params, and the campsiteId gets stored as aproperty of that params object.
            This route is made when there's a {campsiteWithId} , and then the routes match object gets passed to the campsite with id componenet as a prop automatically... we don't have to specify it. 
            Next is to create campsitewithID component, inside the mainComponenet after Homepage, with =() = function cuz it receives props in the bracket, in this case we pass in match.*/}
            
            <Route exact path='/contactus' component={Contact} />
            {/* ^^^telling our browser whenever in addressbar matches /contactus then show this component. This is different from how we routed directory component, as for directory, we used attribute we used render, and gave it a function w/ jsx with angle brackets.
            but with contact component, we used componenet attribute and give it a name without hte jsx angle brackets...
            in direcotry we passed state data. If we do the same as props to the componenet we are routing to, good rule of thumb is to use RENDER SYNTAX. 
            But we we are just routing compoenent without passing along state data then we do this state comopnenet attribute. 
            It also generated a URL on upon clicking, /contactus */}

            {/* <Route exact path='/aboutus' component={About} /> */}
            {/* ^^^doesn't work because ti doesn't pass states */}
            {/* We can ALWAYS use render below, vvv     as opposed to component. */}
            <Route exact path='/aboutus' render={ () => <About partners={this.state.partners} />} />
            
            
            
            <Redirect to='/home' />
            {/* This redirects to the home route like a default statement, like a swtich default statement. They act in the same logic as switch statement. any routing comes through will goes through these three switch statements until it finds its destination. When none it goes to /home (which is the switch default) */}
            {/* ^^^ (removed onClick={campsiteId => this.onCampsiteSelect(campsiteId)} since react router) */}
                {/*             ^^^passed as a prop. We do not need the whoel campsite object.. just use campsiteId  */}
                {/* Setting custom attributes by using this.state.campsites */}
                {/* directlyComponenet don't have direct access to onsitesleect campsite but react lets us pass event handlers as other functions as props so we can take the arrow componenent and pass it Directy^^^above as props */}
                
                {/* <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />  This is now removed because of react router*/}
                {/* the campsite info componenet expects us to pass an object. but now this.state.selectedcampsite is storing only an ID not an object. this is where the array filter can ehlp us:
                since we know the ID we can grab the entire array of campsite by this.state.campsite ...then we can filter through it for the object with ID that matches the id that we want.
                filter >> always returns an array, each campsite ID is unique, so this filter ID would only give us back something with only one object in it. 
                The campsiteinfo componenent expects us to send an object, not an array, so we'll extract an object by using the index at the end, and that'll send one campsite object, to the campsite info componenet. */}
                {/* Last thing is to move the onClick directory campsite function (very complex) */}
                {/* initially campsiteinfo expected us to pass a componenet but now this.state.selectedcampsite only stores an ID not object. this is when filter works. */}
          </Switch>
          <Footer />
        </div>
      );
    };
  }
export default Main;  
  // export default App;
