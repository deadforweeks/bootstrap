import React, {Component} from 'react';
//             ^^ brackets are something about 'not default'  (student explanation: { } allows import/export by name (which allows multiple export/imports per file) v.s. the standard 1 default export per file)
// import {Navbar, NavbarBrand} from 'reactstrap';
import Main from './components/MainComponent';
// ^^^changed from directory componenet to main component
//all these^^^  imports that aren't using ./ Paths, they are coming from modules that are from node.module folder. How does one know where to look? by default webpack is doing work for you behind the scens to make it easier to import modules. So you put 'react' and it looks inside of node_modules and finds it there.
import { BrowserRouter } from 'react-router-dom';
//importing both from redux folder:
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

// Therefore, below, ./app makes it clear that you are not using webpack to find it there. 
import './App.css';
//^^^then we'll use this array to set the local state in app:
// How to define react Component? Two ways: Functional compoenent & Class component.

// (1)
// class App extends Component {
//   render () {
//     return (
//       //if there's more than one line in the return statement it's a good idea to wrap them in bracket parenthesis. INside the return statement, the component must return a single  react element. typically using JSX. By that it means, a <div> <navbar> and <div>. But there's only ONE ELEMENT being returned here, that's the outer DIV that wraps around everything (className="app"), there's only one element and that is what matters. If you had ANOTHER DIV outside the main DIV wrap, like anotehr one below it, then it wouldn't work.
//     );
//   }
// }
// (2) To render something, you write it like an HTML tag but capitalized. NAVBAR componenets you imported are bein rendered are being. There are way to define componenets  and RENDER componenets when you wanna use it.
// To render it you wanna use <Navbar>, capitalized. Navbar is being rendered. </Navbar>. Other components are rendered self-closing. 
// ReactDOM.render(<App/>) is a self-closing tag. (class App is in App.js)
//all shit we do in this unit will be rendered with a self-closing tag like <App/>

// There are two different componenets: CLASS componenets and FUNCTIONAL components
// Class components are created via CLASS (class also has a render method) - as shown below, whereas function is like 
//  function App() 
//  { }

//REDUX UPDATE: remember in configureStore.js, that function returns the redux store, sp we have to capture that return value in constant in app.js named Store
//therefore we need to capture it in a constant that refers to configurestore()
const store=ConfigureStore();



//class componenet:
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state= {
  //     campsites: CAMPSITES
  //     // (Next after ^^^this we gotta pass it down as props to the directory component )
  //   };
  // ^^^can delete the constructor now because everything's also moved to the maincomponent.js

  render() {
    return (  //in the app componenet's return statement we need tow rap everything around the REACT's provider statement giving the store an attribute.
    //this makes redux store available to all componenets that are all chidlren of app:
      <Provider store={store}>      
        <BrowserRouter> {/* BrowserRouter: making it the highest level componenet which returns from app which gives it main componenet from its chidlren. */}
          <div className="App">
              <Main />
          </div> 
        </BrowserRouter>
      </Provider> //after this, finally, we goto mainc ompnenent to update redux
      );
  };
}

export default App; //this is referred to by ` import App from './App.js' ` from INDEX.js

//app is the default function for the whole export file. In this file, the function app is the default export for the whole file. JS module is a JS file that contains at least one export. so that means this app is a module. but index.js is not a module because there isn't an export. 

// with no default exports you have to use {} when you use them. 
// you can use curly braces aroudn the name and remove the default keyword, like:
// export { App };