import React from 'react';
import Movie from './Movie.js';

export default class MovieList extends React.Component{

    constructor(props){
        super(props);
        this.addReview = this.addReview.bind(this);
        this.methodUpdate=this.addReview;
    }

    // method to be passed to reviewForm thru props
    addReview(event){
        let daForm = event.target.form;
        let formData = {
            movieId: daForm.movieId.value,
            text : daForm.revText.value,
            name : daForm.revName.value,
            date : new Date().toLocaleDateString()
        };

        console.log("addReview fired " + JSON.stringify(formData) );
    }

    render(){
    
        return(
            <div className="container">
                <h1>Movies!</h1>
                <Movie 
                    key="m1"  
                    id="m1"  
                    title="Raiders of the Lost Ark" 
                    cast="Harrison Ford, Karen Allen, Paul Freeman" 
                    director="Steven Speilberg" 
                    rating="PG" 
                    poster="https://m.media-amazon.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_QL75_UX190_CR0,2,190,281_.jpg"
                    synopsis ="In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers."
                    numStars = "4"
                    arrReviews = {[{key:"r1", text:'First time: Darn - that was good!', date:'01/01/2021', name:'Stuart'},{key:"r2", text:'Second time: that was still good!', date:'01/10/2021', name:'Stuart'} ]}
                    />
                <Movie 
                    key="m2"  
                    id="m2"  
                    title="Star Wars" 
                    cast="Mark Hamill, Harrison Ford, Carrie Fisher" 
                    director="George Lucas" 
                    rating="PG" 
                    poster = "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX190_CR0,7,190,281_.jpg" 
                    synopsis = "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."
                    numStars = "5"
                    arrReviews = {[{key:"r3", text:'Third - that was really good!', date:'01/20/2021', name:'Stuart'}]}
                    />
                <Movie 
                    key="m3"  
                    id="m3"  
                    title="Witness" 
                    cast="Harrison Ford, Kelly McGillis, Lukas Haas" 
                    director="Peter Weir" 
                    rating="R"
                    poster = "https://m.media-amazon.com/images/M/MV5BZWQzYmM5OGYtMDJlOC00M2RlLThhYzgtNjZiOWYxNjlhMDJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL75_UX190_CR0,1,190,281_.jpg" 
                    synopsis = "When a young Amish boy is sole witness to a murder, policeman John Book goes into hiding in Amish country to protect him until the trial."
                    numStars = "3"
                    arrReviews = {[]}
                    />
            </div>
        );
    }
}
