//this is called lifting state up: to refer something to campsite.js
//export below means this ARRAY can be imported into another file so we'll be doing this in APP.JS
export const CAMPSITES = [
    {
        id: 0,
        name: 'OverReact Lake Campground',
        image: 'assets/images/react-lake.jpg',
        elevation: 1233,
        description: "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers.",
        comments: [
            {
                id: 0,
                rating: 5, 
                text: "What a magnificent view!",
                author: "Tinus Lorvaldes",
                date: "2018-10-25T16:30Z"
            },
            {
                id: 1,
                rating: 4, 
                text: "The campground was beautiful, but the bugs could bite sometimes.",
                author: "Brennen Ech",
                date: "2017-06-17T03:33Z"
            },
            {
                id: 2,
                rating: 5, 
                text: "I caught a world-record-breaking trout here on my last visit.",
                author: "McKenzie Sebastian",
                date: "2019-02-18T18:12Z"
            },
            {
                id: 3,
                rating: 5, 
                text: "A wonderful place to reconnect with nature.",
                author: "Jordan Runn",
                date: "2019-08-04T20:11Z"
            },
            {
                id: 4,
                rating: 4, 
                text: "The stars at night were magnificent!",
                author: "Ann Dabramov",
                date: "2018-07-23T19:44Z"
            }
        ]
    },
    {
        id: 1,
        name:'Chrome River Campground ',
        image: 'assets/images/chrome-river.jpg',
        elevation: 877,
        description: "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River.",
        comments: [
            {
                id: 0,
                rating: 5, 
                text: "The view sucked but then I looked at the view iwth a kaleidscope and everything became slightly better... and then the drugs kicked in.",
                author: "Tinus Lorvaldes",
                date: "2018-10-25T16:30Z"
            },
            {
                id: 1,
                rating: 4, 
                text: "I camped without a tent and got bitten by bugs. I hate this place.",
                author: "Brennen Ech",
                date: "2017-06-17T03:33Z"
            },
            {
                id: 2,
                rating: 5, 
                text: "I caught a world-record-breaking mushroom that grew on cowshit. It was fake magic mushrooms. I killed my dealer for lying to me during my final visit.",
                author: "McKenzie Sebastian",
                date: "2019-02-18T18:12Z"
            },
            {
                id: 3,
                rating: 5, 
                text: "A wonderful cave to reconnect with hallugenic drugs.",
                author: "Jordan Runn",
                date: "2019-08-04T20:11Z"
            },
            {
                id: 4,
                rating: 4, 
                text: "The stars in the morning was OK but that's only because I was on drugs",
                author: "Ann Dabramov",
                date: "2018-07-23T19:44Z"
            }
        ]
    },
    {
        id: 2,
        name:'Breadcrumb Trail Campground',
        image: 'assets/images/breadcrumb-trail.jpg',
        elevation: 2901,
        description: "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground.",
        comments: [
            {
                id: 0,
                rating: 5, 
                text: "What a fake view!",
                author: "Tinus Lorvaldes",
                date: "2018-10-25T16:30Z"
            },
            {
                id: 1,
                rating: 4, 
                text: "The women was beautiful, but the bugs on them were more sexy.",
                author: "Brennen Ech",
                date: "2017-06-17T03:33Z"
            },
            {
                id: 2,
                rating: 5, 
                text: "I didn't catch a single thing on my last visit.",
                author: "McKenzie Sebastian",
                date: "2019-02-18T18:12Z"
            },
            {
                id: 3,
                rating: 5, 
                text: "A natural place to reconnect with dial-up internet and 90's shitty netscape java animations.",
                author: "Jordan Runn",
                date: "2019-08-04T20:11Z"
            },
            {
                id: 4,
                rating: 4, 
                text: "The sun at night was fake. Fake advertising. I wanted to see the sun.",
                author: "Ann Dabramov",
                date: "2018-07-23T19:44Z"
            }
        ]
    },
    {
        id: 3,
        name:'Redux Woods Campground',
        image: 'assets/images/redux-woods.jpg',
        elevation: 42,
        description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods.",
        comments: [
            {
                id: 0,
                rating: 5, 
                text: "What a terrible fucking view!",
                author: "Tinus Lorvaldes",
                date: "2018-10-25T16:30Z"
            },
            {
                id: 1,
                rating: 4, 
                text: "The campground was nasty, but the bugs could bite sometimes.",
                author: "Brennen Ech",
                date: "2017-06-17T03:33Z"
            },
            {
                id: 2,
                rating: 5, 
                text: "I caught aids there it sucked. As well as a world-record-breaking trout here on my last visit.",
                author: "McKenzie Sebastian",
                date: "2019-02-18T18:12Z"
            },
            {
                id: 3,
                rating: 5, 
                text: "A mortifying place to reconnect with your ex loved ones.",
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