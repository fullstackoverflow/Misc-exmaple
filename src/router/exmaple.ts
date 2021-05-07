import Koa from 'koa';
import { Service } from '../service/Service';
import { Controller, GET, POST, Validate } from '@tosee/misc';
import { Autowired } from '@tosee/util';
import { Value } from '@tosee/config';
import { File } from '@tosee/busboy';
import { Test } from '../schema/test';

@Controller()
export default class Router {
	@Autowired()
	Service: Service;

	@Value('port')
	port: Number;

	@POST('/test')
	@File(async (filed, stream, filename) => {
		console.log('trigger');
		stream.resume();
		return filename;
	})
	async test(ctx: Koa.Context) {
		ctx.body = ctx.request.body;
	}

	@POST('/test2')
	@Validate({ schema: Test })
	async test2(ctx: Koa.Context) {
		ctx.body = ctx.request.body as Test;
	}
}
