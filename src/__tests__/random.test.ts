import { generate } from '../index';

test('[generate] default', () => expect(generate()).toHaveLength(3));
test('[generate] custom length 5', () => expect(generate({ length: 5 })).toHaveLength(5));
test('[generate] number only', () => {
  const result = generate({ numberOnly: true, length: 5 });
  expect(result).toHaveLength(5);
  expect(result).toMatch(/^[0-9]*$/);
});
