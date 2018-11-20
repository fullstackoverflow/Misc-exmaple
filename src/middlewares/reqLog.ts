import { logger } from '@tosee/misc';

const ReqLog = function() {
	return async (ctx, next) => {
		if (ctx.method == 'GET') {
			logger.success(
				`${ctx.method} ${ctx.url} ${ctx.request.querystring}`,
			);
		}
		if (ctx.method == 'POST') {
			logger.success(
				`${ctx.method} ${ctx.url} ${JSON.stringify(ctx.request.body)}`,
			);
		}
		await next();
	};
};

export { ReqLog };
