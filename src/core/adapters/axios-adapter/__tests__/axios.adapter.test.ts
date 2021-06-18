import axios from 'axios';
import { AxiosAdapter } from 'core/adapters';
import { mockConfig, mockData, mockUrl } from './axios.adapter.mock';

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
  let adapter: AxiosAdapter;

  describe('should execute methods with correct arguments', () => {
    beforeEach(() => {
      adapter = new AxiosAdapter();
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('create', () => {
      expect(axios.create).toHaveBeenCalled();
      expect(axios.create).toHaveBeenCalledWith(mockConfig);
    });

    it('delete', async () => {
      await adapter.delete(mockUrl, mockConfig);

      expect(axios.delete).toHaveBeenCalledWith(mockUrl, mockConfig);
    });

    it('get', async () => {
      await adapter.get(mockUrl, mockConfig);

      expect(axios.get).toHaveBeenCalledWith(mockUrl, mockConfig);
    });

    it('head', async () => {
      await adapter.head(mockUrl, mockConfig);

      expect(axios.head).toHaveBeenCalledWith(mockUrl, mockConfig);
    });

    it('options', async () => {
      await adapter.options(mockUrl, mockConfig);

      expect(axios.options).toHaveBeenCalledWith(mockUrl, mockConfig);
    });

    it('patch', async () => {
      await adapter.patch(mockUrl, mockData, mockConfig);

      expect(axios.patch).toHaveBeenCalledWith(mockUrl, mockData, mockConfig);
    });

    it('post', async () => {
      await adapter.post(mockUrl, mockData, mockConfig);

      expect(axios.post).toHaveBeenCalledWith(mockUrl, mockData, mockConfig);
    });

    it('put', async () => {
      await adapter.put(mockUrl, mockData, mockConfig);

      expect(axios.put).toHaveBeenCalledWith(mockUrl, mockData, mockConfig);
    });
  });
});
