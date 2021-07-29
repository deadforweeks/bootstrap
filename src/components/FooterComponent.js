//footer imported as a functional component
import React from 'react'
function Footer(props) {
    return (
        // footer jsx element: different than footer component which is Uppercase F
        //same as bootstrap shit
        <footer className="site-footer"> 
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Directory</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                
                    <div className = "col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        {/* JSX Treats white spaces differently than HTML: curly braces to show javascript expression is used, and single quote ' ' is used to wrap around white spaces. There are other ways but this is the easiest. 
                        In HTML you add a normal space but in JSX you require {' '} easiest way.*/}
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/">
                            <i className="fa fa-instagram" /></a> {' - '}
                        <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/">
                            <i className="fa fa-facebook" /></a> {' - '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
                            <i className="fa fa-twitter" /></a> {' - '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/">
                            <i className="fa fa-youtube" /></a> {' - '}
                            {/* <i/> elements cannot be a self closing tag in HTML, but JSX allows you to turn any elemenets into a self-closing one, if there is NO content in the start/close tags! JSX is either way, you can self-close if there is nothing in return. */}
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone"/> 1-206-555-1234</a> <br/>
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o"/>campsites@nucamp.co</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;