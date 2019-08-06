import { ConfigComponent } from '@tosee/misc';

@ConfigComponent('test')
export default class test {
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
