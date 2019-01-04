import { IsBoolean } from 'class-validator';

export class Test {
	@IsBoolean()
	test: boolean;
}
