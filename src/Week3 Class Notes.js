//OBJECT DESTRUCTURING
const hotel = {
    id:1,
    city:"Honolulu Crime District",
    name:'HOtel Honolulu',
    operational: false
  }
  console.log(hotel);
  // const id = hotel.id;
  // const city = hotel.city;
  // const name = hotel.name;
  
  const {id,city,name} = hotel
  
  function logHotelInfo1(aa) {
    const id = aa.id;
    const name = aa.name;
    const city = aa.city;
    console.log(`Number ${id} : ${name} is located in ${city}.`);
  }
  console.log( logHotelInfo1(hotel) );
  //same function as above^^^
  
  
  function logHotelInfo2( {id,name,city} ) {
    //this tells that an object iwll be passed with these three {} properties. It could have more properties, but the three are the ones we WANT from the same object. varaibles will be created using these three names, and their rallies will be taken from corresponding porperties of what properties will be passed in. it's doing exactly what we did in the first function: except a short way of doing it.
    console.log(`Order number ${id} says that the porperty of ${name} is located in the place of ${city}... `)
    //it produces the same effect as loghotelinfo1, faster to write, and does the same thing. 
  }
  logHotelInfo2(hotel);
  
  // const {property1, property2} = someObject;
  //when you see ^^^ curley braces on left side of operator, OR you see it being used in fucntions like this:
  // function someFunction( {property1, property2} )
  //that means destructuring is taking place. It's saying, here's an object, look inside it for these property names, and assign their values to variables using those proeprty names. 
  //basically, the variable property1 created with the value from someObject.property1, and variable property2 is created from the value of someObject.property2
  
  //there is a destructuring syntax for arrays as well.
  
  //container componenets:
  // fetching/managing state data, passing data to child componenents to be rendered. they don't do any rendering themselves. not all react components need to render UI. focused on management of data instead.
  
  //presentational componenets are strictly focused on UI; styles, colours, etc.
  //presentational componenets typically won't hodl any state data, and only use data handed to them by PROPS. if they hodl any state data, then it'd only be about the current state of UI(window size or if modal is open).
  
  //can be referred to aka......
  //fat vs skinny components - fat stores data, skinny doesn't
  //smart vs dumb - smart stores data, dumb doesn't
  //stateful vs stateless


  // functional components
  function Example(props) {
    return <div>{props.someData}</div>
    // we can see that function components do not use this.props.someData as class componenets would.
    //also no render() method
    //no constructor method necessary, cannot hold state
    //no lifestyle methods (later will learn) -- (unless through hooks which will provide access state and lifecycle)
  }
  // is the same as
  class Example extends Component {
    render() {
      return <div>{this.props.someData}</div>
    }
  }


  //REACT ROUTER: provides route matching and router componenets, handles routing requests to navigate different views. Also helpful with other concerns like generating unique bookable URLs for each view. Handles back and forwith browser history.
  //common componenets we 'll use: 
  //  <BrowseRouter> - top parent wrap, uses HTML5 history API that controls browser history.
  //  <Route> renders UI for matching path, use 'exact' attribute if you want exact match
  //  <Redirect> redirects toa  new URL
  //  <Switch> Groups <Route> componenets together
  //  <Link> Creates links to path, renders as <a> - use instead of <a> itself.
  //  <NavLink> Special version of <Link>, adds styles to active Link.
  //we will install react router and use it for course project.

  

  //SINGLE PAGE APPLICATION
  // one page that's locally downloas all the front end application codes for the website when you first load
  //like gmail, google maps, facebook
  //switching views the app intelligently handles front end rendering making minimum requests for server. you can still make backend server requests but the front end application code is already in your browser. so it's like a native/desktop app downloaded to your browser while you have it open to your browser.
  //PROS: 
    //faster user exp due to fewer server reqeusts
    //strealined delopment ... easy to divide front end and backend tasks
    //easily reuse backend code for mobile app developement
    //easily debugged in browser. (HOW?)
  //CONS:
    //search engines are indexed with trouble crawling through SPA's. now improving though
    //spa's require javascript enabled
    //initial download of app code can be slow.
    //be careful of memory leaks: can be harmful than multipage website.
  // SOLUTION FOR CON: how to handle navigation?
    //since you don't use traditional browser, this includes not only able to click links, to direct diff views, but able to use browser back/forward buttons in browsing history.
    //this is what react router provides. You can actually use back/forth.
    //to be continud following lessons.


//REACT ROUTER PARAMETERS:
  //CONTEXT ---
  //when you click on campsite your react will automatically grab the ID of the campsite and add it to the /# behind directory.
  //route comopnent will then use the campsite id and render the information for the campsite. this is gonna be done with <Route path='/directory/:campsiteId' .../> as this colon here will cause the route componenet to grab whatever string behind directory and campsite ID. that route parameter is a property of the route component state. specifically it's stored inside a state object called match as property named params. we can look inside the react dev tools, and if we select route component, we see that it has a state, with a match object, with a param property, which is also an object. inside that, it has the campsite id with the corresponding value.
  //if a different campiste is clicked you'll see it reflected off the react component extension.
  //then stored campsite id is used to pull up the campsite with the ID && that obj is passed into the campsite info component. 