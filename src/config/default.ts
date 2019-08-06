import { ConfigComponent } from '@tosee/misc';

@ConfigComponent('default')
export default class Default {
	db = {
		redis: {
			host: '',
			password: '',
		},
		mongo: '',
	};
	protocol = 'http';
	port = 3000;
}
