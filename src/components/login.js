import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: 'lightGrey',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});
	


class Login extends Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			email: '',
			password: ''
		}

	}



	onChange = (event, value) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.table(this.state.email, this.state.password);
		
	}

	render() {
		const { classes } = this.props;
		return (
			<main className={classes.main}>
			<CssBaseline />
			<Paper className={classes.paper}>
			  <Avatar className={classes.avatar}>
				<LockOutlinedIcon />
			  </Avatar>
			  <Typography component="h1" variant="h5">
				Login
			  </Typography>
			  <form className={classes.form} onSubmit={this.handleSubmit}>
				<FormControl margin="normal" required fullWidth>
				  <InputLabel htmlFor="email">Email Address</InputLabel>
				  <Input id="email" type="text" name="email" value={this.state.email} onChange={this.onChange}  autoComplete="email" autoFocus />
				</FormControl>
				<FormControl margin="normal" required fullWidth>
				  <InputLabel htmlFor="password">Password</InputLabel>
				  <Input name="password"  value={this.state.password} onChange={this.onChange}  type="password" id="password" autoComplete="current-password" />
				</FormControl>
				<FormControlLabel
				  control={<Checkbox value="remember"  />}
				  label="Remember me"
				/>
				<Button
					onClick={this.handleSubmit}
				  fullWidth
				  variant="contained"
				  className={classes.submit}
				>
				  Sign in
				</Button>
			  </form>
			</Paper>
		  </main>
		);
	}
}

export default withStyles(styles)(Login);
