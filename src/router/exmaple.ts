import Koa from 'koa';
import { Service } from '../service/Service';
import { Test } from '../schema/test';
import { Controller, Autowired, GET, Validate } from '@tosee/misc';

@Controller('/')
export default class Router {
	@Autowired()
	Service: Service;

	@GET('/')
	@Validate({ schema: Test })
	async test(ctx: Koa.Context, next: Function) {
		let hello_world = {
			first: 'hello',
			second: 'world',
		};
		ctx.body = hello_world.first + ' ' + hello_world.second;
	}
}
