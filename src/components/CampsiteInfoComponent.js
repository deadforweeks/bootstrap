import React from 'react';  //REMOVED {component} as well
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
// import CampsiteInfo from './CampsiteInfoComponent';

// Changing things to componenets; we need to spin out three componenets. ONe for each class component.
//render campsite, render comments, and one render.     each will handle different parts.
// class CampsiteInfo extends Component {

    function RenderCampsite({campsite}) {
        return (
            <div className="col-10 m-2 ">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
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
            <div className="col-10 m-2 comments">
                <h3> Comment Box</h3>
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
                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />    {/* {this.renderCampsite(this.props.campsite)} */}
                        <RenderComments comments={props.campsite.comments} />  {/* {this.renderComments(this.props.campsite.comments)} */}
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