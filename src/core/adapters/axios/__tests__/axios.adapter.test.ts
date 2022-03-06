import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';
import { AbortPromise } from 'core/http';
import { mockData, mockUrl } from './axios.adapter.mock';
import { AxiosAbortAdapter } from '../axios-abort.adapter';
import { AxiosMemoAdapter } from '../axios-memo.adapter';
import { AxiosAdapter } from '../axios.adapter';

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
    delete: jest.fn(() => Promise.resolve()),
    get: jest.fn(() => Promise.resolve()),
    head: jest.fn(() => Promise.resolve()),
    interceptors: {
      request: {
        use: jest.fn(() => Promise.resolve()),
      },
      response: {
        use: jest.fn(() => Promise.resolve()),
      },
    },
    options: jest.fn(() => Promise.resolve()),
    patch: jest.fn(() => Promise.resolve()),
    post: jest.fn(() => Promise.resolve()),
    put: jest.fn(() => Promise.resolve()),
  };

  return {
    create: jest.fn(() => mockAxios),
    ...mockAxios,
  };
});

describe('AxiosAdapters', () => {
  let axiosAdapter: AxiosAdapter;
  let axiosAbortAdapter: AxiosAbortAdapter;
  let axiosMemoAdapter: AxiosMemoAdapter;
  let axiosConfig: AxiosRequestConfig;

  beforeEach(() => {
    axiosAbortAdapter = new AxiosAbortAdapter();
    axiosMemoAdapter = new AxiosMemoAdapter(axiosAbortAdapter);
    axiosAdapter = new AxiosAdapter(axiosMemoAdapter);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('AxiosAdapter', () => {
    beforeEach(() => {
      axiosAdapter.initialize();
      axiosConfig = axiosAdapter.getConfig();
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('create an axios instance', () => {
      expect(axios.create).toHaveBeenCalled();
      expect(axios.create).toHaveBeenCalledWith(axiosConfig);
    });

    it('send DELETE request', async () => {
      await axiosAdapter.delete(mockUrl, axiosConfig);

      expect(axios.delete).toHaveBeenCalledWith(mockUrl, axiosConfig);
    });

    it('send GET request', async () => {
      await axiosAdapter.get(mockUrl, axiosConfig);

      expect(axios.get).toHaveBeenCalledWith(mockUrl, axiosConfig);
    });

    it('send HEAD request', async () => {
      await axiosAdapter.head(mockUrl, axiosConfig);

      expect(axios.head).toHaveBeenCalledWith(mockUrl, axiosConfig);
    });

    it('send OPTIONS request', async () => {
      await axiosAdapter.options(mockUrl, axiosConfig);

      expect(axios.options).toHaveBeenCalledWith(mockUrl, axiosConfig);
    });

    it('send PATCH request', async () => {
      await axiosAdapter.patch(mockUrl, mockData, axiosConfig);

      expect(axios.patch).toHaveBeenCalledWith(mockUrl, mockData, axiosConfig);
    });

    it('send POST request', async () => {
      await axiosAdapter.post(mockUrl, mockData, axiosConfig);

      expect(axios.post).toHaveBeenCalledWith(mockUrl, mockData, axiosConfig);
    });

    it('send PUT request', async () => {
      await axiosAdapter.put(mockUrl, mockData, axiosConfig);

      expect(axios.put).toHaveBeenCalledWith(mockUrl, mockData, axiosConfig);
    });

    it('set REQUEST interceptors', () => {
      const callback = () => null;
      axiosAdapter.setRequestInterceptors(callback, callback);

      expect(axios.interceptors.request.use).toHaveBeenCalledWith(callback, callback);
    });

    it('set RESPONSE interceptors', () => {
      const callback = () => null;
      axiosAdapter.setResponseInterceptors(callback, callback);

      expect(axios.interceptors.response.use).toHaveBeenCalledWith(callback, callback);
    });
  });

  describe('AxiosMemoAdapter', () => {
    let spyAxiosAbortExecute;

    beforeEach(() => {
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

  describe('AxiosAbortAdapter', () => {
    it('should execute adapter with default axios adapter', async () => {
      const spyAbortController = jest.spyOn(AbortController.prototype, 'abort');
      const config: AxiosRequestConfig = {
        data: { key: 'value' },
        method: 'GET',
        params: { pages: 2 },
        url: 'example.com',
      };
      const response: AbortPromise<any> = axiosAbortAdapter.execute(config);
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
});
