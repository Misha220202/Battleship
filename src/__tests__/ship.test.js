import { Ship } from '../ship';

describe('test ship functions', () => {
    let testDestroyer;
    let testCarrier;
    beforeEach(() => {
        testDestroyer = new Ship(3);
        testCarrier = new Ship(4);
    });

    test('test hit function', () => {
        expect(testDestroyer.hit(2)).toBe(2);
        expect(testCarrier.hit()).toBe(1);
    });

    test('test isSunk function', () => {
        testDestroyer.hit(3);
        expect(testDestroyer.isSunk()).toBe(true);
        testCarrier.hit(3);
        expect(testCarrier.isSunk()).toBe(false);
        testCarrier.hit();
        expect(testCarrier.isSunk()).toBe(true);
    })
});