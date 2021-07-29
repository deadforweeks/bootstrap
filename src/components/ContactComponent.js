//very much like contactus.html page, in js
import React from 'react';

function Contact(props) {
    return(
    <div className="container">
        <div className="row">
                <div className="col mt-4">
                    <h2>Contact Us</h2>
                    <hr/>
                </div>
        </div>
    
        <div className="row row-content align-items-center">
            <div className="col-sm-4">
                <h4>Our Address</h4>
                <address>
                    1 WuCamp Way<br/>
                    Wuhan, HB<br/> 
                    China
                </address>
            </div>

            <div className="col">
                <a role="button" className="btn btn-link" href="tel:+14168088080">
                    <i className="fa fa-phone" /> 1 (911) 911-9111</a><br/>
                <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.com">
                    <i className="fa fa-envelope-o"/> campsites@wucamp.com</a>
            </div>
        </div>
    </div>
    );
}
export default Contact;
//now we tell our original app how to route to this componenet ContactComponent