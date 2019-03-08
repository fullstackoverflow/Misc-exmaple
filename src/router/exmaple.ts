import Koa from 'koa';
import { Service } from '../service/Service';
import { Test } from '../schema/test';
import { Controller, Autowired, GET, Validate, Value, logger } from '@tosee/misc';

@Controller()
export default class Router {
	@Autowired()
	Service: Service;

	@Value('port')
	port: Number;

	@GET('/')
	@Validate({ schema: Test })
	async test(ctx: Koa.Context, next: Function) {
		ctx.body = this.port;
	}
}
