import { ConfigComponent } from '@tosee/misc';

@ConfigComponent('development')
export default class development {
	db = {
		redis: {
			host: '',
			password: '',
		},
		mongo: '',
	};
	protocol = 'http';
	port = 6769;
}
