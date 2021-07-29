//this is called lifting state up: to refer something to campsite.js
//export below means this ARRAY can be imported into another file so we'll be doing this in APP.JS
export const CAMPSITES = [
    {
        id: 0,
        name: 'Wuhan Huanan Seafood Wholesale Market',
        image: 'assets/images/seafood.jpg',
        elevation: 1233,
        description: "For people who enjoy interacting things that came from the sea, and catch sea creatures... among other things.",
        comments: [
            {
                id: 0,
                rating: 5, 
                text: "The view is a definite must-have, if you enjoy catching things that came from the sea!",
                author: "Tinus Lorvaldes",
                date: "2018-10-25T16:30Z"
            },
            {
                id: 1,
                rating: 4, 
                text: "A definite must-go if you want to catch other things as well!.",
                author: "Brennen Ech",
                date: "2017-06-17T03:33Z"
            },
            {
                id: 2,
                rating: 5, 
                text: "I caught a world-record-breaking hospital visit within 14 days after camping here.",
                author: "McKenzie Sebastian",
                date: "2019-02-18T18:12Z"
            },
            {
                id: 3,
                rating: 5, 
                text: "A wonderful place to reconnect with your makers.",
                author: "Jordan Runn",
                date: "2019-08-04T20:11Z"
            },
            {
                id: 4,
                rating: 4, 
                text: "The stars I saw above me were magnificent (when hooked onto an IV)!",
                author: "Ann Dabramov",
                date: "2018-07-23T19:44Z"
            }
        ]
    },
    {
        id: 1,
        name:'Wuhan Institute of Virology',
        image: 'assets/images/virology.jpg',
        elevation: 877,
        description: "For more intelligent book-smart campers (albeit still intelligent enough to want to camp in Wuhan, of all places)",
        comments: [
            {
                id: 0,
                rating: 5, 
                text: "The view sucked but then I looked at the view with a kaleidscope and everything became slightly better... and then the drugs kicked in.",
                author: "Tinus Lorvaldes",
                date: "2018-10-25T16:30Z"
            },
            {
                id: 1,
                rating: 4, 
                text: "I caught a glimpse of the inside of a furnace right before my cremation.",
                author: "Brennen Ech",
                date: "2017-06-17T03:33Z"
            },
            {
                id: 2,
                rating: 5, 
                text: "A natural place to reconnect with dial-up internet and 90's VGA powered 265 colour Netscape animations powered by Oracle Java. Proud of our city's advanced technology!",
                author: "McKenzie Sebastian",
                date: "2019-02-18T18:12Z"
            },
            {
                id: 3,
                rating: 5, 
                text: "The people and view were wonderful. Another camper even told me, 'I See You happily when I'm happily hooked to the ICU'.",
                author: "Jordan Runn",
                date: "2019-08-04T20:11Z"
            },
            {
                id: 4,
                rating: 4, 
                text: "The stars in the afternoon was OK but that's only because I was on drugs",
                author: "Ann Dabramov",
                date: "2018-07-23T19:44Z"
            }
        ]
    },
    {
        id: 2,
        name:'Large Huoshenshan Field Hospital',
        image: 'assets/images/field.jpg',
        elevation: 2901,
        description: "We built this campsite in seven days because of ...increased consumer needs and demands from start of 2020.",
        comments: [
            {
                id: 0,
                rating: 5, 
                text: "What an artificial view!",
                author: "Tinus Lorvaldes",
                date: "2018-10-25T16:30Z"
            },
            {
                id: 1,
                rating: 4, 
                text: "The some of the people were beautiful but not the ones that didn't move and had bugs on them I guess.",
                author: "Brennen Ech",
                date: "2017-06-17T03:33Z"
            },
            {
                id: 2,
                rating: 5, 
                text: "I camped without a tent and got bitten by bugs. I hate this place.",
                author: "McKenzie Sebastian",
                date: "2019-02-18T18:12Z"
            },
            {
                id: 3,
                rating: 5, 
                text: "I caught a world-record-breaking mushroom that grew on cowshit. It was fake magic mushrooms. Henceforth I killed my dealer for lying to me and his death was marked as due to COVID19 so thankfully I dodged a bullet there. (whereas he didn't)." ,
                author: "Jordan Runn",
                date: "2019-08-04T20:11Z"
            },
            {
                id: 4,
                rating: 4, 
                text: "One time I saw the sun shining really bright. I didn't know whether it was because I was finally seeing the light at the end of the tunnel or simply this portable place is without a fucking main roof.",
                author: "Ann Dabramov",
                date: "2018-07-23T19:44Z"
            }
        ]
    },
    {
        id: 3,
        name:'Wuhan Center of Disease Control & Prevention',
        image: 'assets/images/disease.jpg',
        elevation: 42,
        description: "You'll never want to prevent yourself from having to prevent more after camping at the center of disease and control prevention campground.",
        comments: [
            {
                id: 0,
                rating: 5, 
                text: "I was gonna make a loud whistleblowing comment about the highly secure P4 laboratory but then I miraculously disappeared. ",
                author: "Tinus Lorvaldes",
                date: "2018-10-25T16:30Z"
            },
            {
                id: 1,
                rating: 4, 
                text: "The campground was nasty, except the fact that sometimes the bugs do bite. I like it when bugs bite. I am in a dystopian online club forum full of squished bug fetishists from LA.",
                author: "Brennen Ech",
                date: "2017-06-17T03:33Z"
            },
            {
                id: 2,
                rating: 5, 
                text: "I caught world-record-breaking gout here on my last visit, as well as AIDS. The AIDS was okay, but the gout fucking sucked.",
                author: "McKenzie Sebastian",
                date: "2019-02-18T18:12Z"
            },
            {
                id: 3,
                rating: 5, 
                text: "A mortifying place to reconnect with your ex loved ones. Relationship did not mend while camping there. (Speaking in terms of using an ouija board)",
                author: "Jordan Runn",
                date: "2019-08-04T20:11Z"
            },
            {
                id: 4,
                rating: 4, 
                text: "The funny people at night were not funny!",
                author: "Dann Dabramov",
                date: "2018-07-23T19:44Z"
            }
        ]
    }
];