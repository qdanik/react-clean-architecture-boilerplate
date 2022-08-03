import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

import { AxiosAbortAdapter } from '../axios-abort.adapter';

jest.mock('axios', () => {
  const mockAxios = {
    defaults: {
      adapter: jest.fn(config => {
        if (!config) {
          throw new Error('mockAdapterError');
        }

        return Promise.resolve();
      }),
    },
  };

  return {
    create: jest.fn(() => mockAxios),
    ...mockAxios,
  };
});

describe('AxiosAbortAdapters', () => {
  let axiosAbortAdapter: AxiosAbortAdapter;

  beforeEach(() => {
    axiosAbortAdapter = new AxiosAbortAdapter();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should execute adapter with default axios adapter', async () => {
    const spyAbortController = jest.spyOn(AbortController.prototype, 'abort');
    const config: AxiosRequestConfig = {
      data: { key: 'value' },
      method: 'GET',
      params: { pages: 2 },
      url: 'example.com',
    };
    const response: AxiosPromise<unknown> = axiosAbortAdapter.execute(config);
    expect(response?.abort).toBeInstanceOf(Function);
    response.abort();
    expect(spyAbortController).toHaveBeenCalled();
    await response;
    expect(axios.defaults.adapter).toBeCalledWith(config);
    spyAbortController.mockReset();
    spyAbortController.mockRestore();
  });

  it('should execute adapter and catch an error', async () => {
    try {
      const config: AxiosRequestConfig = null;
      await axiosAbortAdapter.execute(config);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('mockAdapterError');
    }
  });
});
