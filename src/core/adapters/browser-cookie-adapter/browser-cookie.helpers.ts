export function correctKey(key: string): string {
  switch (key) {
    case 'maxAge':
      return 'max-age';
    default:
      return key;
  }
}
