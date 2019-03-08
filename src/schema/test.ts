import { IsBoolean, IsString } from 'class-validator';

export class Test {
	@IsString()
	test: string;
}
