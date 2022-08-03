import { AxiosPromise, AxiosRequestConfig } from 'axios';

import { AxiosAbortAdapter } from '../axios-abort.adapter';
import { AxiosMemoAdapter } from '../axios-memo.adapter';

describe('AxiosMemoAdapter', () => {
  let axiosAbortAdapter: AxiosAbortAdapter;
  let axiosMemoAdapter: AxiosMemoAdapter;

  let spyAxiosAbortExecute;

  beforeEach(() => {
    axiosAbortAdapter = new AxiosAbortAdapter();
    axiosMemoAdapter = new AxiosMemoAdapter(axiosAbortAdapter);
    spyAxiosAbortExecute = jest.spyOn(axiosAbortAdapter, 'execute').mockImplementation(
      (): AxiosPromise<string> =>
        Promise.resolve({
          config: {},
          data: 'response',
          headers: {},
          status: 200,
          statusText: 'OK',
        }),
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
    spyAxiosAbortExecute.mockReset();
    spyAxiosAbortExecute.mockRestore();
  });

  it('shouldn`t put request into cache', async () => {
    const spyGetKey = jest.spyOn(AxiosMemoAdapter, 'getKey').mockImplementation(() => 'key');
    const config: AxiosRequestConfig = {
      data: { key: 'value' },
      method: 'GET',
      params: { pages: 2 },
      url: 'example.com',
    };
    await axiosMemoAdapter.execute(config);

    expect(spyAxiosAbortExecute).toHaveBeenCalledWith(config);
    expect(spyGetKey).toHaveBeenLastCalledWith(config);

    await axiosMemoAdapter.execute(config);

    expect(spyAxiosAbortExecute).toHaveBeenCalledTimes(2);
    expect(spyGetKey).toHaveBeenCalledTimes(2);
    spyGetKey.mockReset();
    spyGetKey.mockRestore();
  });

  it('should put request into cache', async () => {
    const config: AxiosRequestConfig = {
      data: { key: 'value' },
      headers: { cached: true },
      method: 'GET',
      params: { pages: 2 },
      url: 'example.com',
    };
    await axiosMemoAdapter.execute(config);

    expect(spyAxiosAbortExecute).toHaveBeenCalledWith(config);

    await axiosMemoAdapter.execute(config);

    expect(spyAxiosAbortExecute).toHaveBeenCalledTimes(1);

    await axiosMemoAdapter.execute({
      ...config,
      headers: {},
    });

    expect(spyAxiosAbortExecute).toHaveBeenCalledTimes(2);
  });

  it('should catch an error', async () => {
    spyAxiosAbortExecute = jest
      .spyOn(axiosAbortAdapter, 'execute')
      .mockImplementation((): AxiosPromise<string> => {
        throw new Error('mockExecuteError');
      });
    const config: AxiosRequestConfig = {
      data: { key: 'value' },
      headers: { cached: true },
      method: 'GET',
      params: { pages: 2 },
      url: 'example.com',
    };
    try {
      await axiosMemoAdapter.execute(config);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('mockExecuteError');
    }
  });
});
