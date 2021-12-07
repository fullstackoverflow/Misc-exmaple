import { ReqLog } from './middlewares/reqLog';
import { Misc, logger } from '@tosee/misc';
import { errorHandler } from './middlewares/errorHandler';
import { Config } from '@tosee/config';
import { resolve } from 'path';

const app = new Misc({
	keys: ['web_platform'],
	beforeall: [logger.Middleware(), errorHandler(), ReqLog()],
	router: resolve(__dirname, './router/**/*.*{ts,js}'),
	protocol: Config.instance.protocol,
	port: Config.instance.port,
});

const Server = app.server;

export { Server, app };
