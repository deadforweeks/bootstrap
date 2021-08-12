// REDUX THUNK / REDUX MIDDLEWARE
//before we could change a state in the redux store, by dispatching an action. But at times when action is dispatched we may wanna intercept it before it reaches the reducer and either change it or cause side effects to happen. (something other than changing app state)
//we may wanna write something to log file, or make server request and wait for server to respond. This is where redux middleware helps
//middleware provides ability to run code after action is dispatched and before it reaches the reducer. so middleware provides a point where you inject third party extensions, that can respond to an action.
//one straight example is redux logger: (a library)
//once you install it and add it to react app, in console it shows a log of every single action that's dispatched.

//redux logger:
//once installed and added to react app, by default it'll show every single action that's been dispatched. 
//log shows application state prior to the action being applied then the contents of the action object
//then new state after reducer has applied in action.
//very useful in debugging.

//REDUX MIDDLEWARE is also USED TO DEAL WITH ASYNCHRONOOUS CODE/CALLS:
// Synchronous code: When shit is executed app waits till it's finished before continuing. This means nothing ever happens out of order, by mistake. But this can be very slow. what if everytime one tried to copy bunch of fiels from one folder to another, computer froze, and you can't do shit till process finishes? 
// so Asynchronoous code lets you starts something then continue with the program w/o waiting for it to finish, you cn keep going with the rest of the code, and the result w/ the asynchoronous call will be dealt with later.
// common asynchornous call: client requests data from server.... this data isn't available right away, the request has to goto the internet and server has to respond. While this is quick there is still a delay. so if you request data and try to use it right away you may encounter errror cuz data not avaialble yet.
//we haven't accounted this yet in data loading thus far therefore irrelevant ATM because no server requests has been made, just been grabbing data locally, but real world is more complex.
//so how to have an action request data from server, then wait for it and handle the server response?

// THIS IS where MIDDLEWARE REDUX helps us:
//middleware will wrap around action dispatch then insert code to deal w/ asynchronous operation before passing the action forward. aside from logging and making async calls, there are other uses as well.
//such as crash reporting, stopping an action from reaching reducer under certin conditions, dispatching other actions, etc.
//you can also chain middleware so you may run multiple middleware libraries in sequence.
//apply it: via applyMiddleware() function, which is passed as a paraemter to createStore() function.

//REDUX THUNK : one of the most useful redux libraries
// 'Thunk' is programming tecnique where you wrap a function around antoehr function to delay its execution until it's needed
//this is handy in redux cuz it lets you inject extra operations into action creator.
//normaly action creator has one job: create & return an action object
//official definition of redux Thunk: REDUX THUNK MIDDLEWARE allows you to ewrite action creators that return a function instead of an action. Thunk can be used to delay the idspatch of an action or to dispatch only if a certain conditon is met, or to dispatch multiple actions. The inner function receives the store method dispatch and getState as parameters.
//so normally the wya redux is setup, action creator function is expected to return an object, which is sent directly to the reducer.
//redux thunk enables you to use that action creator to delay , stop, or change that dispatch.
//in our project what we'll do is use redux thunk to have an action creator function to generate asynchronoous request to server for data, then dispatch a new action depending on the response/request once it's received.
//redux thunk's most common way to handle setup of simple, asynchoronous logic in redux action creators. There are other ways, such as redux-saga, which is more advanced library which's suited for handling complex asynchronoous logic. 
//redux-observable is also similar to saga. 

//installing redux-thunk and redux-logger:
// yarn add redux-thunk@2.3.0
// yarn add redux-logger@3.0.6

import { createStore, combineReducers } from 'redux';
//                  ^^^^ createSTore function requires us to give a reducer as argument. but it'll only accept single reducer. so we have to combine four reducers using combine four reducers using combinereducer function which we import from redux. thus, no longer required to use the following imoprt from reducer module cuz no longer used:
// import { Reducer, initialState } from './reducer';

//instead we need to use the four reducers separately   we just created, campsites,partners,promotions,comments
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';

//now inside cretorStore function we can replace both reducer  and the initial state from before, with a call to combine reducers.
export const ConfigureStore = () => {   
    const store=createStore(
        combineReducers(
            {
                // In here we will pass all the objects that can contain all of the reducers as properties like this:
                campsites: Campsites,
                comments: Comments,
                partners: Partners,
                promotions: Promotions
                // ^^the property identifiers here, the name for these properties, define how the data from each redcuer will be kept in the overall state of object tree.
                //(at this point you can apparently delete reducer.js file from redux folder. OPen react app as it'll work the same as before. changes to behaviour has yet been made.)
            }
        )
        // Reducer,
        // initialState
        //^^^ creating creatingstore function from redux,
        //and pass into the reducer function from the initial state into thes tore:
    );
    return store;    //finally we have to return the store
}   

