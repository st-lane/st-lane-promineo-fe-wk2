import React from 'react';

export default class Stars extends React.Component{
    constructor(props){
        super(props);
        this.numStars = props.numStars;
        
    }

    showStars(){
        let strStars = ""; 
        for (let i=0; i<=this.numStars; i++ ){
            strStars += "*";
        }
        console.log("Stars: " + strStars);
        return strStars;
    }
  
    render(){
        return(
            <span className="stars">{this.showStars()}</span>
        );

    }

}