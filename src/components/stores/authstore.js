import axios from 'axios';
import { action, computed, observable } from 'mobx';

class AuthStore {
	@observable error = null;
	@observable isFetching = false;
	@observable user = {};
	@observable auth = false;

	@action
	async LoginAdmin() {
		this.isFetching = true;
		this.error = null;
		try {
			const response = await axios.get(http://localhost:5000/auth/login);
			this.todos = response.data.todos;
			this.isFetching = false;
		} catch (error) {
			this.error = error;
			this.isFetching = false;
		}
	}
}
