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