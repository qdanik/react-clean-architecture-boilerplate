export function buildUrl(baseUrl: string, mapper?: Record<string, string | number>): string {
  if (!mapper) {
    return baseUrl;
  }

  return Object.keys(mapper).reduce(
    (acc, key) => acc.replace(new RegExp(`\\{${key}\\}`, 'g'), mapper?.[key].toString()),
    baseUrl,
  );
}

export function buildRoute(baseUrl: string, mapper?: Record<string, string | number>): string {
  if (!mapper) {
    return baseUrl;
  }

  return Object.keys(mapper).reduce(
    (acc, key) => acc.replace(new RegExp(`\\:${key}`, 'g'), mapper?.[key].toString()),
    baseUrl,
  );
}
