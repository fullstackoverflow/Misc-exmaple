import Koa from 'koa';
import { Service } from '../service/Service';
import { Controller, GET } from '@tosee/misc';
import { Autowired } from '@tosee/util';
import { Value } from '@tosee/config';

@Controller()
export default class Router {
	@Autowired()
	Service: Service;

	@Value('port')
	port: Number;

	@GET('/')
	async test(ctx: Koa.Context) {
		ctx.body = this.port;
	}
}
