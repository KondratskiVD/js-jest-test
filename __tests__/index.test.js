import reverse from '../src/index.js';

test('reverse', () => {
    expect(reverse('hello')).toEqual('o|l|l|e|h');
    expect(reverse('')).toEqual('')
})