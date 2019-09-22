import React, { Component } from "react";
import './ErrorBoundary.css'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      error: false
    };
  }

  componentDidCatch(error, errorInfo) {
    
    this.setState({ 
      error: error,
     });
  }
  
  render() {
    if (this.state.error) {
      return (
          <div>
          <h1>Something's gone wrong</h1>
            <p>We're sorry, we are getting it</p>
          </div>
      );
    } else {
      return this.props.children;
    }
  }
}