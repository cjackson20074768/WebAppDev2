import React, { Component } from "react";

export default class Form extends Component {
    state = { comment: "", name: "" };

    handleCommentChange = e => {
        this.setState({ comment: e.target.value });
    };

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        let comment = this.state.comment.trim();
        let name = this.state.name.trim();
        if (!comment) {
            return;
        }
        this.props.addCommentHandler(comment, name);
        this.setState({ comment: "", name: "" });
    };

    render() {
        return (
            <form style={{ marginTop: "30px" }}>
                <h3>Add additional information and reminders</h3>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Notes..."
                        value={this.state.comment}
                        onChange={this.handleCommentChange}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Date"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.onSubmit}
                >
                    Submit
                </button>
            </form>
        );
    }
}