import 'reflect-metadata';
import request from 'supertest';
import { Server } from '../app';
import { Expect, TestFixture, AsyncTest, SetupFixture, Test } from 'alsatian';

@TestFixture('test')
export class ExampleTestFixture {
	instance: request.SuperTest<request.Test>;

	@Test('test')
	public async test1() {
		const instance = request(Server);
		const response = await instance.get('/?test=111');
		Expect(response.status).toBe(200);
		Expect(response.text).toBe('6769');
	}
}
