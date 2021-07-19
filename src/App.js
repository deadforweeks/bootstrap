import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Directory from './components/DirectoryComponent'
//all these^^^  imports that aren't using ./ Paths, they are coming from modules that are from node.module folder. How does one know where to look? by default webpack is doing work for you behind the scens to make it easier to import modules. So you put 'react' and it looks inside of node_modules and finds it there.
// Therefore,
//below, ./app makes it clear that you are not using webpack to find it there. 
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           LEARN REACT 
//         </a>
//       </header>
//     </div>
//   );
// }



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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container"> {/* We cannot say class=certain in JSX, we gotta say className */}
            <NavbarBrand href="/">NuCamp</NavbarBrand>
            {/* NavBar brand ^^^^ when we are using or rendering react componenets, the syntax is like <> angle brackets. The telltale sign that it's componenent, is gonna be the first letter. If it's capitalized you know it's React component. if it's lower case you're dealing with a JSX component. So Navbar is dealing w/ a react component. */}
          </div>
        </Navbar>
        <Directory />
      </div>
    );
  }
}

export default App; //this is referred to by ` import App from './App.js' ` from INDEX.js

//app is the default function for the whole export file. In this file, the function app is the default export for the whole file. JS module is a JS file that contains at least one export. so that means this app is a module. but index.js is not a module because there isn't an export. 

// with no default exports you have to use {} when you use them. 
// you can use curly braces aroudn the name and remove the default keyword, like:
// export { App };

