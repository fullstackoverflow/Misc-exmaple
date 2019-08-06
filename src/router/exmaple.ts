import Koa from 'koa';
import { Service } from '../service/Service';
import { Controller, Autowired, GET, Value } from '@tosee/misc';

@Controller()
export default class Router {
	@Autowired
	Service: Service;

	@Value('port')
	port: Number;

	@GET('/')
	async test(ctx: Koa.Context) {
		ctx.body = this.port;
	}
}
