import { logger, Res, Status } from '@tosee/misc';

export const errorHandler = function() {
	return async (ctx, next) => {
		try {
			await next();
		} catch (err) {
			if (err.code) {
				if (process.env.NODE_ENV != 'production') {
					ctx.body = new Res(err.code, err.message, err.data);
				} else {
					ctx.body = new Res(err.code, err.message, null);
				}
			} else {
				logger.error('unexpect error:', err);
				ctx.body = new Res(Status.ERROR, 'server error', null);
			}
		}
	};
};
