//creating a new container component named Main
//strictly a CONTAINER COMPONENT  
  //now pasting everything from app.js to Main.js:
  import React, {Component} from 'react';
  // import {Navbar, NavbarBrand} from 'reactstrap' (moved to header);
  import Directory from './DirectoryComponent';
  import CampsiteInfo from './CampsiteInfoComponent';
  import Header from './HeaderComponent';
  import Footer from './FooterComponent';
  import { CAMPSITES } from '../shared/campsites';

//                          ^^^^dot dot slash means go down two folders!!!!

  class Main extends Component {
    constructor(props) {
      super(props);
      this.state= {
        campsites: CAMPSITES,
        // (Next after ^^^this we gotta pass it down as props to the directory component )
        selectedCampsite: null  //moved here from directoryComponent
      }
    }

    onCampsiteSelect(campsiteId) {  //changed campsite to campsiteId so we can be clear
      this.setState( {selectedCampsite: campsiteId} );       //setstate instead of =
      }
      //.setState changes the value of the selected campsite's property of state
      //in this case we updated the selected campsite property to the: campsite object that's passed into the method.
      //this is important: in react, you never wanna update the state directly.  Don't do:
      // this.state.selectedCampsite = campsite //by doing this you trigger a warning in consle that says DO NOT MUTATE STATE DIRECTLY
      //a constructor is where you can assign values to state properties directly with assignemnt opperator. Outside constructor ALWAYS USE SET STATE. DON'T USE =
      //because react has special things it does behind the scenes and you don't wanna bypass that. 
      // This is why react is declarative and NOT imperative.
      //next we have to trigger this method. when one click on a card.
  

    render() {
      return ( //   (taking out the className='App' below)
        <div>
          {/* Navbar component moved to Header.js */}
          <Header/>
          <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)}/>
          {/*         ^^^passed as a prop. We do not need the whoel campsite object.. just use campsiteId  */}
          {/* Setting custom attributes by using this.state.campsites */}
          {/* directlyComponenet don't have direct access to onsitesleect campsite but react lets us pass event handlers as other functions as props so we can take the arrow componenent and pass it Directy^^^above as props */}
          <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
          {/* the campsite info componenet expects us to pass an object. but now this.state.selectedcampsite is storing only an ID not an object. this is where the array filter can ehlp us:
          since we know the ID we can grab the entire array of campsite by this.state.campsite ...then we can filter through it for the object with ID that matches the id that we want.
          filter >> always returns an array, each campsite ID is unique, so this filter ID would only give us back something with only one object in it. 
          The campsiteinfo componenent expects us to send an object, not an array, so we'll extract an object by using the index at the end, and that'll send one campsite object, to the campsite info componenet. */}
          {/* Last thing is to move the onClick directory campsite function (very complex) */}
          {/* initially campsiteinfo expected us to pass a componenet but now this.state.selectedcampsite only stores an ID not object. this is when filter works. */}
          <Footer />
        </div>
      );
    };
  }
export default Main;  
  // export default App;
