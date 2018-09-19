import { greet } from './greet';

describe('Greet Function', () => {

    it('should contain the name', () => {
        expect(greet('John')).toContain('John');
    });

});
