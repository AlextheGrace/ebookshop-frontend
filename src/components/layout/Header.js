import React from 'react';
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'; 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BookIcon from '@material-ui/icons/Book';
import MailIcon from '@material-ui/icons/AccountCircle'

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: -10
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,

  },
  icon: {
    width: 80,
    height: 30
  }
};

class Header extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };




render() {
  const { classes } = this.props;



  const fullList = (
    <div className={classes.fullList}>
      <List>
        {[{text:'Books',link:'/'}, {text:'Authors', link:'/authors'}, {text:'Contact' ,link: '/contact'}].map((item, index) => (
          <ListItem button component={Link} to={item.link} key={item}>
            <ListItemIcon>{index % 2 === 0 ? <BookIcon   /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
          <IconButton className={classes.menuButton}  color="white" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
            <MenuIcon />      
          </IconButton>
          
          <Typography variant="h6" color="white" className={classes.grow}>
            IKARUS BOOKS
          </Typography>
          <img  className={classes.icon}src="https://res.cloudinary.com/ikarus-books/image/upload/v1554314839/ikaruslogocropped2.png" alt="flintknapping"></img>
          
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {fullList}
          </div>
        </SwipeableDrawer>
    </div>
  );
}

}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(Header);