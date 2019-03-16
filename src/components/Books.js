import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});



class Books extends Component {
	constructor(props, context) {
		super(props);
		this.state = {
			stuff: [{ title: "something about flints", author:"Roger Grace"  },{ title: "something about lifting speakers", author:"Daniel Alexander"  } ]
		};
	}

  render() {
    const { classes } = this.props;
    const { stuff } = this.state;
  


return (
  <div className={classes.root}>
    <GridList cellHeight={180} className={classes.gridList}>
      <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        <ListSubheader component="div">books</ListSubheader>
      </GridListTile>
      {stuff.map(tile => (
        <GridListTile key={tile.img}>
          <img src={tile.img} alt={tile.title} />
          <GridListTileBar
            title={tile.title}
            subtitle={<span>by: {tile.author}</span>}
            // actionIcon={
            //   <IconButton className={classes.icon}>
            //     <InfoIcon />
            //   </IconButton>
            // }
          />
        </GridListTile>
      ))}
    </GridList>
  </div>
);
}
}
Books.propTypes = {
  classes: PropTypes.object.isRequired,
  };



export default withStyles(styles)(Books);

