import React, { Component } from 'react'


class ContactField extends Component {
    render() {
        return (
            <div className="form-group">
                <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Your Name *"
                    required="required"
                    data-validation-required-message="Please enter your name."
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <p className="help-block text-danger"></p>
            </div>
        )
    }
}

export default ContactField;