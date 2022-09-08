import some from 'lodash/some';

import { buildRoute, isNullable } from 'core/utils';

export class Route<T extends string> {
  constructor(private readonly _baseUrl: string) {}

  get baseUrl(): string {
    return this._baseUrl;
  }

  toUrl(map: Record<T, string>, searchParams?: URLSearchParams): string {
    const url = buildRoute(this._baseUrl, map);

    if (url && searchParams) {
      return `${url}?${searchParams.toString()}`;
    }

    return url;
  }

  toSafeUrl(map: Record<T, string>, searchParams?: URLSearchParams): string {
    if (some(map, isNullable)) {
      return null;
    }

    return this.toUrl(map, searchParams);
  }

  toString(): string {
    return this._baseUrl;
  }

  isEquals(route: Route<T>): boolean {
    return this.baseUrl === route.baseUrl;
  }
}
