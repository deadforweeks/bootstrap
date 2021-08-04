//REDUX NOTES; INTRODUCTION TO REDUX

//MVC Design pattern : *often heard in software development&* (mvpm or mva, aka mvc framework, not framework like bootstrap. MVC is a software design pattern. not code, not library.
// it's a msuical approach as to how to structure an application.)
//used to develop presentation layer of application. NOwadays popular in web applciations.
// - key concept: separation of concerns.
//facilitate independent devleopment, testing, maintenance of idff parts of an app
//divided to model, view, controller.
    //MODEL: application state and logic
        //stores the main applciation and logic for frontend.
        //not database but data loaded into the appilcation from the database, and the front end base that sends requests that receives data from database.
        //will respond to queries about its state, from view/controller, and respond to requests to update state (from controller)
        //may also notify view/controller when its state changes.
    //VIEW: present information to user
        //renders the model into a form suitable for display. like UI element.
        //can query model directly about its state and update itself based on changes
    //CONTROLLER: mediate between model and view.
        //receives and processes info from the view such as if user submits data from input element like user interaction, like mouse events, form submission.
        //can instruct model & view to update to change its state.
        //can also send instructions to view to make changes.
//though it's good to know mvc pattern as developer, react will not use MVC for project, but rather, react state mangement is often handled with a design pattern called Flux.
//so we will be using a state management library called REDUX which owes some of itsparentage to flux.
//therefore first looking @ flux, then we look @ redux:

//FLUX ARCHITECTURE:
//initially React developers use react with MVC pattern specifically for view. but FB then encountered issues:
// MVC didn't scale well for complex for large apps like FB cuz of 1000000 compoonenets on there.
// MVC also became unpredictable @ scale and made it difficult to add new features without causing unexpected cascading effects and problems.... causing bugs.
// largely due to bi-directional nature of MVC data flow:
    //HackerWay: ReThinking Web App Development @ Facebook: https://youtu.be/nYkdrAPrdcw
    //diagram showed action tied to controller which branched out to a tree of models, and the models are connected towards its other trees of views and they're all tangled with each other, from model to view back to model etc
    //small change in one change in app can result in cascading effects that'd toss bugs in other bugs.
    //FB therefore camp up with a new thing, Flux
// FLUX:
    //Theory: 
    //like MVC it's how to structure your code in front end, it can be considered evolution in MVC. The key feature in flux, that sets it apart, from MVC is that it's unidirectional data flow.
    //instead of modal view  controller it sets its concerns into
    //  ACTION -> DISPATCHER -> STORE -> VIEW
        //Action: enters a system, goes to dispatcher, and only one central dispatcher that acts as a traffic controller.
        //can be multiple stores, and there are registered with dispatchers, dispatchers will route actions, to the appropriate stores.
        //the Stores: repositories for application state, and logic. they are similar but not identical concepts, to MVC models.
        //finally View: view updates whenever store says something's changed.
        //from the view, another action can enter the system due to user ineraction with UI. 
        //dispatcher then makes once action enters system no other actions are processed until the original one is finished processed & finished updating the store. 
        //so that one action are processing at a time, preventing cascading effects, and data integrity is protected.
        //
        //  ACTION -> DISPATCHER -> STORE -> VIEW
        //                |                   |
        //                |_<_______<_______<_|
        //                      |Action|
// REDUX:
    //flux is architecture design pattenr that describes approach to to structure front end application. but it doesn't provide any code on its own.
    //there are various libraries taht do the flux pattern, like flummox or alt, but also REDUX
    //redux : different than flux but inspired/influenced by flux, and considered an evolution
    //also inspired by elm proramming language, immutable.js, baobab.js, rxJS
    //redux website: described as predictable state container for js apps.
    //  provides codes that stores app state and a consistent want to access and update that state from anywhere within the app.
        //for javaascript apps, not react apps.
    //redux was initally created w/ react, it can be independent of react. can be used w/ backbone.js, angular.js, or just vanilla.js
//RELATING TO OUR PROJECT
    //our shit is small: we got a main componenet (container componenet) that has handful of presentation componenents as its children.
    //the application data is kept in the main compoenent state, && any changes to that state data can only happen within the main componenet. this approach is fine when dealing w/ small # of componenet.
    // real world though, apps can have 1000000 components. instead of just main componenet there can be multiple groups of componenents w/ multiple main componenets.
    //communication can be tricky by then. so the approach we've been using so far will work for small apps but hard to scale larger.
    //our app we'll implement redux ibrary to handle state of our application in a predictable &&&& consistent way. 
    // (difficult to understand first but make more sense when understanding that ti's helpful when scaling projects larger)
    //install redux then integrating it into applciation. first we look at in theory
//THEORETICALS OF REDUX: THREE FUNDAMENTALS
    //SINGLE SOURCE OF TRUTH
        //flux there can be multiple stores. dispatchers direct actions to the right one.
        //redux has one store. holds a single state object tree that contains the whoel state of your application as objects within that tree
        //object tree: tree-like data structure, where every node of a tree contains an object. DOM is another object tree let's say.
    //STATE IS READ ONLY
        //ONLY way to change state is an action. an obj taht describes what happened.
        //more on how actions work later
    //CHANGES ARE MADE WITH PURE FUNCTIONS
        //changes made with pure functions, we call REDUCERS
        //{Pure Function are functions that have no side effects and always inputs same outputs when provided with same input.
        //Math.floor() is a pure function. given a numbe, always gives the same results back, does nothing else. Math.random is an impure function, because it always gives a different output.
        //redux REDUCER is pure function that takes previous state and an action that returns the NEXT STATE.
        //similar to how aray methods like map works, like it never mutates original array, but creates an entirely new one.
        //this is linked to a programming concept called immutability ->>>> data doesn't get mutated but only replaced by new data
        //replacing entire state every time make smallest change is overkill. but objects are cheap to create in JS and doing it this way creates advantages, 
        //such as ability to time travel, meaning step back && forward from previous state.
        //analogy: animation sequence or illustrated flipbook... anything in frame in flipbook is different from before but it's its own. 
        //instead of drawin over existing frame whenever you wanna make a page you simply move to a new page and make a move there.
        //  flipping back && forth.
//HOW THIS IS ACHIEVED IN PRACTICE:
//      again looking @ flux architecture:
    //  ACTION -> DISPATCHER -> STORE -> VIEW
    // dispather stores a view.
    //in redux we got action, reducers, redux store, and view in circle:
    //
    //               >     view       >
    //  redux store                      redux actions
    //               <     reducers   <
    // 
    // the dispatcher in flux works as traffic controllers that routed actions to different stores.
    //with only one store that's no longer a major role. but reduce has a dispatch method in redux.
    //user interaction w. view triggers the dispatch of actions. 
    // the actions are set to reducers. and the reducers create a new state which is inside a store. 
    // then the view will change based on the state.
    // as in flux this is a one way data flow. reducers don't talk back to actions, and store doesn't talk back to reducers. data flows in one direction.
//TECHNICA: REACT-REDUX LIBRARY
//  install this -- from this library, and you can use these and more.:
    //we will transfer our functions to the redux store w/ our web application.

    //createStore()         
        // creates redux store which holds the state(as an object tree)
    //connect()             
        //generates container componenent that wraps around another componenet to subscribe them to the store
    // mapStateToProps()    
        // must be created inside a componenet, and passed as callback to connect() function.
        //called whenever store state changes. it receives the entire state tree & returns an object that contains only the data needed by the componenet it's been used in.
    //<Provider>
        //that will wrap around the root componenent of the app. 
        //it takes the store variable as an attribute, and makes the store accessible to all child compoennets that are connected with the connect() function


//...importing redux! 
//this is the first redux file we create - reducer.js
//moving reponsibility for the state, from our main componenent, to redux.
// we use reducers` to create update state

import {CAMPSITES} from '../shared/campsites';
import {COMMENTS} from '../shared/comments';
import {PARTNERS} from '../shared/partners';
import {PROMOTIONS} from '../shared/promotions';

export const initialState = {  //object will be the inital state of our app which we get straight from our data files.
    campsites: CAMPSITES,
    comments: COMMENTS,
    partners: PARTNERS,
    promotions: PROMOTIONS
};

export const Reducer = ( state = initialState, action) => {   //this uses default function parameters, so there are no state pssed in, then the state gets set in the initial object we just created.
// ...it also takes an action as parameter and for now it just returns the state that it was apssed in without making any changes.
    return state;   //returns the same state without making changes for now
}    
//finally for we need to access both cponstants from other files, so we need to make em into named exports and just add export before the const's work easily
//next: configureStore.js is needed in redux folder.