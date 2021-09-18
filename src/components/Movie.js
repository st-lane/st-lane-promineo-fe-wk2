import React from 'react';
// import ReviewList from './ReviewList.js';
import ReviewForm from './ReviewForm.js';
import Stars from './Stars.js';
import Review from './Review.js';

export default class Movie extends React.Component{
    constructor(props){
        super(props);
/*
        this.title = props.title;
        this.synopsis = props.synopsis;
        this.cast = props.cast;
        this.director = props.director;
        this.rating = props.rating;
        this.poster = props.poster;
        this.numStars = props.numStars;
*/
        // bind addReview method to Movie context, add as prop to be passed down
        this.addReview = this.addReview.bind(this);
        this.methodUpdate=this.addReview;

        console.log("Movie - show props: ", this.props)


        // state
        this.state = {
            count:0,
            movie: {
                // key: props.key,
                id: props.id,
                title: props.title,
                synopsis: props.synopsis,
                cast: props.cast,
                director: props.director,
                rating:props.rating,
                poster: props.poster,
                numStars: props.numStars
            },
            reviews: props.arrReviews
        };
        this.addReview = this.addReview.bind(this);

        console.log("Movie - show state: ", this.state) ;
        console.log("Movie - show reviews: ", this.state.reviews) ;
    }

    // method to be passed to reviewForm thru props
    addReview(event){
        let daForm = event.target.form;
        let formData = {
            text : daForm.revText.value,
            name : daForm.revName.value,
            date : new Date().toLocaleDateString()
        };
        console.log("addReview fired " + JSON.stringify(formData) );

        // clear form
        daForm.revText.value = "";
        daForm.revName.value = "";

        this.setState( state => {
            console.log("In setState - reviews: " + state.reviews.length);
            let revNum = state.reviews.length+1;
            formData.id = "r"+(revNum);
            formData.key = "r"+(revNum);
            console.log("In setState - " + JSON.stringify(formData));

            state.reviews.push(formData);
            console.log("In setState - reviews: " + state.reviews.length);
            return state.reviews;
        });
        console.log("after setState ");
    }
    
    render(){

         // Create an array of JSX Review Elements from the review data saved in the state.
        let arrReviewElems = [];
        // You check for undefinded because until you get something loaded into the state, the _value_ of this.state.reviews is undefined.
        if (this.state.reviews) {
            console.log("ReviewElems: " + this.state.reviews.length);
            for (let reviewProps of this.state.reviews){
                arrReviewElems.push(<Review {...reviewProps} />); 
            }
        }

        return(
            <div className="card mb-3">
                <div className="card-header bg-primary text-white">
                    <h2>Movie: {this.state.movie.title} - {this.state.movie.id} </h2>
                </div>
                <div className="card-body">
                    <table>
                        <tbody>
                        <tr>
                            <td rowSpan="5">
                                <img src={this.state.movie.poster} className="poster" alt={"Theater poster for: '" + this.state.movie.title + "'"} />
                            </td>
                            <th>Synopsis:</th>
                            <td>{this.state.movie.synopsis}</td>
                        </tr>
                        <tr>
                            <th>Rating:</th>
                            <td>{this.state.movie.rating}</td>
                        </tr>
                        <tr>
                            <th>Cast:</th>
                            <td>{this.state.movie.cast}</td>
                        </tr>
                        <tr>
                            <th>Director:</th>
                            <td>{this.state.movie.director}</td>
                        </tr>
                        <tr>
                            <th>Stars:</th>
                            <td><Stars numStars={this.state.movie.numStars} /></td>
                        </tr>
                        </tbody>
                    </table>
 
                    <hr />
                    <h3>Reviews:</h3>
                    <div className="container mb-3">
                        {/* Insert interpolation of array of Review Elments */}
                        {arrReviewElems}
                    </div>
                    <ReviewForm 
                        movieId={this.state.movie.id} 
                        methodUpdate = {this.addReview}
                    />
                </div>
            </div>
        );

    }

}