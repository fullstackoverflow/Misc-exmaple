import { resolve } from 'path';
import { ReqLog } from './middlewares/reqLog';
import { Misc, Config, logger } from '@tosee/misc';
import { errorHandler } from './middlewares/errorHandler';

Config.path = resolve(__dirname, './config');
const app = new Misc({
	keys: ['web_platform'],
	beforeall: [errorHandler(), ReqLog(), logger.Middleware()],
	protocol: Config.instance.protocol,
	port: Config.instance.port,
});

const Server = app.server;

export { Server };
