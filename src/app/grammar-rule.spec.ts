import { GrammarRule } from './grammar-rule';

describe('GrammarRule', () => {
  it('should create an instance', () => {
    expect(new GrammarRule(1, '', '', '', '', '')).toBeTruthy();
  });
});
