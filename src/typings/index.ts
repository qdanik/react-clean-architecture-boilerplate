declare const $NestedValue: unique symbol;

export type NestedValue<TValue extends PropertyValues = PropertyValues> = {
  [$NestedValue]: never;
} & TValue;

export type GetNestedValue<T> = T extends NestedValue<infer U>
  ? U
  : T extends readonly unknown[] | Record<string, unknown>
  ? {
      [K in keyof T]: GetNestedValue<T[K]>;
    }
  : T;

export type Primitive = null | undefined | string | number | boolean | symbol | bigint;

export type IsTuple<T extends readonly unknown[]> = number extends T['length'] ? false : true;
export type TupleKey<T extends readonly unknown[]> = Exclude<keyof T, keyof unknown[]>;
export type ArrayKey = number;

export type PathImpl<K extends string | number, V> = V extends Primitive
  ? `${K}`
  : `${K}` | `${K}.${Path<V>}`;
export type Path<T> = T extends readonly (infer V)[]
  ? IsTuple<T> extends true
    ? {
        [K in TupleKey<T>]-?: PathImpl<K & string, T[K]>;
      }[TupleKey<T>]
    : PathImpl<ArrayKey, V>
  : {
      [K in keyof T]-?: PathImpl<K & string, T[K]>;
    }[keyof T];

export type ArrayPathImpl<K extends string | number, V> = V extends Primitive
  ? never
  : V extends readonly (infer U)[]
  ? U extends Primitive
    ? never
    : `${K}` | `${K}.${ArrayPath<V>}`
  : `${K}.${ArrayPath<V>}`;

export type ArrayPath<T> = T extends readonly (infer V)[]
  ? IsTuple<T> extends true
    ? {
        [K in TupleKey<T>]-?: ArrayPathImpl<K & string, T[K]>;
      }[TupleKey<T>]
    : ArrayPathImpl<ArrayKey, V>
  : {
      [K in keyof T]-?: ArrayPathImpl<K & string, T[K]>;
    }[keyof T];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PropertyValues = Record<string, any>;

export type PropertyPath<TPropertyValues extends PropertyValues> = Path<TPropertyValues>;

export type PathValue<T, P extends Path<T> | ArrayPath<T>> = T extends unknown
  ? P extends `${infer K}.${infer R}`
    ? K extends keyof T
      ? R extends Path<T[K]>
        ? PathValue<T[K], R>
        : never
      : K extends `${ArrayKey}`
      ? T extends Readonly<(infer V)[]>
        ? PathValue<V, R & Path<V>>
        : never
      : never
    : P extends keyof T
    ? T[P]
    : P extends `${ArrayKey}`
    ? T extends Readonly<(infer V)[]>
      ? V
      : never
    : never
  : never;

export type PropertyPathValue<
  TPropertyValues extends PropertyValues,
  TPropertyPath extends PropertyPath<TPropertyValues>,
> = PathValue<TPropertyValues, TPropertyPath>;
