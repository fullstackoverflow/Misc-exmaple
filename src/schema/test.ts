import { IsBoolean, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class Test {
	@IsString()
	test: string;

	@IsString()
	@Expose({ name: "name_2" })
	@Transform(
		({ value }) => value + " world"
	)
	name_1: string
}
