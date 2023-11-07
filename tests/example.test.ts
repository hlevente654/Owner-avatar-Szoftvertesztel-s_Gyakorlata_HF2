import { hello } from '../src/example';

describe('example.hello tests', () => {
    test('Empty input ', () => {
      const result = hello([]);
      expect(result).toBe('Hello, my friend.');
    });

    test('Not shouting, Input: one Name', () => {
      const result = hello(['Bob']);
      expect(result).toBe('Hello Bob.');
    });

    test('Not shouting, Input: multiple Names', () => {
      const result = hello(['Alice', 'Bob', 'Jerry']);
    expect(result).toBe('Hello Alice, Bob and Jerry.');
    });

    test('Shouting, Input: one Name', () => {
      const result = hello(['BARRY']);
      expect(result).toBe('HELLO BARRY!');
    });

    test('Shouting, Input: multiple Names', () => {
      const result = hello(['JAY', 'MAYA', 'ALICE', 'BOB', 'CHARLOTTE']);
      expect(result).toBe('HELLO JAY, MAYA, ALICE, BOB AND CHARLOTTE!');
    });

    test('Mixed, Input: multiple Names', () => {
      const result = hello(['JAY', 'Maya', 'Alice', 'BOB', 'Charlotte']);
      expect(result).toBe('Hello Maya, Alice and Charlotte. HELLO JAY AND BOB!');
    });

    test('Input contains, ","', () => {
      const result = hello(['Jerry', 'Alice, Bob']);
      expect(result).toBe('Hello Jerry, Alice and Bob.');
    });
  });
