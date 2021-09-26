export interface EndpointInterface<T extends string = never> {
  readonly baseUrl: string;

  toUrl(): string;
  toUrl(map: Record<T, string>): string;
}
