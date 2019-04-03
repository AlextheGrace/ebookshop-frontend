import React, { Component } from 'react';
import { Header } from './layout'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
class Book extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/books/')
    console.table(this.props.match.params.title);
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="Book">
      <Header />
      <Grid container spacing={16} style={{ padding: 40 }}>
          hello
      </Grid>
      </div>
    );
  }
}

export default Book;
