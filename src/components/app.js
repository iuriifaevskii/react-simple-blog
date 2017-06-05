import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <p>Header Component </p>

        {this.props.children}
        
        <p>Footer Component</p>
      </div>
      
    );
  }
}
