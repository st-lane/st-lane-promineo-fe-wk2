import React from 'react';

export default class Review extends React.Component{
    constructor(props){
        super(props);
        this.name = props.name;
        this.date = props.date;
        this.text = props.text;
        this.key = props.key;
    }
    
    render(){
        return(
            <div className="card">
                <div className="card-header bg-secondary text-white">
                    Review: {this.name}, {this.date}
                </div>
                <div className="card-body">
                "<em>{this.text}</em>"
                </div>
            </div>
        );
    }
}