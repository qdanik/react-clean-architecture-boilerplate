export const clearUrl = (baseUrl: string): string => {
  const prefix = baseUrl.startsWith('https') ? 'https://' : 'http://';
  const url = baseUrl.replace(prefix, '').replaceAll('//', '/');

  return `${prefix}${url}`;
};

export const getBackendUrl = (): string => {
  // see vite/server.ts for proxy config to /api
  return !IS_DEV ? BACKEND_URL : window.location.origin;
};
