import React from 'react';  //REMOVED {component} as well
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
// import {  Breadcrumb, BreadcrumbItem } from 'reactstrap';     //removed cardText & cardBody
import {Link} from 'react-router-dom';
// import CampsiteInfo from './CampsiteInfoComponent';

// Changing things to componenets; we need to spin out three componenets. ONe for each class component.
//render campsite, render comments, and one render.     each will handle different parts.
// class CampsiteInfo extends Component {

    function RenderCampsite({campsite}) {
        return (
            <div className="col-12 col-sm-12 m-2 selectedCamp">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        {/* <CardTitle>{campsite.name}</CardTitle> */}
                        <CardText>{campsite.description}</CardText>
                        <CardText>Elevation: {campsite.elevation}</CardText>
                        {/* <CardText>Comment: {campsite.comments.rating}</CardText> */}
                    </CardBody>
                </Card>
            </div>
        )
    }

    function RenderComments({comments}) {   //when this is done {} it's destructuring something from a property
        if (comments) { //truthy statement if comment is there
          return (
            <div className="col-11 col-sm-11 ml-4 mt-1 mb-4 comments">
                <h3> Comments for this great campsite:</h3>
                {/* <small>We encourage you to read the original camper's experience on the first premise first day before it all went downhill from there.</small> */}
                    {comments.map(comment => {
                    return (
                        <div key={comment.id}><br/>
                            <strong>{comment.author} wrote on {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} :</strong>
                            <p></p>
                            <p className="userComment">"{comment.text}"<br/>
                            <small>(Unformatted date): {comment.date} </small></p>
                        </div>
                    );
                })};
            </div>    
          );
        };
        return <div/>;   //else
    }

    function CampsiteInfo(props) {
        if (props.campsite) {   //removed this. since it's now a function (from render() to campsiteInfo)
            return (
                <div className="container">

                    {/* Breadcrumb starts here: we use props.campsite.name to name things dynamically */}
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h2 className="ml-2">{props.campsite.name}</h2>
                        </div>
                    </div>                    

                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />    {/*          before: {this.renderCampsite(this.props.campsite)} */}
                        {/* <RenderComments comments={props.campsite.comments} />    before: {this.renderComments(this.props.campsite.comments)} */}
                        {/* Above no longer works ^^^^^^ because we have comments in its own js file now. Replace above with the following: */}
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            );
        }
        return <div />;
    }
    //^^^ the above was modified from the following past nonsense:
    // render() {
    //     if (this.props.campsite !== null) {
    //         return (
    //             <div className="row">
    //                 {this.renderCampsite(this.props.campsite)}
    //                 {this.renderComments(this.props.campsite.comments)}
    //             </div>
    //         );
    //     } 
    //         return <div/>;        
    // }

export default CampsiteInfo;