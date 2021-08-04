import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {   
    const store=createStore(
        Reducer,
        initialState
        //^^^ creating creatingstore function from redux,
        //and pass into the reducer function from the initial state into thes tore:
    );
    return store;    //finally we have to return the store
}   //next: go into app.js