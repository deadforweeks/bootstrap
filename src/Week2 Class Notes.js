// import logo from './logo.svg';
import './App.css';

import logo from './logo.svg';
import './App.css';
import {Component} from "react";

function App() {
    return (
        <div>
            Simplest react app
            <TestComponent someText="some text shit"
            someObject={ {data:"thisData is under somedata-someObj"} }
            someNumber={5} />
            {/* In this case above some text is prop */}
        </div>
    )
}

//
// props are how we communicate between componenets, or how we pass information between componenets
//e.g. numbers, strings, objects, functions, or other shit
//my main applicationt o pass some code, a property

class TestComponent extends Component {

    constructor(props) {
      // This is where we find these things we wrote in the <> block code above, in test component
      super(props)
      console.log("testcomponent props:", props)
    }

    render() {
       return ( 
        <div>Test Component: {this.props.someNumber} {this.props.someText}  {this.props.someObject.data}</div>
       )
    }
}


export default App;
