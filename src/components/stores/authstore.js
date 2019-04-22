import axios from 'axios';
import { action, computed, observable, decorate } from 'mobx';

export default class AuthStore {
	@observable error = null;
	@observable isFetching = false;
	@observable user = {};
	auth = false;

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
	async testingAuth() {
		console.log('test action mobx');
		
	}


}

	// decorate(AuthStore, {
	// 	error: observable,
	// 	isFetching: observable,
	// 	user: observable,
	// 	auth: observable,
	// 	LoginAdmin: action,
	// 	testingAuth: action
	// })

// class Store {
//       //...
//        empty() {
//         this.data = []
//       }

//       add(e) {
//         this.data.push(e)
//       }
//     }

// decorate(Store, {
//   add: action,
//   empty: action
// })