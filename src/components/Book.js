import React, { Component } from 'react';
import { Header } from './layout'
import axios from 'axios';

class Book extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  componentDidMount() {
    axios.get('')
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="Book">
        
      </div>
    );
  }
}

export default Book;
