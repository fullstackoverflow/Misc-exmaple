import 'reflect-metadata';
import request from 'supertest';
import { app } from '../app';
import { Expect, TestFixture, AsyncTest, SetupFixture, Test } from 'alsatian';

@TestFixture('test')
export class ExampleTestFixture {
	instance: request.SuperTest<request.Test>;

	@Test('test')
	public async test1() {
		await app.Wait();
		const instance = request(app.server);
		const response = await instance.post('/test2').send({ test: "this is a test", name_2: "hello" });
		Expect(response.status).toBe(200);
		Expect(response.body.test).toBe('this is a test');
		Expect(response.body.name_1).toBe('hello world');
	}
}
