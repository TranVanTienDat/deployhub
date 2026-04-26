/**
 * Client
 **/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model PlatformConnection
 *
 */
export type PlatformConnection =
  $Result.DefaultSelection<Prisma.$PlatformConnectionPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.platformConnection`: Exposes CRUD operations for the **PlatformConnection** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more PlatformConnections
   * const platformConnections = await prisma.platformConnection.findMany()
   * ```
   */
  get platformConnection(): Prisma.PlatformConnectionDelegate<
    ExtArgs,
    ClientOptions
  >;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    PlatformConnection: 'PlatformConnection';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: 'user' | 'platformConnection';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      PlatformConnection: {
        payload: Prisma.$PlatformConnectionPayload<ExtArgs>;
        fields: Prisma.PlatformConnectionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PlatformConnectionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformConnectionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PlatformConnectionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformConnectionPayload>;
          };
          findFirst: {
            args: Prisma.PlatformConnectionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformConnectionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PlatformConnectionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformConnectionPayload>;
          };
          findMany: {
            args: Prisma.PlatformConnectionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformConnectionPayload>[];
          };
          create: {
            args: Prisma.PlatformConnectionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformConnectionPayload>;
          };
          createMany: {
            args: Prisma.PlatformConnectionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PlatformConnectionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformConnectionPayload>[];
          };
          delete: {
            args: Prisma.PlatformConnectionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformConnectionPayload>;
          };
          update: {
            args: Prisma.PlatformConnectionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformConnectionPayload>;
          };
          deleteMany: {
            args: Prisma.PlatformConnectionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PlatformConnectionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PlatformConnectionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformConnectionPayload>[];
          };
          upsert: {
            args: Prisma.PlatformConnectionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PlatformConnectionPayload>;
          };
          aggregate: {
            args: Prisma.PlatformConnectionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePlatformConnection>;
          };
          groupBy: {
            args: Prisma.PlatformConnectionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PlatformConnectionGroupByOutputType>[];
          };
          count: {
            args: Prisma.PlatformConnectionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<PlatformConnectionCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    platformConnection?: PlatformConnectionOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    connections: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    connections?: boolean | UserCountOutputTypeCountConnectionsArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConnectionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PlatformConnectionWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    avatarUrl: string | null;
    provider: string | null;
    providerId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    avatarUrl: string | null;
    provider: string | null;
    providerId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    avatarUrl: number;
    provider: number;
    providerId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    avatarUrl?: true;
    provider?: true;
    providerId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    avatarUrl?: true;
    provider?: true;
    providerId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    avatarUrl?: true;
    provider?: true;
    providerId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    name: string | null;
    avatarUrl: string | null;
    provider: string;
    providerId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      avatarUrl?: boolean;
      provider?: boolean;
      providerId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      connections?: boolean | User$connectionsArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      avatarUrl?: boolean;
      provider?: boolean;
      providerId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      avatarUrl?: boolean;
      provider?: boolean;
      providerId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    avatarUrl?: boolean;
    provider?: boolean;
    providerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'email'
    | 'name'
    | 'avatarUrl'
    | 'provider'
    | 'providerId'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    connections?: boolean | User$connectionsArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      connections: Prisma.$PlatformConnectionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        name: string | null;
        avatarUrl: string | null;
        provider: string;
        providerId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    connections<T extends User$connectionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$connectionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PlatformConnectionPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly name: FieldRef<'User', 'String'>;
    readonly avatarUrl: FieldRef<'User', 'String'>;
    readonly provider: FieldRef<'User', 'String'>;
    readonly providerId: FieldRef<'User', 'String'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.connections
   */
  export type User$connectionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformConnection
     */
    select?: PlatformConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformConnection
     */
    omit?: PlatformConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformConnectionInclude<ExtArgs> | null;
    where?: PlatformConnectionWhereInput;
    orderBy?:
      | PlatformConnectionOrderByWithRelationInput
      | PlatformConnectionOrderByWithRelationInput[];
    cursor?: PlatformConnectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | PlatformConnectionScalarFieldEnum
      | PlatformConnectionScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model PlatformConnection
   */

  export type AggregatePlatformConnection = {
    _count: PlatformConnectionCountAggregateOutputType | null;
    _min: PlatformConnectionMinAggregateOutputType | null;
    _max: PlatformConnectionMaxAggregateOutputType | null;
  };

  export type PlatformConnectionMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: string | null;
    token: string | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    userId: string | null;
  };

  export type PlatformConnectionMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    type: string | null;
    token: string | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    userId: string | null;
  };

  export type PlatformConnectionCountAggregateOutputType = {
    id: number;
    name: number;
    type: number;
    token: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    userId: number;
    _all: number;
  };

  export type PlatformConnectionMinAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    token?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
  };

  export type PlatformConnectionMaxAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    token?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
  };

  export type PlatformConnectionCountAggregateInputType = {
    id?: true;
    name?: true;
    type?: true;
    token?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    userId?: true;
    _all?: true;
  };

  export type PlatformConnectionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PlatformConnection to aggregate.
     */
    where?: PlatformConnectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlatformConnections to fetch.
     */
    orderBy?:
      | PlatformConnectionOrderByWithRelationInput
      | PlatformConnectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PlatformConnectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlatformConnections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlatformConnections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PlatformConnections
     **/
    _count?: true | PlatformConnectionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PlatformConnectionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PlatformConnectionMaxAggregateInputType;
  };

  export type GetPlatformConnectionAggregateType<
    T extends PlatformConnectionAggregateArgs,
  > = {
    [P in keyof T & keyof AggregatePlatformConnection]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatformConnection[P]>
      : GetScalarType<T[P], AggregatePlatformConnection[P]>;
  };

  export type PlatformConnectionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PlatformConnectionWhereInput;
    orderBy?:
      | PlatformConnectionOrderByWithAggregationInput
      | PlatformConnectionOrderByWithAggregationInput[];
    by: PlatformConnectionScalarFieldEnum[] | PlatformConnectionScalarFieldEnum;
    having?: PlatformConnectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlatformConnectionCountAggregateInputType | true;
    _min?: PlatformConnectionMinAggregateInputType;
    _max?: PlatformConnectionMaxAggregateInputType;
  };

  export type PlatformConnectionGroupByOutputType = {
    id: string;
    name: string;
    type: string;
    token: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    _count: PlatformConnectionCountAggregateOutputType | null;
    _min: PlatformConnectionMinAggregateOutputType | null;
    _max: PlatformConnectionMaxAggregateOutputType | null;
  };

  type GetPlatformConnectionGroupByPayload<
    T extends PlatformConnectionGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformConnectionGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof PlatformConnectionGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PlatformConnectionGroupByOutputType[P]>
          : GetScalarType<T[P], PlatformConnectionGroupByOutputType[P]>;
      }
    >
  >;

  export type PlatformConnectionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      type?: boolean;
      token?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      userId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['platformConnection']
  >;

  export type PlatformConnectionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      type?: boolean;
      token?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      userId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['platformConnection']
  >;

  export type PlatformConnectionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      type?: boolean;
      token?: boolean;
      status?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      userId?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['platformConnection']
  >;

  export type PlatformConnectionSelectScalar = {
    id?: boolean;
    name?: boolean;
    type?: boolean;
    token?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    userId?: boolean;
  };

  export type PlatformConnectionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'name'
    | 'type'
    | 'token'
    | 'status'
    | 'createdAt'
    | 'updatedAt'
    | 'userId',
    ExtArgs['result']['platformConnection']
  >;
  export type PlatformConnectionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PlatformConnectionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PlatformConnectionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $PlatformConnectionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'PlatformConnection';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        type: string;
        token: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
      },
      ExtArgs['result']['platformConnection']
    >;
    composites: {};
  };

  type PlatformConnectionGetPayload<
    S extends boolean | null | undefined | PlatformConnectionDefaultArgs,
  > = $Result.GetResult<Prisma.$PlatformConnectionPayload, S>;

  type PlatformConnectionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    PlatformConnectionFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: PlatformConnectionCountAggregateInputType | true;
  };

  export interface PlatformConnectionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['PlatformConnection'];
      meta: { name: 'PlatformConnection' };
    };
    /**
     * Find zero or one PlatformConnection that matches the filter.
     * @param {PlatformConnectionFindUniqueArgs} args - Arguments to find a PlatformConnection
     * @example
     * // Get one PlatformConnection
     * const platformConnection = await prisma.platformConnection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformConnectionFindUniqueArgs>(
      args: SelectSubset<T, PlatformConnectionFindUniqueArgs<ExtArgs>>,
    ): Prisma__PlatformConnectionClient<
      $Result.GetResult<
        Prisma.$PlatformConnectionPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one PlatformConnection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatformConnectionFindUniqueOrThrowArgs} args - Arguments to find a PlatformConnection
     * @example
     * // Get one PlatformConnection
     * const platformConnection = await prisma.platformConnection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformConnectionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PlatformConnectionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PlatformConnectionClient<
      $Result.GetResult<
        Prisma.$PlatformConnectionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PlatformConnection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformConnectionFindFirstArgs} args - Arguments to find a PlatformConnection
     * @example
     * // Get one PlatformConnection
     * const platformConnection = await prisma.platformConnection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformConnectionFindFirstArgs>(
      args?: SelectSubset<T, PlatformConnectionFindFirstArgs<ExtArgs>>,
    ): Prisma__PlatformConnectionClient<
      $Result.GetResult<
        Prisma.$PlatformConnectionPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PlatformConnection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformConnectionFindFirstOrThrowArgs} args - Arguments to find a PlatformConnection
     * @example
     * // Get one PlatformConnection
     * const platformConnection = await prisma.platformConnection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformConnectionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PlatformConnectionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PlatformConnectionClient<
      $Result.GetResult<
        Prisma.$PlatformConnectionPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more PlatformConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlatformConnections
     * const platformConnections = await prisma.platformConnection.findMany()
     *
     * // Get first 10 PlatformConnections
     * const platformConnections = await prisma.platformConnection.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const platformConnectionWithIdOnly = await prisma.platformConnection.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PlatformConnectionFindManyArgs>(
      args?: SelectSubset<T, PlatformConnectionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PlatformConnectionPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a PlatformConnection.
     * @param {PlatformConnectionCreateArgs} args - Arguments to create a PlatformConnection.
     * @example
     * // Create one PlatformConnection
     * const PlatformConnection = await prisma.platformConnection.create({
     *   data: {
     *     // ... data to create a PlatformConnection
     *   }
     * })
     *
     */
    create<T extends PlatformConnectionCreateArgs>(
      args: SelectSubset<T, PlatformConnectionCreateArgs<ExtArgs>>,
    ): Prisma__PlatformConnectionClient<
      $Result.GetResult<
        Prisma.$PlatformConnectionPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many PlatformConnections.
     * @param {PlatformConnectionCreateManyArgs} args - Arguments to create many PlatformConnections.
     * @example
     * // Create many PlatformConnections
     * const platformConnection = await prisma.platformConnection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PlatformConnectionCreateManyArgs>(
      args?: SelectSubset<T, PlatformConnectionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many PlatformConnections and returns the data saved in the database.
     * @param {PlatformConnectionCreateManyAndReturnArgs} args - Arguments to create many PlatformConnections.
     * @example
     * // Create many PlatformConnections
     * const platformConnection = await prisma.platformConnection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PlatformConnections and only return the `id`
     * const platformConnectionWithIdOnly = await prisma.platformConnection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PlatformConnectionCreateManyAndReturnArgs>(
      args?: SelectSubset<
        T,
        PlatformConnectionCreateManyAndReturnArgs<ExtArgs>
      >,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PlatformConnectionPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a PlatformConnection.
     * @param {PlatformConnectionDeleteArgs} args - Arguments to delete one PlatformConnection.
     * @example
     * // Delete one PlatformConnection
     * const PlatformConnection = await prisma.platformConnection.delete({
     *   where: {
     *     // ... filter to delete one PlatformConnection
     *   }
     * })
     *
     */
    delete<T extends PlatformConnectionDeleteArgs>(
      args: SelectSubset<T, PlatformConnectionDeleteArgs<ExtArgs>>,
    ): Prisma__PlatformConnectionClient<
      $Result.GetResult<
        Prisma.$PlatformConnectionPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one PlatformConnection.
     * @param {PlatformConnectionUpdateArgs} args - Arguments to update one PlatformConnection.
     * @example
     * // Update one PlatformConnection
     * const platformConnection = await prisma.platformConnection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PlatformConnectionUpdateArgs>(
      args: SelectSubset<T, PlatformConnectionUpdateArgs<ExtArgs>>,
    ): Prisma__PlatformConnectionClient<
      $Result.GetResult<
        Prisma.$PlatformConnectionPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more PlatformConnections.
     * @param {PlatformConnectionDeleteManyArgs} args - Arguments to filter PlatformConnections to delete.
     * @example
     * // Delete a few PlatformConnections
     * const { count } = await prisma.platformConnection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PlatformConnectionDeleteManyArgs>(
      args?: SelectSubset<T, PlatformConnectionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PlatformConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlatformConnections
     * const platformConnection = await prisma.platformConnection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PlatformConnectionUpdateManyArgs>(
      args: SelectSubset<T, PlatformConnectionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PlatformConnections and returns the data updated in the database.
     * @param {PlatformConnectionUpdateManyAndReturnArgs} args - Arguments to update many PlatformConnections.
     * @example
     * // Update many PlatformConnections
     * const platformConnection = await prisma.platformConnection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PlatformConnections and only return the `id`
     * const platformConnectionWithIdOnly = await prisma.platformConnection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PlatformConnectionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PlatformConnectionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PlatformConnectionPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one PlatformConnection.
     * @param {PlatformConnectionUpsertArgs} args - Arguments to update or create a PlatformConnection.
     * @example
     * // Update or create a PlatformConnection
     * const platformConnection = await prisma.platformConnection.upsert({
     *   create: {
     *     // ... data to create a PlatformConnection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlatformConnection we want to update
     *   }
     * })
     */
    upsert<T extends PlatformConnectionUpsertArgs>(
      args: SelectSubset<T, PlatformConnectionUpsertArgs<ExtArgs>>,
    ): Prisma__PlatformConnectionClient<
      $Result.GetResult<
        Prisma.$PlatformConnectionPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of PlatformConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformConnectionCountArgs} args - Arguments to filter PlatformConnections to count.
     * @example
     * // Count the number of PlatformConnections
     * const count = await prisma.platformConnection.count({
     *   where: {
     *     // ... the filter for the PlatformConnections we want to count
     *   }
     * })
     **/
    count<T extends PlatformConnectionCountArgs>(
      args?: Subset<T, PlatformConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<
              T['select'],
              PlatformConnectionCountAggregateOutputType
            >
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a PlatformConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PlatformConnectionAggregateArgs>(
      args: Subset<T, PlatformConnectionAggregateArgs>,
    ): Prisma.PrismaPromise<GetPlatformConnectionAggregateType<T>>;

    /**
     * Group by PlatformConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformConnectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PlatformConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformConnectionGroupByArgs['orderBy'] }
        : { orderBy?: PlatformConnectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PlatformConnectionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetPlatformConnectionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PlatformConnection model
     */
    readonly fields: PlatformConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlatformConnection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformConnectionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the PlatformConnection model
   */
  interface PlatformConnectionFieldRefs {
    readonly id: FieldRef<'PlatformConnection', 'String'>;
    readonly name: FieldRef<'PlatformConnection', 'String'>;
    readonly type: FieldRef<'PlatformConnection', 'String'>;
    readonly token: FieldRef<'PlatformConnection', 'String'>;
    readonly status: FieldRef<'PlatformConnection', 'String'>;
    readonly createdAt: FieldRef<'PlatformConnection', 'DateTime'>;
    readonly updatedAt: FieldRef<'PlatformConnection', 'DateTime'>;
    readonly userId: FieldRef<'PlatformConnection', 'String'>;
  }

  // Custom InputTypes
  /**
   * PlatformConnection findUnique
   */
  export type PlatformConnectionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformConnection
     */
    select?: PlatformConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformConnection
     */
    omit?: PlatformConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformConnectionInclude<ExtArgs> | null;
    /**
     * Filter, which PlatformConnection to fetch.
     */
    where: PlatformConnectionWhereUniqueInput;
  };

  /**
   * PlatformConnection findUniqueOrThrow
   */
  export type PlatformConnectionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformConnection
     */
    select?: PlatformConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformConnection
     */
    omit?: PlatformConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformConnectionInclude<ExtArgs> | null;
    /**
     * Filter, which PlatformConnection to fetch.
     */
    where: PlatformConnectionWhereUniqueInput;
  };

  /**
   * PlatformConnection findFirst
   */
  export type PlatformConnectionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformConnection
     */
    select?: PlatformConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformConnection
     */
    omit?: PlatformConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformConnectionInclude<ExtArgs> | null;
    /**
     * Filter, which PlatformConnection to fetch.
     */
    where?: PlatformConnectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlatformConnections to fetch.
     */
    orderBy?:
      | PlatformConnectionOrderByWithRelationInput
      | PlatformConnectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PlatformConnections.
     */
    cursor?: PlatformConnectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlatformConnections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlatformConnections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PlatformConnections.
     */
    distinct?:
      | PlatformConnectionScalarFieldEnum
      | PlatformConnectionScalarFieldEnum[];
  };

  /**
   * PlatformConnection findFirstOrThrow
   */
  export type PlatformConnectionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformConnection
     */
    select?: PlatformConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformConnection
     */
    omit?: PlatformConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformConnectionInclude<ExtArgs> | null;
    /**
     * Filter, which PlatformConnection to fetch.
     */
    where?: PlatformConnectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlatformConnections to fetch.
     */
    orderBy?:
      | PlatformConnectionOrderByWithRelationInput
      | PlatformConnectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PlatformConnections.
     */
    cursor?: PlatformConnectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlatformConnections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlatformConnections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PlatformConnections.
     */
    distinct?:
      | PlatformConnectionScalarFieldEnum
      | PlatformConnectionScalarFieldEnum[];
  };

  /**
   * PlatformConnection findMany
   */
  export type PlatformConnectionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformConnection
     */
    select?: PlatformConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformConnection
     */
    omit?: PlatformConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformConnectionInclude<ExtArgs> | null;
    /**
     * Filter, which PlatformConnections to fetch.
     */
    where?: PlatformConnectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PlatformConnections to fetch.
     */
    orderBy?:
      | PlatformConnectionOrderByWithRelationInput
      | PlatformConnectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PlatformConnections.
     */
    cursor?: PlatformConnectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PlatformConnections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PlatformConnections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PlatformConnections.
     */
    distinct?:
      | PlatformConnectionScalarFieldEnum
      | PlatformConnectionScalarFieldEnum[];
  };

  /**
   * PlatformConnection create
   */
  export type PlatformConnectionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformConnection
     */
    select?: PlatformConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformConnection
     */
    omit?: PlatformConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformConnectionInclude<ExtArgs> | null;
    /**
     * The data needed to create a PlatformConnection.
     */
    data: XOR<
      PlatformConnectionCreateInput,
      PlatformConnectionUncheckedCreateInput
    >;
  };

  /**
   * PlatformConnection createMany
   */
  export type PlatformConnectionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many PlatformConnections.
     */
    data:
      | PlatformConnectionCreateManyInput
      | PlatformConnectionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * PlatformConnection createManyAndReturn
   */
  export type PlatformConnectionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformConnection
     */
    select?: PlatformConnectionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformConnection
     */
    omit?: PlatformConnectionOmit<ExtArgs> | null;
    /**
     * The data used to create many PlatformConnections.
     */
    data:
      | PlatformConnectionCreateManyInput
      | PlatformConnectionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformConnectionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PlatformConnection update
   */
  export type PlatformConnectionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformConnection
     */
    select?: PlatformConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformConnection
     */
    omit?: PlatformConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformConnectionInclude<ExtArgs> | null;
    /**
     * The data needed to update a PlatformConnection.
     */
    data: XOR<
      PlatformConnectionUpdateInput,
      PlatformConnectionUncheckedUpdateInput
    >;
    /**
     * Choose, which PlatformConnection to update.
     */
    where: PlatformConnectionWhereUniqueInput;
  };

  /**
   * PlatformConnection updateMany
   */
  export type PlatformConnectionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update PlatformConnections.
     */
    data: XOR<
      PlatformConnectionUpdateManyMutationInput,
      PlatformConnectionUncheckedUpdateManyInput
    >;
    /**
     * Filter which PlatformConnections to update
     */
    where?: PlatformConnectionWhereInput;
    /**
     * Limit how many PlatformConnections to update.
     */
    limit?: number;
  };

  /**
   * PlatformConnection updateManyAndReturn
   */
  export type PlatformConnectionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformConnection
     */
    select?: PlatformConnectionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformConnection
     */
    omit?: PlatformConnectionOmit<ExtArgs> | null;
    /**
     * The data used to update PlatformConnections.
     */
    data: XOR<
      PlatformConnectionUpdateManyMutationInput,
      PlatformConnectionUncheckedUpdateManyInput
    >;
    /**
     * Filter which PlatformConnections to update
     */
    where?: PlatformConnectionWhereInput;
    /**
     * Limit how many PlatformConnections to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformConnectionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PlatformConnection upsert
   */
  export type PlatformConnectionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformConnection
     */
    select?: PlatformConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformConnection
     */
    omit?: PlatformConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformConnectionInclude<ExtArgs> | null;
    /**
     * The filter to search for the PlatformConnection to update in case it exists.
     */
    where: PlatformConnectionWhereUniqueInput;
    /**
     * In case the PlatformConnection found by the `where` argument doesn't exist, create a new PlatformConnection with this data.
     */
    create: XOR<
      PlatformConnectionCreateInput,
      PlatformConnectionUncheckedCreateInput
    >;
    /**
     * In case the PlatformConnection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      PlatformConnectionUpdateInput,
      PlatformConnectionUncheckedUpdateInput
    >;
  };

  /**
   * PlatformConnection delete
   */
  export type PlatformConnectionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformConnection
     */
    select?: PlatformConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformConnection
     */
    omit?: PlatformConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformConnectionInclude<ExtArgs> | null;
    /**
     * Filter which PlatformConnection to delete.
     */
    where: PlatformConnectionWhereUniqueInput;
  };

  /**
   * PlatformConnection deleteMany
   */
  export type PlatformConnectionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PlatformConnections to delete
     */
    where?: PlatformConnectionWhereInput;
    /**
     * Limit how many PlatformConnections to delete.
     */
    limit?: number;
  };

  /**
   * PlatformConnection without action
   */
  export type PlatformConnectionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PlatformConnection
     */
    select?: PlatformConnectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PlatformConnection
     */
    omit?: PlatformConnectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatformConnectionInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    name: 'name';
    avatarUrl: 'avatarUrl';
    provider: 'provider';
    providerId: 'providerId';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const PlatformConnectionScalarFieldEnum: {
    id: 'id';
    name: 'name';
    type: 'type';
    token: 'token';
    status: 'status';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
    userId: 'userId';
  };

  export type PlatformConnectionScalarFieldEnum =
    (typeof PlatformConnectionScalarFieldEnum)[keyof typeof PlatformConnectionScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    name?: StringNullableFilter<'User'> | string | null;
    avatarUrl?: StringNullableFilter<'User'> | string | null;
    provider?: StringFilter<'User'> | string;
    providerId?: StringFilter<'User'> | string;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    connections?: PlatformConnectionListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrderInput | SortOrder;
    avatarUrl?: SortOrderInput | SortOrder;
    provider?: SortOrder;
    providerId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    connections?: PlatformConnectionOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      providerId?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringNullableFilter<'User'> | string | null;
      avatarUrl?: StringNullableFilter<'User'> | string | null;
      provider?: StringFilter<'User'> | string;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      connections?: PlatformConnectionListRelationFilter;
    },
    'id' | 'email' | 'providerId'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrderInput | SortOrder;
    avatarUrl?: SortOrderInput | SortOrder;
    provider?: SortOrder;
    providerId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    name?: StringNullableWithAggregatesFilter<'User'> | string | null;
    avatarUrl?: StringNullableWithAggregatesFilter<'User'> | string | null;
    provider?: StringWithAggregatesFilter<'User'> | string;
    providerId?: StringWithAggregatesFilter<'User'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type PlatformConnectionWhereInput = {
    AND?: PlatformConnectionWhereInput | PlatformConnectionWhereInput[];
    OR?: PlatformConnectionWhereInput[];
    NOT?: PlatformConnectionWhereInput | PlatformConnectionWhereInput[];
    id?: StringFilter<'PlatformConnection'> | string;
    name?: StringFilter<'PlatformConnection'> | string;
    type?: StringFilter<'PlatformConnection'> | string;
    token?: StringFilter<'PlatformConnection'> | string;
    status?: StringFilter<'PlatformConnection'> | string;
    createdAt?: DateTimeFilter<'PlatformConnection'> | Date | string;
    updatedAt?: DateTimeFilter<'PlatformConnection'> | Date | string;
    userId?: StringFilter<'PlatformConnection'> | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type PlatformConnectionOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    token?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    userId?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type PlatformConnectionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId_type_name?: PlatformConnectionUserIdTypeNameCompoundUniqueInput;
      AND?: PlatformConnectionWhereInput | PlatformConnectionWhereInput[];
      OR?: PlatformConnectionWhereInput[];
      NOT?: PlatformConnectionWhereInput | PlatformConnectionWhereInput[];
      name?: StringFilter<'PlatformConnection'> | string;
      type?: StringFilter<'PlatformConnection'> | string;
      token?: StringFilter<'PlatformConnection'> | string;
      status?: StringFilter<'PlatformConnection'> | string;
      createdAt?: DateTimeFilter<'PlatformConnection'> | Date | string;
      updatedAt?: DateTimeFilter<'PlatformConnection'> | Date | string;
      userId?: StringFilter<'PlatformConnection'> | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id' | 'userId_type_name'
  >;

  export type PlatformConnectionOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    token?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    userId?: SortOrder;
    _count?: PlatformConnectionCountOrderByAggregateInput;
    _max?: PlatformConnectionMaxOrderByAggregateInput;
    _min?: PlatformConnectionMinOrderByAggregateInput;
  };

  export type PlatformConnectionScalarWhereWithAggregatesInput = {
    AND?:
      | PlatformConnectionScalarWhereWithAggregatesInput
      | PlatformConnectionScalarWhereWithAggregatesInput[];
    OR?: PlatformConnectionScalarWhereWithAggregatesInput[];
    NOT?:
      | PlatformConnectionScalarWhereWithAggregatesInput
      | PlatformConnectionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'PlatformConnection'> | string;
    name?: StringWithAggregatesFilter<'PlatformConnection'> | string;
    type?: StringWithAggregatesFilter<'PlatformConnection'> | string;
    token?: StringWithAggregatesFilter<'PlatformConnection'> | string;
    status?: StringWithAggregatesFilter<'PlatformConnection'> | string;
    createdAt?:
      | DateTimeWithAggregatesFilter<'PlatformConnection'>
      | Date
      | string;
    updatedAt?:
      | DateTimeWithAggregatesFilter<'PlatformConnection'>
      | Date
      | string;
    userId?: StringWithAggregatesFilter<'PlatformConnection'> | string;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    name?: string | null;
    avatarUrl?: string | null;
    provider: string;
    providerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    connections?: PlatformConnectionCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    name?: string | null;
    avatarUrl?: string | null;
    provider: string;
    providerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    connections?: PlatformConnectionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    connections?: PlatformConnectionUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    connections?: PlatformConnectionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    name?: string | null;
    avatarUrl?: string | null;
    provider: string;
    providerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PlatformConnectionCreateInput = {
    id?: string;
    name: string;
    type: string;
    token: string;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutConnectionsInput;
  };

  export type PlatformConnectionUncheckedCreateInput = {
    id?: string;
    name: string;
    type: string;
    token: string;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
  };

  export type PlatformConnectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutConnectionsNestedInput;
  };

  export type PlatformConnectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type PlatformConnectionCreateManyInput = {
    id?: string;
    name: string;
    type: string;
    token: string;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    userId: string;
  };

  export type PlatformConnectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PlatformConnectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type PlatformConnectionListRelationFilter = {
    every?: PlatformConnectionWhereInput;
    some?: PlatformConnectionWhereInput;
    none?: PlatformConnectionWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type PlatformConnectionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    avatarUrl?: SortOrder;
    provider?: SortOrder;
    providerId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    avatarUrl?: SortOrder;
    provider?: SortOrder;
    providerId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    avatarUrl?: SortOrder;
    provider?: SortOrder;
    providerId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type PlatformConnectionUserIdTypeNameCompoundUniqueInput = {
    userId: string;
    type: string;
    name: string;
  };

  export type PlatformConnectionCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    token?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    userId?: SortOrder;
  };

  export type PlatformConnectionMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    token?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    userId?: SortOrder;
  };

  export type PlatformConnectionMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    type?: SortOrder;
    token?: SortOrder;
    status?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    userId?: SortOrder;
  };

  export type PlatformConnectionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PlatformConnectionCreateWithoutUserInput,
          PlatformConnectionUncheckedCreateWithoutUserInput
        >
      | PlatformConnectionCreateWithoutUserInput[]
      | PlatformConnectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PlatformConnectionCreateOrConnectWithoutUserInput
      | PlatformConnectionCreateOrConnectWithoutUserInput[];
    createMany?: PlatformConnectionCreateManyUserInputEnvelope;
    connect?:
      | PlatformConnectionWhereUniqueInput
      | PlatformConnectionWhereUniqueInput[];
  };

  export type PlatformConnectionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PlatformConnectionCreateWithoutUserInput,
          PlatformConnectionUncheckedCreateWithoutUserInput
        >
      | PlatformConnectionCreateWithoutUserInput[]
      | PlatformConnectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PlatformConnectionCreateOrConnectWithoutUserInput
      | PlatformConnectionCreateOrConnectWithoutUserInput[];
    createMany?: PlatformConnectionCreateManyUserInputEnvelope;
    connect?:
      | PlatformConnectionWhereUniqueInput
      | PlatformConnectionWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type PlatformConnectionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PlatformConnectionCreateWithoutUserInput,
          PlatformConnectionUncheckedCreateWithoutUserInput
        >
      | PlatformConnectionCreateWithoutUserInput[]
      | PlatformConnectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PlatformConnectionCreateOrConnectWithoutUserInput
      | PlatformConnectionCreateOrConnectWithoutUserInput[];
    upsert?:
      | PlatformConnectionUpsertWithWhereUniqueWithoutUserInput
      | PlatformConnectionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PlatformConnectionCreateManyUserInputEnvelope;
    set?:
      | PlatformConnectionWhereUniqueInput
      | PlatformConnectionWhereUniqueInput[];
    disconnect?:
      | PlatformConnectionWhereUniqueInput
      | PlatformConnectionWhereUniqueInput[];
    delete?:
      | PlatformConnectionWhereUniqueInput
      | PlatformConnectionWhereUniqueInput[];
    connect?:
      | PlatformConnectionWhereUniqueInput
      | PlatformConnectionWhereUniqueInput[];
    update?:
      | PlatformConnectionUpdateWithWhereUniqueWithoutUserInput
      | PlatformConnectionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PlatformConnectionUpdateManyWithWhereWithoutUserInput
      | PlatformConnectionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | PlatformConnectionScalarWhereInput
      | PlatformConnectionScalarWhereInput[];
  };

  export type PlatformConnectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PlatformConnectionCreateWithoutUserInput,
          PlatformConnectionUncheckedCreateWithoutUserInput
        >
      | PlatformConnectionCreateWithoutUserInput[]
      | PlatformConnectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PlatformConnectionCreateOrConnectWithoutUserInput
      | PlatformConnectionCreateOrConnectWithoutUserInput[];
    upsert?:
      | PlatformConnectionUpsertWithWhereUniqueWithoutUserInput
      | PlatformConnectionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PlatformConnectionCreateManyUserInputEnvelope;
    set?:
      | PlatformConnectionWhereUniqueInput
      | PlatformConnectionWhereUniqueInput[];
    disconnect?:
      | PlatformConnectionWhereUniqueInput
      | PlatformConnectionWhereUniqueInput[];
    delete?:
      | PlatformConnectionWhereUniqueInput
      | PlatformConnectionWhereUniqueInput[];
    connect?:
      | PlatformConnectionWhereUniqueInput
      | PlatformConnectionWhereUniqueInput[];
    update?:
      | PlatformConnectionUpdateWithWhereUniqueWithoutUserInput
      | PlatformConnectionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PlatformConnectionUpdateManyWithWhereWithoutUserInput
      | PlatformConnectionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | PlatformConnectionScalarWhereInput
      | PlatformConnectionScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutConnectionsInput = {
    create?: XOR<
      UserCreateWithoutConnectionsInput,
      UserUncheckedCreateWithoutConnectionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutConnectionsInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutConnectionsNestedInput = {
    create?: XOR<
      UserCreateWithoutConnectionsInput,
      UserUncheckedCreateWithoutConnectionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutConnectionsInput;
    upsert?: UserUpsertWithoutConnectionsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutConnectionsInput,
        UserUpdateWithoutConnectionsInput
      >,
      UserUncheckedUpdateWithoutConnectionsInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type PlatformConnectionCreateWithoutUserInput = {
    id?: string;
    name: string;
    type: string;
    token: string;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PlatformConnectionUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    type: string;
    token: string;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PlatformConnectionCreateOrConnectWithoutUserInput = {
    where: PlatformConnectionWhereUniqueInput;
    create: XOR<
      PlatformConnectionCreateWithoutUserInput,
      PlatformConnectionUncheckedCreateWithoutUserInput
    >;
  };

  export type PlatformConnectionCreateManyUserInputEnvelope = {
    data:
      | PlatformConnectionCreateManyUserInput
      | PlatformConnectionCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type PlatformConnectionUpsertWithWhereUniqueWithoutUserInput = {
    where: PlatformConnectionWhereUniqueInput;
    update: XOR<
      PlatformConnectionUpdateWithoutUserInput,
      PlatformConnectionUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      PlatformConnectionCreateWithoutUserInput,
      PlatformConnectionUncheckedCreateWithoutUserInput
    >;
  };

  export type PlatformConnectionUpdateWithWhereUniqueWithoutUserInput = {
    where: PlatformConnectionWhereUniqueInput;
    data: XOR<
      PlatformConnectionUpdateWithoutUserInput,
      PlatformConnectionUncheckedUpdateWithoutUserInput
    >;
  };

  export type PlatformConnectionUpdateManyWithWhereWithoutUserInput = {
    where: PlatformConnectionScalarWhereInput;
    data: XOR<
      PlatformConnectionUpdateManyMutationInput,
      PlatformConnectionUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type PlatformConnectionScalarWhereInput = {
    AND?:
      | PlatformConnectionScalarWhereInput
      | PlatformConnectionScalarWhereInput[];
    OR?: PlatformConnectionScalarWhereInput[];
    NOT?:
      | PlatformConnectionScalarWhereInput
      | PlatformConnectionScalarWhereInput[];
    id?: StringFilter<'PlatformConnection'> | string;
    name?: StringFilter<'PlatformConnection'> | string;
    type?: StringFilter<'PlatformConnection'> | string;
    token?: StringFilter<'PlatformConnection'> | string;
    status?: StringFilter<'PlatformConnection'> | string;
    createdAt?: DateTimeFilter<'PlatformConnection'> | Date | string;
    updatedAt?: DateTimeFilter<'PlatformConnection'> | Date | string;
    userId?: StringFilter<'PlatformConnection'> | string;
  };

  export type UserCreateWithoutConnectionsInput = {
    id?: string;
    email: string;
    name?: string | null;
    avatarUrl?: string | null;
    provider: string;
    providerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUncheckedCreateWithoutConnectionsInput = {
    id?: string;
    email: string;
    name?: string | null;
    avatarUrl?: string | null;
    provider: string;
    providerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserCreateOrConnectWithoutConnectionsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutConnectionsInput,
      UserUncheckedCreateWithoutConnectionsInput
    >;
  };

  export type UserUpsertWithoutConnectionsInput = {
    update: XOR<
      UserUpdateWithoutConnectionsInput,
      UserUncheckedUpdateWithoutConnectionsInput
    >;
    create: XOR<
      UserCreateWithoutConnectionsInput,
      UserUncheckedCreateWithoutConnectionsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutConnectionsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutConnectionsInput,
      UserUncheckedUpdateWithoutConnectionsInput
    >;
  };

  export type UserUpdateWithoutConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateWithoutConnectionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null;
    provider?: StringFieldUpdateOperationsInput | string;
    providerId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PlatformConnectionCreateManyUserInput = {
    id?: string;
    name: string;
    type: string;
    token: string;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PlatformConnectionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PlatformConnectionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PlatformConnectionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    type?: StringFieldUpdateOperationsInput | string;
    token?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
