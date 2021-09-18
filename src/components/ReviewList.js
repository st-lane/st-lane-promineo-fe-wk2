import React from 'react';
import Review from './Review';

export default class ReviewList extends React.Component{
    constructor(props){}

    render(){
        return (
            <div className="container mb-3">
                <Review />
            </div>
        );
    }
}