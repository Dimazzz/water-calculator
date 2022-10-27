import {calcWater, maxHeight} from "./calc-water";

describe('calc water', () => {
    test('success test', () => {
        expect(calcWater([1, 0, 0, 1, 0, 0, 0, 1, 0])).toBe(5);
        expect(calcWater([5, 2, 3, 4, 5, 4, 0, 3, 1])).toBe(9);
        expect(calcWater([1, 3, 1, 2, 1, 4, 1])).toBe(5);
        expect(calcWater([1, 2, 3, 0, 4, 0, 2, 0, 1])).toBe(6);
        expect(calcWater([5, 2, 3, 0, 4, 0, 2, 0, 1, 3])).toBe(16);
        expect(calcWater([5, 2, 3, 0, 4, 0, 2, 0, 1])).toBe(10);
        expect(calcWater([...Array(10).keys()])).toBe(0);
    });

    test('one numbers array', () => {
        expect(calcWater([1, 1, 1, 1, 1, 1])).toBe(0);
        expect(calcWater([0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(0);
    })

    test('check max height', () => {
        expect(() => calcWater([maxHeight + 1, 3, 1, 2, 1, 4, 1])).toThrow(Error);
    });

    test('check negative height', () => {
        expect(() => calcWater([3, 3, 1, 2, -1, 4, 1])).toThrow(Error);
    });

    test('check array size', () => {
        expect(() => calcWater(new Array(maxHeight + 1))).toThrow(Error);
    });
});
