//And then, in actionCreators.js, we'll be importing from the actionTypes.js module, using a wildcard : this * asterisk acts as a wildcard, that lets us import all the named exports from the actionTypes.js at once.  
import * as ActionTypes from './ActionTypes';   //there's only one main export in actionTypes.js for now but we'll add more later. and then we'll see how to then access exports using the actionTypes namespace that is defined there, "as ActionTypes".

//nextdefine actionCreator function with the name addComment, passing in all the values needed to add coments, like (campsiteId, rating, author, and text). Setting it to => return an object, giving it a {type:     and a payload:     }
export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,  //for the type here's where we can use the actionTypes namespace we defined above, and .AddComment, and this lets us access the app comment export that we made from actionType.js without defining it explicitly here in the import
    payload: {
        // for payload property we need to pass in the campsiteID, rating, author, and text.
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text

        //(in es6 when identifier of property is the same as value, you can actually pass it like the following (thanks to shorthand property names): 
        // campsiteId, 
        // rating, 
        // author, 
        // text

        // That's it! We set up first action type, and actionCreator. NOw updating few files to support this action - reducers - first comments.js...
    }
})
