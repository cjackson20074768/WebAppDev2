// Actual item for each individual password entry
// Perform hash test on each password and give a rating out of 10 on how secure it is instead of thumbs up for ratings
import React, { Component, Fragment } from 'react';
import './newsItem.css';
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

export default class NewsItem extends Component {
    handleVote = () =>  this.props.upvoteHandler(this.props.post.id);
    render() {
        let line = this.props.post.link ? (
            <a href={this.props.post.link}>{this.props.post.title}</a>
        ) : (
            <span>{this.props.post.title}</span>
        );
        return (
            // Upvote function when padlock is clicked
            // ToDo modify to call hash function and pass rating
            <Fragment>
                  <span className="ptr" onClick={this.handleVote}>
                    <FontAwesomeIcon icon={["fas", "lock"]} size="2x" />
                    {` ${this.props.post.rating}`}
                </span>
                <span className="newsitem">
                    {line}
                </span>
                <span>
                    <Link to={`/posts/${this.props.post.id}` }> Additional Notes</Link>
                </span>
                <p className="username">{this.props.post.username}</p>
            </Fragment>
        );
    }
}