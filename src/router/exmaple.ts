import Koa from 'koa';
import { Service } from '../service/Service';
import { Controller, GET, POST, Validate, Body, Ctx } from '@tosee/misc';
import { Autowired } from '@tosee/util';
import { Value } from '@tosee/config';
import { BusBoy, File } from '@tosee/busboy';
import { Test } from '../schema/test';

@Controller()
export default class Router {
	@Autowired()
	Service: Service;

	@Value('port')
	port: Number;

	@POST('/test')
	async test(@Ctx ctx: any) {
		const instance = new BusBoy({ headers: ctx.headers }, async (
			fieldname: string, 
			file: NodeJS.ReadableStream, 
			filename: string, 
			encoding: string, 
			mimetype: string
		) => {
			file.resume();
			return filename;
		});
		const { fields, files } = await instance.parse(ctx.request.req);
		console.log(fields, files);
		return "Success";
	}

	@POST('/test2')
	@Validate({ schema: Test })
	async test2(@Body body: Test) {
		return body;
	}
}
