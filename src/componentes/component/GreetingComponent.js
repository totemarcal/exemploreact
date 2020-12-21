import React, { Component } from 'react';

export default class GreetingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Harry',
      lastName: 'Poppins'
    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }

  handleFirstNameChange = (e) => this.setState({ firstName: e.target.value });
  handleLastNameChange = (e) => this.setState({ lastName: e.target.value });

  render() {
    return (
      <div>
        <input value={this.state.firstName} onChange={this.handleFirstNameChange}/><br />
        <input value={this.state.lastName} onChange={this.handleLastNameChange}/>
        <p>
          <span>Oi, {this.state.firstName} {this.state.lastName}</span>
        </p>
      </div>
    );
  }
}