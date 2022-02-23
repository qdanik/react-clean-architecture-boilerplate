import axios, { AxiosRequestConfig } from 'axios';
import { containers } from 'containers/containers';
import { AxiosAdapter } from 'core/adapters';
import { HttpClientType } from 'core/http';
import { mockData, mockUrl } from './axios.adapter.mock';

jest.mock('axios', () => {
  const mockAxios = {
    delete: jest.fn(() => Promise.resolve()),
    get: jest.fn(() => Promise.resolve()),
    head: jest.fn(() => Promise.resolve()),
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

describe('AxiosAdapterFake', () => {
  let axiosAdapter: AxiosAdapter;
  let axiosConfig: AxiosRequestConfig;

  describe('should execute methods with correct arguments', () => {
    beforeEach(() => {
      containers.snapshot();
      axiosAdapter = containers.get(HttpClientType) as AxiosAdapter;
      axiosConfig = axiosAdapter.getConfig();
    });

    afterEach(() => {
      containers.restore();
      jest.restoreAllMocks();
    });

    it('create an axios instance', () => {
      expect(axios.create).toHaveBeenCalled();
      expect(axios.create).toHaveBeenCalledWith(axiosConfig);
    });

    it('delete', async () => {
      await axiosAdapter.delete(mockUrl, axiosConfig);

      expect(axios.delete).toHaveBeenCalledWith(mockUrl, axiosConfig);
    });

    it('get', async () => {
      await axiosAdapter.get(mockUrl, axiosConfig);

      expect(axios.get).toHaveBeenCalledWith(mockUrl, axiosConfig);
    });

    it('head', async () => {
      await axiosAdapter.head(mockUrl, axiosConfig);

      expect(axios.head).toHaveBeenCalledWith(mockUrl, axiosConfig);
    });

    it('options', async () => {
      await axiosAdapter.options(mockUrl, axiosConfig);

      expect(axios.options).toHaveBeenCalledWith(mockUrl, axiosConfig);
    });

    it('patch', async () => {
      await axiosAdapter.patch(mockUrl, mockData, axiosConfig);

      expect(axios.patch).toHaveBeenCalledWith(mockUrl, mockData, axiosConfig);
    });

    it('post', async () => {
      await axiosAdapter.post(mockUrl, mockData, axiosConfig);

      expect(axios.post).toHaveBeenCalledWith(mockUrl, mockData, axiosConfig);
    });

    it('put', async () => {
      await axiosAdapter.put(mockUrl, mockData, axiosConfig);

      expect(axios.put).toHaveBeenCalledWith(mockUrl, mockData, axiosConfig);
    });
  });
});
