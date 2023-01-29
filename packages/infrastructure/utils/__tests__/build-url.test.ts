import { buildUrl } from '../build-url.util';

describe('BuildUrlUtil', () => {
  it('should convert endpoint url with options to url', () => {
    const result = buildUrl('/url/{value}/test/{value1}', { value: 1, value1: '2' });

    expect(result).toBe('/url/1/test/2');
  });

  it(`shouldn't set any values to url`, () => {
    const result = buildUrl('/url/{value}/test/{value1}', {});

    expect(result).toBe('/url/{value}/test/{value1}');
  });

  it(`shouldn't call reduce if mapper is empty`, () => {
    const result = buildUrl('/url/{value}/test/{value1}');

    expect(result).toBe('/url/{value}/test/{value1}');
  });
});
