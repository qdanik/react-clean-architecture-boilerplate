import { buildUrl } from 'core/utils';

import { EndpointInterface } from './endpoint.types';

export class Endpoint<T extends string = never> implements EndpointInterface<T> {
  constructor(private readonly _baseUrl: string) {}

  get baseUrl(): string {
    return this._baseUrl;
  }

  toUrl(map?: T extends string ? Record<T, string> : never): string {
    if (map) {
      return buildUrl(this.baseUrl, map);
    }

    return this.baseUrl;
  }
}
