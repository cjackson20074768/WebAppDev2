// Add new Credentials to the existing list

import React, { Component } from 'react';
import './newsForm.css';

/*
// Hashing Function for password
var CryptoJS = require("crypto-js");

function encrypt(str) {
    // Encrypt (key needs to be generated still)
    var ciphertext = CryptoJS.AES.encrypt(Component.password,'key');
    return ciphertext
}

function decrypt() {
    // Decrypt (pulls 'key' value to be used)
    var bytes = CryptoJS.AES.decrypt(encrypt().ciphertext.toString(), 'key');
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    console.log(plaintext);
}
*/

export default class Form extends Component {
    // Data entry fields of web forms are *always* part of the containing components state object
    state = { title: '', username: '', link: '', password: ''};

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd( this.state.title, this.state.username, this.state.password, this.state.link)
        this.setState({ title: '', username:'', password:'', link: ''})
    }

    // Methods for handling input
    handleTitleChange = (e) =>  this.setState({title: e.target.value});
    handleUsernameChange = (e) =>  this.setState({username: e.target.value});
    handlePasswordChange = (e) => this.setState({password: e.target.value});
    handleLinkChange = (e) => this.setState({link: e.target.value});

    render() {
        return (
            <form   className="form bg-dark text-light">
                <h3>Add new Credentials</h3>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           placeholder="Title"
                           value={this.state.title}
                           onChange={ this.handleTitleChange } />
                </div>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           placeholder="Username"
                           value={this.state.username}
                           onChange={ this.handleUsernameChange } />
                </div>
                <div className="form-group">
                    <input type="password"
                           className="form-control"
                           placeholder="Password"
                           value={this.state.password}
                           onChange={ this.handlePasswordChange } />
                </div>

                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           placeholder="Link"
                           value={this.state.link}
                           onChange={ this.handleLinkChange } />
                </div>

                <button type="submit" className="btn btn-primary"
                        onClick={this.handleSubmit}>Add</button>
            </form>
        );
    }
}