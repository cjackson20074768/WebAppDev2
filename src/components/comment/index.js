// Downvote not yet implemented

import React, { Component, Fragment } from "react";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './comment.css'

export default class Comment extends Component {
    handleVote = () => {
        this.props.upvoteHandler(this.props.comment.id);
    };

    //handleDownVote = () => {
    //this.props.downvoteHandler(this.props.comment.id)
    //};

    render() {
        return (
            <Fragment>
        <span className=" ptr" onClick={this.handleVote}>
          <FontAwesomeIcon icon={["fas", "angle-up"]} size="2x" />
            {` ${this.props.comment.upvotes}`}
        </span>


        <span className="commentitem">
          {`${this.props.comment.comment} (by ${this.props.comment.author})`}
        </span>
                <p></p>
            </Fragment>
        );
    }
}

/*      Downvote not implemented in time
         <span className="ptr" onClick={this.handleDownVote}>
             <FontAwesomeIcon icon={["fas", "angle-down"]} size="2x" />
             {` ${this.props.comment.downvotes}`}
         </span>
*/