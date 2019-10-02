import 'jest';
import instance from './the-instance';

describe('myLib', () => {
    test('can add two numbers', () => {
        expect(instance).toBe(3);
    });
});
