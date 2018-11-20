import { object, boolean } from 'joi';

export const Test = object({
	test: boolean().required(),
});
