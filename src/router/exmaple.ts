import Koa from 'koa';
import { Service } from '../service/Service';
import { Controller, GET, POST } from '@tosee/misc';
import { Autowired } from '@tosee/util';
import { Value } from '@tosee/config';
import { File } from '@tosee/busboy';

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
}
