//REACT WEEK 6

// Framework versus library:
// library you have control - you call library when you wanna use it framework has control and calls your code when you need it.(don't call us, we will call you.)

// Library: When building a shed you won't be chopping a tree down, but rather goto a lumber store and get the tools from a HW store. You also buy tools from HW store. This is comparable to a library.

// Framework: it's like starting out with a blueprint for you to follow or ven basica frame that's already built. The basic structure is alreayd there and you have to flesh it in. (angular, ember, frontendJS, backendJS.)

// Library: React is considered a library. 
// -Jquery, loDash.

// REACT:
// Declarative, not imperative: You declare what you want in the user interface and react Handles the updating the DOM in a consistent way. MEdatiro between yo and the dom.

// Imperative: You manipulate the DOM directly to create, like document.write();

// The approach react takes is imperative.

// Component approach: encapsulates the UI into units called components.
// we'll be using reactStrap, redux.

// * * *

// YARN PACKAGE:
// You'll be using yarn add instead of npm install.
// and then revert to npm for backend node installation.

// * * *
// create-react-app:

// Using npx (it is installed with npm).
// npx is a package runner for npm. allows you to run packages for npm without explicitly installing them which is good for us to create react app because we only use it @ the beginning of our project, seeing we don't need it for the rest of the project. 
// If haven't installed yarn then it'll by default automatically generate starter files configured for us with NPM
// (make sure yarn.lock exists for the sake of this segment of course)
// (package.json)

// yarn start

// <!-- to check : -->
// less .gitignore
// less package.json
// --look under dependencies to confirm react, react-dom, react-scripts is installed

// <!-- You can also use to add things to the repositories: -->
// git remote add

// * * *
// Introduction to JSX

// whereas in javascript you use document.createElement();
// in react, you use React.createElement(); which also creates a new element that is configured to work with react library.
// React.createElement("div", null, "hello world!")
// You can use jsx to write what it looks like in HTML. and it's the same thing.
// It turns out as <div>Hello World!</div>
// JSX is syntactic sugar, or preprocessor. JSX allows you to use <> but it gets compiled to regular javascript.

// There are differences between this and HTML though:

// Some differences:

// JSX uses:
// className instead of class
// htmlFor instead of for
// >> beause class and for already have meaning in JS.

// you can embed js expressions inside JSX using curly brace {}

// when element has no content you can make it into a self-closing tag in JSX even if not possible in HTML. in html it's <i className = "fa fa-phone"></i> 
// but in JSX it's <i className = "fa fa-phone" />   
// (The latter you see this is self closing)

// * * * Initial Configuration * * *
// Inside folder of nucamp(your work), add these three

// yarn add reactstrap@8.5.1
// yarn add react-popper@1.3.6
// yarn add bootstrap@4.5.2

// Edit your app.js the same way you wanna edit your index.html
// DO IMPORT following into your App.js :
// import React, {Component} from 'react';
// import {Navbar, NavbarBrand} from 'reactstrap';
// import './App.css';

// * * * IMPORT. & EXPORT * * *
// import and export keywords in javascript allow files to share data w/ one another like objs, primitives, and functions.
// two kinds of exports: named and default -- one file can have many named exports but only one default export


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Foo from './App'; doesn't matter what the name is.
// import { App } from './App';
// ^^^^^you do this to tell the compiler that you're looking for something called App, from app.js , but otherwise, if app.js is your default model, you just import without the {}
// import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-lobster';
import 'typeface-open-sans';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import App from './App';
// APP FUCNTION si imported as the app function in the function name plus location/name where ti's from. the ./ tells index js tells react to look in the same location of folder. The extension.js is left out. 
// this ./ tells index.js to look @ the same folder as itself
// we don't even have to use the name APP.js because there is only one default name export. WE can mae this FOO and it'd still grab the default . As long as you grab it at the end


//INDEX.JS IS NOT A MODULE BECAUSE THERE IS NOT A DEFAULT EXPORT needed to reference it

      {/* You can tell when a react component is being used, first letter MUST be capitalized, as you see in App/ .
    It's analogous to function, a repeat Compoenent is a similar to a repeatable block of code. Like function you define a react compoonent with a syntax and call it with another syntax.
    
    Function def example:
    function sayHi(name) {
      console.log(`Hi ${name}`);
    }

    calling the function would be like:
    sayHi('Bob');

    Now with components it's like you are calling it EXCEPT we say that you are 'rendering' it because componenets are units of UI to be rendered to user's view.

    So function and react component are reusable codes but the react componenet is a specific function.? 
      */
     
    /* Like a function you define the react componenet with ONE syntax but then you call it w/ another syntax */}
ReactDOM.render(
  <React.StrictMode>
    <App />
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// To recap:
// use class keyword along with extends Component to define a class component, with a render () method, and return must contain a single react element, no more no less. But that element (like <div></div> can have other shit nested inside of it.) 
// or
// use Functional Component <FunctionalCompoenent/>, 
//you write it like an HTML tag to render a comopnenet.


// Why use componenets?
//reuseable piece of code like functions but w/ a specific purpose. like rendering different parts of UI. app components is like an exception to that that goes around everything, but other componenets are creating different parts of UI so they can be used over&over again to render different views that user sees in their screen. 
//concept is similar to bootstrap componenents but all written in JS. You can make your custom componenets or bring 3rd party libraries. There are SO MANY in the libraries of react.

// * * *

//react developer tool for chrome & firefox:
//profiling data is to monitor the speed of application. Beyodn the scope of this class apparently
//componenets tab: you can see all the components seen on the page. click and get information on where states are being held. props. and other useful info.
