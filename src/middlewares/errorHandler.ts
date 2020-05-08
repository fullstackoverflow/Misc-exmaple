import { logger, Response } from '@tosee/misc';

export const errorHandler = function() {
	return async (ctx, next) => {
		try {
			await next();
		} catch (err) {
			if (!(err instanceof Response)) {
				logger.error('Unexpected Error:', err);
				ctx.body = 'Unexpected Error';
			} else {
				ctx.body = err;
			}
		}
	};
};
