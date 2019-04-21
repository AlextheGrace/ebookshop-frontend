import axios from 'axios';
import { action, computed, observable } from 'mobx';

class AuthStore {
	@observable error = null;
	@observable isFetching = false;
	@observable user = {};
	@observable auth = false;

	@action
	async LoginAdmin(username, password) {
		this.isFetching = true;
		this.error = null;
		try {
			const response = await axios.post(process.env.REACT_APP_API_URL+'/auth/login',{
                username,
                password
            });
			this.user = response.data.user;
			this.isFetching = false;
		} catch (error) {
			this.error = error;
			this.isFetching = false;
		}
	}
	@action testingAuth = () => {
		console.log('test action mobx');
		
	}
}
