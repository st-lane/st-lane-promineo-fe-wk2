import React from 'react';

export default class ReviewForm extends React.Component{
    constructor(props){
        super(props);

        console.log("ReviewForm - show props: ", this.props)

        this.movieId = props.movieId;
        // methods
        this.methodUpdate = props.methodUpdate;
    }

    render(){
        return (
            <form name={"form-"+this.id}>
            <div className="reviewForm form-group container" style={{backgroundColor:'#d2cfcf', padding:'10px'}}>
                <h4>Leave a Review</h4>
                <div className="row mt-2">
                    <div className="col-3">
                        <label htmlFor="revText">Add your review here:</label>
                    </div>
                    <div className="col-8">
                    <textarea id="revText" name="revText" className="form-control" placeholder="Type your review here:"></textarea>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3">
                    <label htmlFor="revText">Your name:</label>
                    </div>
                    <div className="col-9">
                    <input type="text" name="revName" className="form-control" id="revName" placeholder="Your name:"/>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3"></div>
                    <div className="col-9">
                        <button type="button" name="btnGo" className="btn btn-primary form-control" id="btnGo" onClick={this.methodUpdate}>Save</button>
                        <input type="hidden" name="movieId" id="movieId"  value={this.movieId}/>

                        <input type="hidden" id="showMovieId"  placeholder={this.movieId}/>
                    </div>
                </div>
            </div>
            </form>
        );
    }
}