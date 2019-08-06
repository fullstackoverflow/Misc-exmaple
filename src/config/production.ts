import { ConfigComponent } from '@tosee/misc';

@ConfigComponent('production')
export default class production {
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
