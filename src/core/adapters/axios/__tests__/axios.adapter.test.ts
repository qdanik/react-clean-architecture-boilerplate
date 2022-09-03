import axios, { AxiosRequestConfig } from 'axios';

import { AxiosAdapter } from '../axios.adapter';
import { AxiosAbortAdapter } from '../axios-abort.adapter';
import { AxiosMemoAdapter } from '../axios-memo.adapter';
import { mockData, mockUrl } from './axios.adapter.mock';

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
    axiosAdapter = new AxiosAdapter(axiosMemoAdapter, null);
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
