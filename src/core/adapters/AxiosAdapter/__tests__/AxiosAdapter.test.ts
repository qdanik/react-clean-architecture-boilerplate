import { AxiosAdapter } from 'core/adapters';

describe('AxiosAdapter', () => {
  let adapter: AxiosAdapter;
  const mockErrorCallback = jest.fn();

  beforeEach(() => {
    adapter = new AxiosAdapter();
    adapter.setErrorHandler(mockErrorCallback);
  });

  it("shouldn't execute error callback", async () => {
    await adapter.get('https://example.com/');

    expect(mockErrorCallback).not.toHaveBeenCalled();
  });

  it('should execute error callback', async () => {
    await adapter.get('wrong url');

    expect(mockErrorCallback).toHaveBeenCalled();
  });
});
