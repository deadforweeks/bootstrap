// WEEK 5 REDUX FOCUSED: STARTING NOTES:
/* Last week we learned about redux: we looked at how it managed state through use of single store, reducers, and actions. But what are actions exactly?
- Redux actions are plain JS objects that contain payloads of information to be sent to the redux store.
- Actions are the way that updates get sent to the store.
- only required property for an action is the type, the type will be a unique string.
- best practice is to gather all action types, into a separate module.
*/
// An example of a module type of JS we'll create this week, multiple benefits -- primarily to easily see all the action types in one place which's very helpful when multiple developers are in on one project. You'll see one file that all the kinds of changes to the state has alreayd been implemented in the app:
// export const ADD_COMMENT = 'ADD_COMMENT';
// export const CAMPSITES_LOADING = 'CAMPSITES_LOADING';
// export const CAMPSITES_FAILED = 'CAMPSITES_FAILED';
// export const ADD_CAMPSITES = 'ADD_CAMPSITES';
// export const ADD_COMMENTS = 'ADD_COMMENTS';
// export const COMMENTS_FAILED = 'COMMENTS_FAILED';
// export const PROMOTIONS_LOADING = 'PROMOTIONS_LOADING';
// export const ADD_PROMOTIONS = 'ADD_PROMOTIONS';
// export const PROMOTIONS_FAILED = 'PROMOTIONS_FAILED';

//dispatching an action:
//an action gets dispatched in a react componenent in response to some user interaciton w/ the view, like viewer loading a new view on browser, clicking a button, submitting form etc.
//in react-redux you'll never dispatch action directly. you'll supply an arguemnt called mapDispatchToProps to the connect() function.  This calls the store's dispatch method for you.
//every time action's dispatched, a new action obj must be created. 
//a special type funciton called action creator that'll create action boject in a consistent, error free way. it's not required using action creators to create objects but it's helpful in making sure that obj's are always created in a consistent way, and to prevent typographical errors.

//action creator example we'll be using:

// export const addCampsites = campsites => (
//   {
    // type: ActionTypes.ADD_CAMPSITES,
    // payload: campsites
//   }
// );

//this actionCreator adds an array to campsites to the redux store. it has the required type property and it has another property called payload. we have ot call identifier for the type property TYPE:    and the identifier payload: is arbitrary and coudl be called something else (like data, campsite, tommy....... etc. ) There can also be other properties here as well aside from payload. there is no limit to properties amount.
//for this action payload contains an array of campsite that's received as a function parameter. 
//notice because this's an arrow function and we're only returning one thing, (which is the obj in the parenthesis, campsites), we don't have to use return keyword. 
// Remember w/ arrow functions if you leave out curley braces around functionbodies there's only one expression we do not need to use the return keyword, it's implied.
//curly braces here -- in this case, they're being used to create an object. they aren't the curly braces around the function body and that's the reason why we have parenthesis around the culry braces so we don't confuse the arrow function into thinking the curly braces are for the function BODY.
//so though we don't see return keyword here, be aware this function is returning the object

//RECAP:
//- for eveyr action youw anna have in app you'll creat 2 things:
  //1. action type defined as a String constaint
  //2. action creator which is a funciton that returns the action object and the action object will contain a type property plus any data that you wanna send to the store to update it.
  //you'll also have to connect each action to Reactcomponent, using connect function and mapDispatchToProps argument
//then every time action is dispatched the Redux store will cehck reducers (all of it) for a matching action type then run the code for that action type which will run the state.

//REDUCERS:
//now discussing reducers: a simplified reducer : 
//reducers considered part of a store. while there are not multiple stores in redux there CAN be multiple reducers that handle different parts of the same state. by time we reach exercise, this simplified code is from, we'll have done something called splitting reducer, which creates diffrent reducers to handle different parts of the state.
//the state referenced in this reducer is just section of the entire state object that this reducer is responsible for updating:

// export const Campsites = (state = {campsites: [] }, action ) => {
                         //^^here this reducer itakes its section fo existing state as first argument. if that state doesn't exist yet then it's using default function parameters, state={campsites:[]}, which has property fo camsites set to an empty []. for second parameter it takes action object that's dispatched then it goes through this switch statement below,  and if any action types in switch cases match the action types of the action object it then creates a NEW state, from the existing state, updating it with the data from the action, then it returns the new state from the store.
                        //note it isn't required for the reducer to use a switch statement though usually best way to do it. we CAN use if statements or other ways to cehck for the action type.  only thing required for this reducer is that it returns the section of the state.
                        //REDUX PRINCIPLE: AGAIN, state is READ ONLY ... we never mutate existing state. we only replace it w/ an new state. one of the ways we can create new state from existing state is by spread syntax. it isn't the only way but it's one that'll often be used. 
//   switch (action.type) {
    //   case ActionTypes.ADD_CAMPSITES:
        // return { ...state, campsites: action.payload };  //here, we are spreading out property keyvaluepairs from existing state. doing this doesn't mutate the existing state. we are basically making a copy of its properties then we add payload from the action object into the campsites property. then we have this all surrounded in the curly braces that signified the creation of a new object, the object literal syntax. 
      //so from lesson of spread syntax, since this cmapsites property is second in order, in the object literal defintiion, it will overwrite campsite's property that will spread from the existing state. 
      //then if none of action types matched then the default below will return the existing state (below).
    // default:
    //   return state;
//   }
// }

import {CAMPSITES} from '../shared/campsites';  //imported to campsites.js reducer

//adding a reducer function to handle each part of the state: doing it here as a named export , then we'll give it a name, Campsites, (capital not necessary)
//arrow function below is a stylistic choice and function choice is useable as well. it takes two paramters, first parameter, previous state, (existing/current state, that state that's alreayd in the store and that's gonna be changed by the reducer.)

export const Campsites = (state=CAMPSITES, action) => {
                         //^^^first time reducer is called the (state) will not exist so we will use a default paramter = CAMPSITES , from the imported data.
                                           //^^second parameter the reducer takes an action object, then in the body of the function => it checks type of the action, and returns the state.
    switch (action.type) {
        //Using switch is not required but quite common. right now we don't have action type defined so we use a default case to return the state: 
        default:
            return state;    // (right now this reducer doesn't do anything, aside from iniitializing this part of tstate if it did not exist before. more will be added later.)
    }
}

//THIS DOCUMENT CAN ALSO BE COPIED/PASTED TO comments, partners, & promotions.js, with imported data above changed.

