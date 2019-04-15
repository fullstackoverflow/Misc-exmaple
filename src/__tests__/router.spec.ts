import request from 'supertest';
import { Server } from '../app';
import { Expect, TestFixture, AsyncTest, SetupFixture } from 'alsatian';

@TestFixture('test')
export class ExampleTestFixture {
	instance: request.SuperTest<request.Test>;

	@SetupFixture
	public setupFixture() {
		this.instance = request(Server);
	}

	@AsyncTest('test')
	public async test1() {
		const response = await this.instance.get('/?test=111');
		Expect(response.status).toBe(200);
		Expect(response.text).toBe('6767');
	}
}
