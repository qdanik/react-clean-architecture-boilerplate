export function buildUrl(baseUrl: string, mapper: Record<string, string>): string {
  return Object.keys(mapper).reduce(
    (acc, key) => acc.replace(new RegExp(`\\{${key}\\}`, 'g'), mapper[key]),
    baseUrl,
  );
}
