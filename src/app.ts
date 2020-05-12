import { ReqLog } from './middlewares/reqLog';
import { Misc, logger } from '@tosee/misc';
import { errorHandler } from './middlewares/errorHandler';
import { Config } from '@tosee/config';

const app = new Misc({
	keys: ['web_platform'],
	beforeall: [logger.Middleware(), errorHandler(), ReqLog()],
	protocol: Config.instance.protocol,
	port: Config.instance.port,
});

const Server = app.server;

export { Server };
