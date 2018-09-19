import { compute } from './compute';

describe('compute', () => {

    it('should return 0 if input is negative', () => {
        expect(compute(-1)).toBe(0);
    });

    it('positive number should be incremented', () => {
        expect(compute(2)).toBe(3);
    });
})
