// built for the purpose of next setting up the main route switching in mainComponenet.js
import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
//using react card componenets to display each card ^^^^

function RenderCard( {item} ) {
    return (
        <Card> {/* A card item that pulls from the image property of the item, and name property of the obj: */}
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            {/* <h4>Home</h4> Replacing this placehodler, with a div name and three columns: */}
            <div className="row">
                <div className="col-md m-1"> {/*M-1 is margin spacing. MD If medium or taller they'll take up 1/3rd but smaller they'll stack on top of each other   */}
                    <RenderCard item={props.campsite} />
                    {/* Function Render card componenet where item prop is passed */}
                    {/* The rendered campsite comes from the campsites.js */}
                    
                </div>

                <div className="col-md m-1"> {/*MD If medium or taller they'll take up 1/3rd but smaller they'll stack on top of each other   */}
                    <RenderCard item={props.promotion}/>
                    {/* Promotion is from promotiions.js */}
                </div>

                <div className="col-md m-1"> {/*MD If medium or taller they'll take up 1/3rd but smaller they'll stack on top of each other   */}
                    <RenderCard item={props.partner}/>
                    {/* Featured partner is on partners.js */}
                </div>
                {/* ^^^^^ featured campsite objects gets passed in here, then gets passed to render card, whichh creates card w/ allt he properties in the featured campsite  object. theimage URL, the name, the description. and same for the featured promotion, and featured partner
                Anytime you change the shared .js files object status to TRUE, it automatically gets displayed in homecomponent.js */}
            </div>
        </div>
    )
}

export default Home;

