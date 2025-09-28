
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Offer
 * 
 */
export type Offer = $Result.DefaultSelection<Prisma.$OfferPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model Checkout
 * 
 */
export type Checkout = $Result.DefaultSelection<Prisma.$CheckoutPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Offers
 * const offers = await prisma.offer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Offers
   * const offers = await prisma.offer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.offer`: Exposes CRUD operations for the **Offer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offers
    * const offers = await prisma.offer.findMany()
    * ```
    */
  get offer(): Prisma.OfferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkout`: Exposes CRUD operations for the **Checkout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checkouts
    * const checkouts = await prisma.checkout.findMany()
    * ```
    */
  get checkout(): Prisma.CheckoutDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Offer: 'Offer',
    Client: 'Client',
    Sale: 'Sale',
    Checkout: 'Checkout'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "offer" | "client" | "sale" | "checkout"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Offer: {
        payload: Prisma.$OfferPayload<ExtArgs>
        fields: Prisma.OfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findFirst: {
            args: Prisma.OfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findMany: {
            args: Prisma.OfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          create: {
            args: Prisma.OfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          createMany: {
            args: Prisma.OfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          delete: {
            args: Prisma.OfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          update: {
            args: Prisma.OfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          deleteMany: {
            args: Prisma.OfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          upsert: {
            args: Prisma.OfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          aggregate: {
            args: Prisma.OfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffer>
          }
          groupBy: {
            args: Prisma.OfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferCountArgs<ExtArgs>
            result: $Utils.Optional<OfferCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      Checkout: {
        payload: Prisma.$CheckoutPayload<ExtArgs>
        fields: Prisma.CheckoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload>
          }
          findFirst: {
            args: Prisma.CheckoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload>
          }
          findMany: {
            args: Prisma.CheckoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload>[]
          }
          create: {
            args: Prisma.CheckoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload>
          }
          createMany: {
            args: Prisma.CheckoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload>[]
          }
          delete: {
            args: Prisma.CheckoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload>
          }
          update: {
            args: Prisma.CheckoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload>
          }
          deleteMany: {
            args: Prisma.CheckoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CheckoutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload>[]
          }
          upsert: {
            args: Prisma.CheckoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckoutPayload>
          }
          aggregate: {
            args: Prisma.CheckoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckout>
          }
          groupBy: {
            args: Prisma.CheckoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckoutCountArgs<ExtArgs>
            result: $Utils.Optional<CheckoutCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    offer?: OfferOmit
    client?: ClientOmit
    sale?: SaleOmit
    checkout?: CheckoutOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
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
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OfferCountOutputType
   */

  export type OfferCountOutputType = {
    sales: number
  }

  export type OfferCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | OfferCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * OfferCountOutputType without action
   */
  export type OfferCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferCountOutputType
     */
    select?: OfferCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OfferCountOutputType without action
   */
  export type OfferCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    offers: number
    sales: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | ClientCountOutputTypeCountOffersArgs
    sales?: boolean | ClientCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Offer
   */

  export type AggregateOffer = {
    _count: OfferCountAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  export type OfferMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    useTax: boolean | null
    createdAt: Date | null
    clientId: string | null
  }

  export type OfferMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    useTax: boolean | null
    createdAt: Date | null
    clientId: string | null
  }

  export type OfferCountAggregateOutputType = {
    id: number
    name: number
    description: number
    useTax: number
    createdAt: number
    clientId: number
    _all: number
  }


  export type OfferMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    useTax?: true
    createdAt?: true
    clientId?: true
  }

  export type OfferMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    useTax?: true
    createdAt?: true
    clientId?: true
  }

  export type OfferCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    useTax?: true
    createdAt?: true
    clientId?: true
    _all?: true
  }

  export type OfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offer to aggregate.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offers
    **/
    _count?: true | OfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferMaxAggregateInputType
  }

  export type GetOfferAggregateType<T extends OfferAggregateArgs> = {
        [P in keyof T & keyof AggregateOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffer[P]>
      : GetScalarType<T[P], AggregateOffer[P]>
  }




  export type OfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithAggregationInput | OfferOrderByWithAggregationInput[]
    by: OfferScalarFieldEnum[] | OfferScalarFieldEnum
    having?: OfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferCountAggregateInputType | true
    _min?: OfferMinAggregateInputType
    _max?: OfferMaxAggregateInputType
  }

  export type OfferGroupByOutputType = {
    id: string
    name: string
    description: string | null
    useTax: boolean
    createdAt: Date
    clientId: string
    _count: OfferCountAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  type GetOfferGroupByPayload<T extends OfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferGroupByOutputType[P]>
            : GetScalarType<T[P], OfferGroupByOutputType[P]>
        }
      >
    >


  export type OfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    useTax?: boolean
    createdAt?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    sales?: boolean | Offer$salesArgs<ExtArgs>
    _count?: boolean | OfferCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    useTax?: boolean
    createdAt?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    useTax?: boolean
    createdAt?: boolean
    clientId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    useTax?: boolean
    createdAt?: boolean
    clientId?: boolean
  }

  export type OfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "useTax" | "createdAt" | "clientId", ExtArgs["result"]["offer"]>
  export type OfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    sales?: boolean | Offer$salesArgs<ExtArgs>
    _count?: boolean | OfferCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type OfferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $OfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Offer"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      sales: Prisma.$SalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      useTax: boolean
      createdAt: Date
      clientId: string
    }, ExtArgs["result"]["offer"]>
    composites: {}
  }

  type OfferGetPayload<S extends boolean | null | undefined | OfferDefaultArgs> = $Result.GetResult<Prisma.$OfferPayload, S>

  type OfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfferCountAggregateInputType | true
    }

  export interface OfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Offer'], meta: { name: 'Offer' } }
    /**
     * Find zero or one Offer that matches the filter.
     * @param {OfferFindUniqueArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferFindUniqueArgs>(args: SelectSubset<T, OfferFindUniqueArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Offer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfferFindUniqueOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferFindFirstArgs>(args?: SelectSubset<T, OfferFindFirstArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offers
     * const offers = await prisma.offer.findMany()
     * 
     * // Get first 10 Offers
     * const offers = await prisma.offer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerWithIdOnly = await prisma.offer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferFindManyArgs>(args?: SelectSubset<T, OfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Offer.
     * @param {OfferCreateArgs} args - Arguments to create a Offer.
     * @example
     * // Create one Offer
     * const Offer = await prisma.offer.create({
     *   data: {
     *     // ... data to create a Offer
     *   }
     * })
     * 
     */
    create<T extends OfferCreateArgs>(args: SelectSubset<T, OfferCreateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Offers.
     * @param {OfferCreateManyArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferCreateManyArgs>(args?: SelectSubset<T, OfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Offers and returns the data saved in the database.
     * @param {OfferCreateManyAndReturnArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Offer.
     * @param {OfferDeleteArgs} args - Arguments to delete one Offer.
     * @example
     * // Delete one Offer
     * const Offer = await prisma.offer.delete({
     *   where: {
     *     // ... filter to delete one Offer
     *   }
     * })
     * 
     */
    delete<T extends OfferDeleteArgs>(args: SelectSubset<T, OfferDeleteArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Offer.
     * @param {OfferUpdateArgs} args - Arguments to update one Offer.
     * @example
     * // Update one Offer
     * const offer = await prisma.offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferUpdateArgs>(args: SelectSubset<T, OfferUpdateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Offers.
     * @param {OfferDeleteManyArgs} args - Arguments to filter Offers to delete.
     * @example
     * // Delete a few Offers
     * const { count } = await prisma.offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferDeleteManyArgs>(args?: SelectSubset<T, OfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferUpdateManyArgs>(args: SelectSubset<T, OfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers and returns the data updated in the database.
     * @param {OfferUpdateManyAndReturnArgs} args - Arguments to update many Offers.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.updateManyAndReturn({
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
    updateManyAndReturn<T extends OfferUpdateManyAndReturnArgs>(args: SelectSubset<T, OfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Offer.
     * @param {OfferUpsertArgs} args - Arguments to update or create a Offer.
     * @example
     * // Update or create a Offer
     * const offer = await prisma.offer.upsert({
     *   create: {
     *     // ... data to create a Offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offer we want to update
     *   }
     * })
     */
    upsert<T extends OfferUpsertArgs>(args: SelectSubset<T, OfferUpsertArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCountArgs} args - Arguments to filter Offers to count.
     * @example
     * // Count the number of Offers
     * const count = await prisma.offer.count({
     *   where: {
     *     // ... the filter for the Offers we want to count
     *   }
     * })
    **/
    count<T extends OfferCountArgs>(
      args?: Subset<T, OfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfferAggregateArgs>(args: Subset<T, OfferAggregateArgs>): Prisma.PrismaPromise<GetOfferAggregateType<T>>

    /**
     * Group by Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferGroupByArgs} args - Group by arguments.
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
      T extends OfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferGroupByArgs['orderBy'] }
        : { orderBy?: OfferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Offer model
   */
  readonly fields: OfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sales<T extends Offer$salesArgs<ExtArgs> = {}>(args?: Subset<T, Offer$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Offer model
   */
  interface OfferFieldRefs {
    readonly id: FieldRef<"Offer", 'String'>
    readonly name: FieldRef<"Offer", 'String'>
    readonly description: FieldRef<"Offer", 'String'>
    readonly useTax: FieldRef<"Offer", 'Boolean'>
    readonly createdAt: FieldRef<"Offer", 'DateTime'>
    readonly clientId: FieldRef<"Offer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Offer findUnique
   */
  export type OfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findUniqueOrThrow
   */
  export type OfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findFirst
   */
  export type OfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findFirstOrThrow
   */
  export type OfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findMany
   */
  export type OfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offers to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer create
   */
  export type OfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to create a Offer.
     */
    data: XOR<OfferCreateInput, OfferUncheckedCreateInput>
  }

  /**
   * Offer createMany
   */
  export type OfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Offer createManyAndReturn
   */
  export type OfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer update
   */
  export type OfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to update a Offer.
     */
    data: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
    /**
     * Choose, which Offer to update.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer updateMany
   */
  export type OfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
  }

  /**
   * Offer updateManyAndReturn
   */
  export type OfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer upsert
   */
  export type OfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The filter to search for the Offer to update in case it exists.
     */
    where: OfferWhereUniqueInput
    /**
     * In case the Offer found by the `where` argument doesn't exist, create a new Offer with this data.
     */
    create: XOR<OfferCreateInput, OfferUncheckedCreateInput>
    /**
     * In case the Offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
  }

  /**
   * Offer delete
   */
  export type OfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter which Offer to delete.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer deleteMany
   */
  export type OfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offers to delete
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to delete.
     */
    limit?: number
  }

  /**
   * Offer.sales
   */
  export type Offer$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Offer without action
   */
  export type OfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    token: string | null
    publicKey: string | null
    useTax: boolean | null
    createdAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    token: string | null
    publicKey: string | null
    useTax: boolean | null
    createdAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    description: number
    token: number
    publicKey: number
    useTax: number
    createdAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    token?: true
    publicKey?: true
    useTax?: true
    createdAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    token?: true
    publicKey?: true
    useTax?: true
    createdAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    token?: true
    publicKey?: true
    useTax?: true
    createdAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    description: string | null
    token: string
    publicKey: string | null
    useTax: boolean
    createdAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    token?: boolean
    publicKey?: boolean
    useTax?: boolean
    createdAt?: boolean
    offers?: boolean | Client$offersArgs<ExtArgs>
    sales?: boolean | Client$salesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    token?: boolean
    publicKey?: boolean
    useTax?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    token?: boolean
    publicKey?: boolean
    useTax?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    token?: boolean
    publicKey?: boolean
    useTax?: boolean
    createdAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "token" | "publicKey" | "useTax" | "createdAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | Client$offersArgs<ExtArgs>
    sales?: boolean | Client$salesArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      offers: Prisma.$OfferPayload<ExtArgs>[]
      sales: Prisma.$SalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      token: string
      publicKey: string | null
      useTax: boolean
      createdAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offers<T extends Client$offersArgs<ExtArgs> = {}>(args?: Subset<T, Client$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends Client$salesArgs<ExtArgs> = {}>(args?: Subset<T, Client$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly description: FieldRef<"Client", 'String'>
    readonly token: FieldRef<"Client", 'String'>
    readonly publicKey: FieldRef<"Client", 'String'>
    readonly useTax: FieldRef<"Client", 'Boolean'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.offers
   */
  export type Client$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    cursor?: OfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Client.sales
   */
  export type Client$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    amount: number | null
  }

  export type SaleSumAggregateOutputType = {
    amount: number | null
  }

  export type SaleMinAggregateOutputType = {
    id: string | null
    ghostId: string | null
    approved: boolean | null
    productName: string | null
    customerName: string | null
    visible: boolean | null
    amount: number | null
    toClient: boolean | null
    createdAt: Date | null
    clientId: string | null
    offerId: string | null
  }

  export type SaleMaxAggregateOutputType = {
    id: string | null
    ghostId: string | null
    approved: boolean | null
    productName: string | null
    customerName: string | null
    visible: boolean | null
    amount: number | null
    toClient: boolean | null
    createdAt: Date | null
    clientId: string | null
    offerId: string | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    ghostId: number
    approved: number
    productName: number
    customerName: number
    visible: number
    amount: number
    toClient: number
    createdAt: number
    clientId: number
    offerId: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    amount?: true
  }

  export type SaleSumAggregateInputType = {
    amount?: true
  }

  export type SaleMinAggregateInputType = {
    id?: true
    ghostId?: true
    approved?: true
    productName?: true
    customerName?: true
    visible?: true
    amount?: true
    toClient?: true
    createdAt?: true
    clientId?: true
    offerId?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    ghostId?: true
    approved?: true
    productName?: true
    customerName?: true
    visible?: true
    amount?: true
    toClient?: true
    createdAt?: true
    clientId?: true
    offerId?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    ghostId?: true
    approved?: true
    productName?: true
    customerName?: true
    visible?: true
    amount?: true
    toClient?: true
    createdAt?: true
    clientId?: true
    offerId?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    id: string
    ghostId: string
    approved: boolean
    productName: string
    customerName: string
    visible: boolean | null
    amount: number
    toClient: boolean
    createdAt: Date
    clientId: string
    offerId: string | null
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ghostId?: boolean
    approved?: boolean
    productName?: boolean
    customerName?: boolean
    visible?: boolean
    amount?: boolean
    toClient?: boolean
    createdAt?: boolean
    clientId?: boolean
    offerId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    offer?: boolean | Sale$offerArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ghostId?: boolean
    approved?: boolean
    productName?: boolean
    customerName?: boolean
    visible?: boolean
    amount?: boolean
    toClient?: boolean
    createdAt?: boolean
    clientId?: boolean
    offerId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    offer?: boolean | Sale$offerArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ghostId?: boolean
    approved?: boolean
    productName?: boolean
    customerName?: boolean
    visible?: boolean
    amount?: boolean
    toClient?: boolean
    createdAt?: boolean
    clientId?: boolean
    offerId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    offer?: boolean | Sale$offerArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectScalar = {
    id?: boolean
    ghostId?: boolean
    approved?: boolean
    productName?: boolean
    customerName?: boolean
    visible?: boolean
    amount?: boolean
    toClient?: boolean
    createdAt?: boolean
    clientId?: boolean
    offerId?: boolean
  }

  export type SaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ghostId" | "approved" | "productName" | "customerName" | "visible" | "amount" | "toClient" | "createdAt" | "clientId" | "offerId", ExtArgs["result"]["sale"]>
  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    offer?: boolean | Sale$offerArgs<ExtArgs>
  }
  export type SaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    offer?: boolean | Sale$offerArgs<ExtArgs>
  }
  export type SaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    offer?: boolean | Sale$offerArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      offer: Prisma.$OfferPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ghostId: string
      approved: boolean
      productName: string
      customerName: string
      visible: boolean | null
      amount: number
      toClient: boolean
      createdAt: Date
      clientId: string
      offerId: string | null
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SaleUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.updateManyAndReturn({
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
    updateManyAndReturn<T extends SaleUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
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
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    offer<T extends Sale$offerArgs<ExtArgs> = {}>(args?: Subset<T, Sale$offerArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sale model
   */
  interface SaleFieldRefs {
    readonly id: FieldRef<"Sale", 'String'>
    readonly ghostId: FieldRef<"Sale", 'String'>
    readonly approved: FieldRef<"Sale", 'Boolean'>
    readonly productName: FieldRef<"Sale", 'String'>
    readonly customerName: FieldRef<"Sale", 'String'>
    readonly visible: FieldRef<"Sale", 'Boolean'>
    readonly amount: FieldRef<"Sale", 'Float'>
    readonly toClient: FieldRef<"Sale", 'Boolean'>
    readonly createdAt: FieldRef<"Sale", 'DateTime'>
    readonly clientId: FieldRef<"Sale", 'String'>
    readonly offerId: FieldRef<"Sale", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sale createManyAndReturn
   */
  export type SaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sale updateManyAndReturn
   */
  export type SaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sale.offer
   */
  export type Sale$offerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Model Checkout
   */

  export type AggregateCheckout = {
    _count: CheckoutCountAggregateOutputType | null
    _min: CheckoutMinAggregateOutputType | null
    _max: CheckoutMaxAggregateOutputType | null
  }

  export type CheckoutMinAggregateOutputType = {
    id: string | null
    myCheckout: string | null
    offer: string | null
    lastClientCheckout: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type CheckoutMaxAggregateOutputType = {
    id: string | null
    myCheckout: string | null
    offer: string | null
    lastClientCheckout: string | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type CheckoutCountAggregateOutputType = {
    id: number
    myCheckout: number
    offer: number
    lastClientCheckout: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type CheckoutMinAggregateInputType = {
    id?: true
    myCheckout?: true
    offer?: true
    lastClientCheckout?: true
    updatedAt?: true
    createdAt?: true
  }

  export type CheckoutMaxAggregateInputType = {
    id?: true
    myCheckout?: true
    offer?: true
    lastClientCheckout?: true
    updatedAt?: true
    createdAt?: true
  }

  export type CheckoutCountAggregateInputType = {
    id?: true
    myCheckout?: true
    offer?: true
    lastClientCheckout?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type CheckoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkout to aggregate.
     */
    where?: CheckoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkouts to fetch.
     */
    orderBy?: CheckoutOrderByWithRelationInput | CheckoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Checkouts
    **/
    _count?: true | CheckoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckoutMaxAggregateInputType
  }

  export type GetCheckoutAggregateType<T extends CheckoutAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckout[P]>
      : GetScalarType<T[P], AggregateCheckout[P]>
  }




  export type CheckoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckoutWhereInput
    orderBy?: CheckoutOrderByWithAggregationInput | CheckoutOrderByWithAggregationInput[]
    by: CheckoutScalarFieldEnum[] | CheckoutScalarFieldEnum
    having?: CheckoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckoutCountAggregateInputType | true
    _min?: CheckoutMinAggregateInputType
    _max?: CheckoutMaxAggregateInputType
  }

  export type CheckoutGroupByOutputType = {
    id: string
    myCheckout: string
    offer: string | null
    lastClientCheckout: string | null
    updatedAt: Date
    createdAt: Date
    _count: CheckoutCountAggregateOutputType | null
    _min: CheckoutMinAggregateOutputType | null
    _max: CheckoutMaxAggregateOutputType | null
  }

  type GetCheckoutGroupByPayload<T extends CheckoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckoutGroupByOutputType[P]>
            : GetScalarType<T[P], CheckoutGroupByOutputType[P]>
        }
      >
    >


  export type CheckoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    myCheckout?: boolean
    offer?: boolean
    lastClientCheckout?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["checkout"]>

  export type CheckoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    myCheckout?: boolean
    offer?: boolean
    lastClientCheckout?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["checkout"]>

  export type CheckoutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    myCheckout?: boolean
    offer?: boolean
    lastClientCheckout?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["checkout"]>

  export type CheckoutSelectScalar = {
    id?: boolean
    myCheckout?: boolean
    offer?: boolean
    lastClientCheckout?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type CheckoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "myCheckout" | "offer" | "lastClientCheckout" | "updatedAt" | "createdAt", ExtArgs["result"]["checkout"]>

  export type $CheckoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Checkout"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      myCheckout: string
      offer: string | null
      lastClientCheckout: string | null
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["checkout"]>
    composites: {}
  }

  type CheckoutGetPayload<S extends boolean | null | undefined | CheckoutDefaultArgs> = $Result.GetResult<Prisma.$CheckoutPayload, S>

  type CheckoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckoutCountAggregateInputType | true
    }

  export interface CheckoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Checkout'], meta: { name: 'Checkout' } }
    /**
     * Find zero or one Checkout that matches the filter.
     * @param {CheckoutFindUniqueArgs} args - Arguments to find a Checkout
     * @example
     * // Get one Checkout
     * const checkout = await prisma.checkout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckoutFindUniqueArgs>(args: SelectSubset<T, CheckoutFindUniqueArgs<ExtArgs>>): Prisma__CheckoutClient<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Checkout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckoutFindUniqueOrThrowArgs} args - Arguments to find a Checkout
     * @example
     * // Get one Checkout
     * const checkout = await prisma.checkout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckoutFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckoutClient<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checkout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutFindFirstArgs} args - Arguments to find a Checkout
     * @example
     * // Get one Checkout
     * const checkout = await prisma.checkout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckoutFindFirstArgs>(args?: SelectSubset<T, CheckoutFindFirstArgs<ExtArgs>>): Prisma__CheckoutClient<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checkout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutFindFirstOrThrowArgs} args - Arguments to find a Checkout
     * @example
     * // Get one Checkout
     * const checkout = await prisma.checkout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckoutFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckoutClient<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checkouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checkouts
     * const checkouts = await prisma.checkout.findMany()
     * 
     * // Get first 10 Checkouts
     * const checkouts = await prisma.checkout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkoutWithIdOnly = await prisma.checkout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckoutFindManyArgs>(args?: SelectSubset<T, CheckoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Checkout.
     * @param {CheckoutCreateArgs} args - Arguments to create a Checkout.
     * @example
     * // Create one Checkout
     * const Checkout = await prisma.checkout.create({
     *   data: {
     *     // ... data to create a Checkout
     *   }
     * })
     * 
     */
    create<T extends CheckoutCreateArgs>(args: SelectSubset<T, CheckoutCreateArgs<ExtArgs>>): Prisma__CheckoutClient<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Checkouts.
     * @param {CheckoutCreateManyArgs} args - Arguments to create many Checkouts.
     * @example
     * // Create many Checkouts
     * const checkout = await prisma.checkout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckoutCreateManyArgs>(args?: SelectSubset<T, CheckoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Checkouts and returns the data saved in the database.
     * @param {CheckoutCreateManyAndReturnArgs} args - Arguments to create many Checkouts.
     * @example
     * // Create many Checkouts
     * const checkout = await prisma.checkout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Checkouts and only return the `id`
     * const checkoutWithIdOnly = await prisma.checkout.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckoutCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Checkout.
     * @param {CheckoutDeleteArgs} args - Arguments to delete one Checkout.
     * @example
     * // Delete one Checkout
     * const Checkout = await prisma.checkout.delete({
     *   where: {
     *     // ... filter to delete one Checkout
     *   }
     * })
     * 
     */
    delete<T extends CheckoutDeleteArgs>(args: SelectSubset<T, CheckoutDeleteArgs<ExtArgs>>): Prisma__CheckoutClient<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Checkout.
     * @param {CheckoutUpdateArgs} args - Arguments to update one Checkout.
     * @example
     * // Update one Checkout
     * const checkout = await prisma.checkout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckoutUpdateArgs>(args: SelectSubset<T, CheckoutUpdateArgs<ExtArgs>>): Prisma__CheckoutClient<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Checkouts.
     * @param {CheckoutDeleteManyArgs} args - Arguments to filter Checkouts to delete.
     * @example
     * // Delete a few Checkouts
     * const { count } = await prisma.checkout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckoutDeleteManyArgs>(args?: SelectSubset<T, CheckoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checkouts
     * const checkout = await prisma.checkout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckoutUpdateManyArgs>(args: SelectSubset<T, CheckoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkouts and returns the data updated in the database.
     * @param {CheckoutUpdateManyAndReturnArgs} args - Arguments to update many Checkouts.
     * @example
     * // Update many Checkouts
     * const checkout = await prisma.checkout.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Checkouts and only return the `id`
     * const checkoutWithIdOnly = await prisma.checkout.updateManyAndReturn({
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
    updateManyAndReturn<T extends CheckoutUpdateManyAndReturnArgs>(args: SelectSubset<T, CheckoutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Checkout.
     * @param {CheckoutUpsertArgs} args - Arguments to update or create a Checkout.
     * @example
     * // Update or create a Checkout
     * const checkout = await prisma.checkout.upsert({
     *   create: {
     *     // ... data to create a Checkout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checkout we want to update
     *   }
     * })
     */
    upsert<T extends CheckoutUpsertArgs>(args: SelectSubset<T, CheckoutUpsertArgs<ExtArgs>>): Prisma__CheckoutClient<$Result.GetResult<Prisma.$CheckoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Checkouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutCountArgs} args - Arguments to filter Checkouts to count.
     * @example
     * // Count the number of Checkouts
     * const count = await prisma.checkout.count({
     *   where: {
     *     // ... the filter for the Checkouts we want to count
     *   }
     * })
    **/
    count<T extends CheckoutCountArgs>(
      args?: Subset<T, CheckoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checkout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckoutAggregateArgs>(args: Subset<T, CheckoutAggregateArgs>): Prisma.PrismaPromise<GetCheckoutAggregateType<T>>

    /**
     * Group by Checkout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckoutGroupByArgs} args - Group by arguments.
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
      T extends CheckoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckoutGroupByArgs['orderBy'] }
        : { orderBy?: CheckoutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
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
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CheckoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Checkout model
   */
  readonly fields: CheckoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Checkout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Checkout model
   */
  interface CheckoutFieldRefs {
    readonly id: FieldRef<"Checkout", 'String'>
    readonly myCheckout: FieldRef<"Checkout", 'String'>
    readonly offer: FieldRef<"Checkout", 'String'>
    readonly lastClientCheckout: FieldRef<"Checkout", 'String'>
    readonly updatedAt: FieldRef<"Checkout", 'DateTime'>
    readonly createdAt: FieldRef<"Checkout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Checkout findUnique
   */
  export type CheckoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout
     */
    omit?: CheckoutOmit<ExtArgs> | null
    /**
     * Filter, which Checkout to fetch.
     */
    where: CheckoutWhereUniqueInput
  }

  /**
   * Checkout findUniqueOrThrow
   */
  export type CheckoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout
     */
    omit?: CheckoutOmit<ExtArgs> | null
    /**
     * Filter, which Checkout to fetch.
     */
    where: CheckoutWhereUniqueInput
  }

  /**
   * Checkout findFirst
   */
  export type CheckoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout
     */
    omit?: CheckoutOmit<ExtArgs> | null
    /**
     * Filter, which Checkout to fetch.
     */
    where?: CheckoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkouts to fetch.
     */
    orderBy?: CheckoutOrderByWithRelationInput | CheckoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkouts.
     */
    cursor?: CheckoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkouts.
     */
    distinct?: CheckoutScalarFieldEnum | CheckoutScalarFieldEnum[]
  }

  /**
   * Checkout findFirstOrThrow
   */
  export type CheckoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout
     */
    omit?: CheckoutOmit<ExtArgs> | null
    /**
     * Filter, which Checkout to fetch.
     */
    where?: CheckoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkouts to fetch.
     */
    orderBy?: CheckoutOrderByWithRelationInput | CheckoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checkouts.
     */
    cursor?: CheckoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checkouts.
     */
    distinct?: CheckoutScalarFieldEnum | CheckoutScalarFieldEnum[]
  }

  /**
   * Checkout findMany
   */
  export type CheckoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout
     */
    omit?: CheckoutOmit<ExtArgs> | null
    /**
     * Filter, which Checkouts to fetch.
     */
    where?: CheckoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checkouts to fetch.
     */
    orderBy?: CheckoutOrderByWithRelationInput | CheckoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Checkouts.
     */
    cursor?: CheckoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checkouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checkouts.
     */
    skip?: number
    distinct?: CheckoutScalarFieldEnum | CheckoutScalarFieldEnum[]
  }

  /**
   * Checkout create
   */
  export type CheckoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout
     */
    omit?: CheckoutOmit<ExtArgs> | null
    /**
     * The data needed to create a Checkout.
     */
    data: XOR<CheckoutCreateInput, CheckoutUncheckedCreateInput>
  }

  /**
   * Checkout createMany
   */
  export type CheckoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Checkouts.
     */
    data: CheckoutCreateManyInput | CheckoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Checkout createManyAndReturn
   */
  export type CheckoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout
     */
    omit?: CheckoutOmit<ExtArgs> | null
    /**
     * The data used to create many Checkouts.
     */
    data: CheckoutCreateManyInput | CheckoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Checkout update
   */
  export type CheckoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout
     */
    omit?: CheckoutOmit<ExtArgs> | null
    /**
     * The data needed to update a Checkout.
     */
    data: XOR<CheckoutUpdateInput, CheckoutUncheckedUpdateInput>
    /**
     * Choose, which Checkout to update.
     */
    where: CheckoutWhereUniqueInput
  }

  /**
   * Checkout updateMany
   */
  export type CheckoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Checkouts.
     */
    data: XOR<CheckoutUpdateManyMutationInput, CheckoutUncheckedUpdateManyInput>
    /**
     * Filter which Checkouts to update
     */
    where?: CheckoutWhereInput
    /**
     * Limit how many Checkouts to update.
     */
    limit?: number
  }

  /**
   * Checkout updateManyAndReturn
   */
  export type CheckoutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout
     */
    omit?: CheckoutOmit<ExtArgs> | null
    /**
     * The data used to update Checkouts.
     */
    data: XOR<CheckoutUpdateManyMutationInput, CheckoutUncheckedUpdateManyInput>
    /**
     * Filter which Checkouts to update
     */
    where?: CheckoutWhereInput
    /**
     * Limit how many Checkouts to update.
     */
    limit?: number
  }

  /**
   * Checkout upsert
   */
  export type CheckoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout
     */
    omit?: CheckoutOmit<ExtArgs> | null
    /**
     * The filter to search for the Checkout to update in case it exists.
     */
    where: CheckoutWhereUniqueInput
    /**
     * In case the Checkout found by the `where` argument doesn't exist, create a new Checkout with this data.
     */
    create: XOR<CheckoutCreateInput, CheckoutUncheckedCreateInput>
    /**
     * In case the Checkout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckoutUpdateInput, CheckoutUncheckedUpdateInput>
  }

  /**
   * Checkout delete
   */
  export type CheckoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout
     */
    omit?: CheckoutOmit<ExtArgs> | null
    /**
     * Filter which Checkout to delete.
     */
    where: CheckoutWhereUniqueInput
  }

  /**
   * Checkout deleteMany
   */
  export type CheckoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checkouts to delete
     */
    where?: CheckoutWhereInput
    /**
     * Limit how many Checkouts to delete.
     */
    limit?: number
  }

  /**
   * Checkout without action
   */
  export type CheckoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkout
     */
    select?: CheckoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checkout
     */
    omit?: CheckoutOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OfferScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    useTax: 'useTax',
    createdAt: 'createdAt',
    clientId: 'clientId'
  };

  export type OfferScalarFieldEnum = (typeof OfferScalarFieldEnum)[keyof typeof OfferScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    token: 'token',
    publicKey: 'publicKey',
    useTax: 'useTax',
    createdAt: 'createdAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    id: 'id',
    ghostId: 'ghostId',
    approved: 'approved',
    productName: 'productName',
    customerName: 'customerName',
    visible: 'visible',
    amount: 'amount',
    toClient: 'toClient',
    createdAt: 'createdAt',
    clientId: 'clientId',
    offerId: 'offerId'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const CheckoutScalarFieldEnum: {
    id: 'id',
    myCheckout: 'myCheckout',
    offer: 'offer',
    lastClientCheckout: 'lastClientCheckout',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type CheckoutScalarFieldEnum = (typeof CheckoutScalarFieldEnum)[keyof typeof CheckoutScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type OfferWhereInput = {
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    id?: StringFilter<"Offer"> | string
    name?: StringFilter<"Offer"> | string
    description?: StringNullableFilter<"Offer"> | string | null
    useTax?: BoolFilter<"Offer"> | boolean
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    clientId?: StringFilter<"Offer"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    sales?: SaleListRelationFilter
  }

  export type OfferOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    useTax?: SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
    client?: ClientOrderByWithRelationInput
    sales?: SaleOrderByRelationAggregateInput
  }

  export type OfferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    name?: StringFilter<"Offer"> | string
    description?: StringNullableFilter<"Offer"> | string | null
    useTax?: BoolFilter<"Offer"> | boolean
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    clientId?: StringFilter<"Offer"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    sales?: SaleListRelationFilter
  }, "id">

  export type OfferOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    useTax?: SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
    _count?: OfferCountOrderByAggregateInput
    _max?: OfferMaxOrderByAggregateInput
    _min?: OfferMinOrderByAggregateInput
  }

  export type OfferScalarWhereWithAggregatesInput = {
    AND?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    OR?: OfferScalarWhereWithAggregatesInput[]
    NOT?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Offer"> | string
    name?: StringWithAggregatesFilter<"Offer"> | string
    description?: StringNullableWithAggregatesFilter<"Offer"> | string | null
    useTax?: BoolWithAggregatesFilter<"Offer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Offer"> | Date | string
    clientId?: StringWithAggregatesFilter<"Offer"> | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    description?: StringNullableFilter<"Client"> | string | null
    token?: StringFilter<"Client"> | string
    publicKey?: StringNullableFilter<"Client"> | string | null
    useTax?: BoolFilter<"Client"> | boolean
    createdAt?: DateTimeFilter<"Client"> | Date | string
    offers?: OfferListRelationFilter
    sales?: SaleListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    token?: SortOrder
    publicKey?: SortOrderInput | SortOrder
    useTax?: SortOrder
    createdAt?: SortOrder
    offers?: OfferOrderByRelationAggregateInput
    sales?: SaleOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    description?: StringNullableFilter<"Client"> | string | null
    publicKey?: StringNullableFilter<"Client"> | string | null
    useTax?: BoolFilter<"Client"> | boolean
    createdAt?: DateTimeFilter<"Client"> | Date | string
    offers?: OfferListRelationFilter
    sales?: SaleListRelationFilter
  }, "id" | "token">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    token?: SortOrder
    publicKey?: SortOrderInput | SortOrder
    useTax?: SortOrder
    createdAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    description?: StringNullableWithAggregatesFilter<"Client"> | string | null
    token?: StringWithAggregatesFilter<"Client"> | string
    publicKey?: StringNullableWithAggregatesFilter<"Client"> | string | null
    useTax?: BoolWithAggregatesFilter<"Client"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    id?: StringFilter<"Sale"> | string
    ghostId?: StringFilter<"Sale"> | string
    approved?: BoolFilter<"Sale"> | boolean
    productName?: StringFilter<"Sale"> | string
    customerName?: StringFilter<"Sale"> | string
    visible?: BoolNullableFilter<"Sale"> | boolean | null
    amount?: FloatFilter<"Sale"> | number
    toClient?: BoolFilter<"Sale"> | boolean
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    clientId?: StringFilter<"Sale"> | string
    offerId?: StringNullableFilter<"Sale"> | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    offer?: XOR<OfferNullableScalarRelationFilter, OfferWhereInput> | null
  }

  export type SaleOrderByWithRelationInput = {
    id?: SortOrder
    ghostId?: SortOrder
    approved?: SortOrder
    productName?: SortOrder
    customerName?: SortOrder
    visible?: SortOrderInput | SortOrder
    amount?: SortOrder
    toClient?: SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
    offerId?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
    offer?: OfferOrderByWithRelationInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ghostId?: string
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    approved?: BoolFilter<"Sale"> | boolean
    productName?: StringFilter<"Sale"> | string
    customerName?: StringFilter<"Sale"> | string
    visible?: BoolNullableFilter<"Sale"> | boolean | null
    amount?: FloatFilter<"Sale"> | number
    toClient?: BoolFilter<"Sale"> | boolean
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    clientId?: StringFilter<"Sale"> | string
    offerId?: StringNullableFilter<"Sale"> | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    offer?: XOR<OfferNullableScalarRelationFilter, OfferWhereInput> | null
  }, "id" | "ghostId">

  export type SaleOrderByWithAggregationInput = {
    id?: SortOrder
    ghostId?: SortOrder
    approved?: SortOrder
    productName?: SortOrder
    customerName?: SortOrder
    visible?: SortOrderInput | SortOrder
    amount?: SortOrder
    toClient?: SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
    offerId?: SortOrderInput | SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sale"> | string
    ghostId?: StringWithAggregatesFilter<"Sale"> | string
    approved?: BoolWithAggregatesFilter<"Sale"> | boolean
    productName?: StringWithAggregatesFilter<"Sale"> | string
    customerName?: StringWithAggregatesFilter<"Sale"> | string
    visible?: BoolNullableWithAggregatesFilter<"Sale"> | boolean | null
    amount?: FloatWithAggregatesFilter<"Sale"> | number
    toClient?: BoolWithAggregatesFilter<"Sale"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
    clientId?: StringWithAggregatesFilter<"Sale"> | string
    offerId?: StringNullableWithAggregatesFilter<"Sale"> | string | null
  }

  export type CheckoutWhereInput = {
    AND?: CheckoutWhereInput | CheckoutWhereInput[]
    OR?: CheckoutWhereInput[]
    NOT?: CheckoutWhereInput | CheckoutWhereInput[]
    id?: StringFilter<"Checkout"> | string
    myCheckout?: StringFilter<"Checkout"> | string
    offer?: StringNullableFilter<"Checkout"> | string | null
    lastClientCheckout?: StringNullableFilter<"Checkout"> | string | null
    updatedAt?: DateTimeFilter<"Checkout"> | Date | string
    createdAt?: DateTimeFilter<"Checkout"> | Date | string
  }

  export type CheckoutOrderByWithRelationInput = {
    id?: SortOrder
    myCheckout?: SortOrder
    offer?: SortOrderInput | SortOrder
    lastClientCheckout?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CheckoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    offer?: string
    AND?: CheckoutWhereInput | CheckoutWhereInput[]
    OR?: CheckoutWhereInput[]
    NOT?: CheckoutWhereInput | CheckoutWhereInput[]
    myCheckout?: StringFilter<"Checkout"> | string
    lastClientCheckout?: StringNullableFilter<"Checkout"> | string | null
    updatedAt?: DateTimeFilter<"Checkout"> | Date | string
    createdAt?: DateTimeFilter<"Checkout"> | Date | string
  }, "id" | "offer">

  export type CheckoutOrderByWithAggregationInput = {
    id?: SortOrder
    myCheckout?: SortOrder
    offer?: SortOrderInput | SortOrder
    lastClientCheckout?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: CheckoutCountOrderByAggregateInput
    _max?: CheckoutMaxOrderByAggregateInput
    _min?: CheckoutMinOrderByAggregateInput
  }

  export type CheckoutScalarWhereWithAggregatesInput = {
    AND?: CheckoutScalarWhereWithAggregatesInput | CheckoutScalarWhereWithAggregatesInput[]
    OR?: CheckoutScalarWhereWithAggregatesInput[]
    NOT?: CheckoutScalarWhereWithAggregatesInput | CheckoutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Checkout"> | string
    myCheckout?: StringWithAggregatesFilter<"Checkout"> | string
    offer?: StringNullableWithAggregatesFilter<"Checkout"> | string | null
    lastClientCheckout?: StringNullableWithAggregatesFilter<"Checkout"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Checkout"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Checkout"> | Date | string
  }

  export type OfferCreateInput = {
    id?: string
    name: string
    description?: string | null
    useTax: boolean
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutOffersInput
    sales?: SaleCreateNestedManyWithoutOfferInput
  }

  export type OfferUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    useTax: boolean
    createdAt?: Date | string
    clientId: string
    sales?: SaleUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    useTax?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutOffersNestedInput
    sales?: SaleUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    useTax?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    sales?: SaleUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type OfferCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    useTax: boolean
    createdAt?: Date | string
    clientId: string
  }

  export type OfferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    useTax?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    useTax?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    description?: string | null
    token: string
    publicKey?: string | null
    useTax: boolean
    createdAt?: Date | string
    offers?: OfferCreateNestedManyWithoutClientInput
    sales?: SaleCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    token: string
    publicKey?: string | null
    useTax: boolean
    createdAt?: Date | string
    offers?: OfferUncheckedCreateNestedManyWithoutClientInput
    sales?: SaleUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    useTax?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUpdateManyWithoutClientNestedInput
    sales?: SaleUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    useTax?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUncheckedUpdateManyWithoutClientNestedInput
    sales?: SaleUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    token: string
    publicKey?: string | null
    useTax: boolean
    createdAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    useTax?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    useTax?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateInput = {
    id?: string
    ghostId: string
    approved: boolean
    productName: string
    customerName: string
    visible?: boolean | null
    amount: number
    toClient: boolean
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutSalesInput
    offer?: OfferCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateInput = {
    id?: string
    ghostId: string
    approved: boolean
    productName: string
    customerName: string
    visible?: boolean | null
    amount: number
    toClient: boolean
    createdAt?: Date | string
    clientId: string
    offerId?: string | null
  }

  export type SaleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ghostId?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    productName?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: FloatFieldUpdateOperationsInput | number
    toClient?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutSalesNestedInput
    offer?: OfferUpdateOneWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ghostId?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    productName?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: FloatFieldUpdateOperationsInput | number
    toClient?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SaleCreateManyInput = {
    id?: string
    ghostId: string
    approved: boolean
    productName: string
    customerName: string
    visible?: boolean | null
    amount: number
    toClient: boolean
    createdAt?: Date | string
    clientId: string
    offerId?: string | null
  }

  export type SaleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ghostId?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    productName?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: FloatFieldUpdateOperationsInput | number
    toClient?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ghostId?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    productName?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: FloatFieldUpdateOperationsInput | number
    toClient?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckoutCreateInput = {
    id?: string
    myCheckout: string
    offer?: string | null
    lastClientCheckout?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type CheckoutUncheckedCreateInput = {
    id?: string
    myCheckout: string
    offer?: string | null
    lastClientCheckout?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type CheckoutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    myCheckout?: StringFieldUpdateOperationsInput | string
    offer?: NullableStringFieldUpdateOperationsInput | string | null
    lastClientCheckout?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckoutUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    myCheckout?: StringFieldUpdateOperationsInput | string
    offer?: NullableStringFieldUpdateOperationsInput | string | null
    lastClientCheckout?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckoutCreateManyInput = {
    id?: string
    myCheckout: string
    offer?: string | null
    lastClientCheckout?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type CheckoutUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    myCheckout?: StringFieldUpdateOperationsInput | string
    offer?: NullableStringFieldUpdateOperationsInput | string | null
    lastClientCheckout?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckoutUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    myCheckout?: StringFieldUpdateOperationsInput | string
    offer?: NullableStringFieldUpdateOperationsInput | string | null
    lastClientCheckout?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfferCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    useTax?: SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
  }

  export type OfferMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    useTax?: SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
  }

  export type OfferMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    useTax?: SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OfferListRelationFilter = {
    every?: OfferWhereInput
    some?: OfferWhereInput
    none?: OfferWhereInput
  }

  export type OfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    token?: SortOrder
    publicKey?: SortOrder
    useTax?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    token?: SortOrder
    publicKey?: SortOrder
    useTax?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    token?: SortOrder
    publicKey?: SortOrder
    useTax?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OfferNullableScalarRelationFilter = {
    is?: OfferWhereInput | null
    isNot?: OfferWhereInput | null
  }

  export type SaleCountOrderByAggregateInput = {
    id?: SortOrder
    ghostId?: SortOrder
    approved?: SortOrder
    productName?: SortOrder
    customerName?: SortOrder
    visible?: SortOrder
    amount?: SortOrder
    toClient?: SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
    offerId?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    id?: SortOrder
    ghostId?: SortOrder
    approved?: SortOrder
    productName?: SortOrder
    customerName?: SortOrder
    visible?: SortOrder
    amount?: SortOrder
    toClient?: SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
    offerId?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    id?: SortOrder
    ghostId?: SortOrder
    approved?: SortOrder
    productName?: SortOrder
    customerName?: SortOrder
    visible?: SortOrder
    amount?: SortOrder
    toClient?: SortOrder
    createdAt?: SortOrder
    clientId?: SortOrder
    offerId?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CheckoutCountOrderByAggregateInput = {
    id?: SortOrder
    myCheckout?: SortOrder
    offer?: SortOrder
    lastClientCheckout?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CheckoutMaxOrderByAggregateInput = {
    id?: SortOrder
    myCheckout?: SortOrder
    offer?: SortOrder
    lastClientCheckout?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CheckoutMinOrderByAggregateInput = {
    id?: SortOrder
    myCheckout?: SortOrder
    offer?: SortOrder
    lastClientCheckout?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientCreateNestedOneWithoutOffersInput = {
    create?: XOR<ClientCreateWithoutOffersInput, ClientUncheckedCreateWithoutOffersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutOffersInput
    connect?: ClientWhereUniqueInput
  }

  export type SaleCreateNestedManyWithoutOfferInput = {
    create?: XOR<SaleCreateWithoutOfferInput, SaleUncheckedCreateWithoutOfferInput> | SaleCreateWithoutOfferInput[] | SaleUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutOfferInput | SaleCreateOrConnectWithoutOfferInput[]
    createMany?: SaleCreateManyOfferInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutOfferInput = {
    create?: XOR<SaleCreateWithoutOfferInput, SaleUncheckedCreateWithoutOfferInput> | SaleCreateWithoutOfferInput[] | SaleUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutOfferInput | SaleCreateOrConnectWithoutOfferInput[]
    createMany?: SaleCreateManyOfferInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<ClientCreateWithoutOffersInput, ClientUncheckedCreateWithoutOffersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutOffersInput
    upsert?: ClientUpsertWithoutOffersInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutOffersInput, ClientUpdateWithoutOffersInput>, ClientUncheckedUpdateWithoutOffersInput>
  }

  export type SaleUpdateManyWithoutOfferNestedInput = {
    create?: XOR<SaleCreateWithoutOfferInput, SaleUncheckedCreateWithoutOfferInput> | SaleCreateWithoutOfferInput[] | SaleUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutOfferInput | SaleCreateOrConnectWithoutOfferInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutOfferInput | SaleUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: SaleCreateManyOfferInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutOfferInput | SaleUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutOfferInput | SaleUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutOfferNestedInput = {
    create?: XOR<SaleCreateWithoutOfferInput, SaleUncheckedCreateWithoutOfferInput> | SaleCreateWithoutOfferInput[] | SaleUncheckedCreateWithoutOfferInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutOfferInput | SaleCreateOrConnectWithoutOfferInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutOfferInput | SaleUpsertWithWhereUniqueWithoutOfferInput[]
    createMany?: SaleCreateManyOfferInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutOfferInput | SaleUpdateWithWhereUniqueWithoutOfferInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutOfferInput | SaleUpdateManyWithWhereWithoutOfferInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type OfferCreateNestedManyWithoutClientInput = {
    create?: XOR<OfferCreateWithoutClientInput, OfferUncheckedCreateWithoutClientInput> | OfferCreateWithoutClientInput[] | OfferUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutClientInput | OfferCreateOrConnectWithoutClientInput[]
    createMany?: OfferCreateManyClientInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type SaleCreateNestedManyWithoutClientInput = {
    create?: XOR<SaleCreateWithoutClientInput, SaleUncheckedCreateWithoutClientInput> | SaleCreateWithoutClientInput[] | SaleUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutClientInput | SaleCreateOrConnectWithoutClientInput[]
    createMany?: SaleCreateManyClientInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type OfferUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<OfferCreateWithoutClientInput, OfferUncheckedCreateWithoutClientInput> | OfferCreateWithoutClientInput[] | OfferUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutClientInput | OfferCreateOrConnectWithoutClientInput[]
    createMany?: OfferCreateManyClientInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<SaleCreateWithoutClientInput, SaleUncheckedCreateWithoutClientInput> | SaleCreateWithoutClientInput[] | SaleUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutClientInput | SaleCreateOrConnectWithoutClientInput[]
    createMany?: SaleCreateManyClientInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type OfferUpdateManyWithoutClientNestedInput = {
    create?: XOR<OfferCreateWithoutClientInput, OfferUncheckedCreateWithoutClientInput> | OfferCreateWithoutClientInput[] | OfferUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutClientInput | OfferCreateOrConnectWithoutClientInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutClientInput | OfferUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OfferCreateManyClientInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutClientInput | OfferUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutClientInput | OfferUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type SaleUpdateManyWithoutClientNestedInput = {
    create?: XOR<SaleCreateWithoutClientInput, SaleUncheckedCreateWithoutClientInput> | SaleCreateWithoutClientInput[] | SaleUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutClientInput | SaleCreateOrConnectWithoutClientInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutClientInput | SaleUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SaleCreateManyClientInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutClientInput | SaleUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutClientInput | SaleUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type OfferUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<OfferCreateWithoutClientInput, OfferUncheckedCreateWithoutClientInput> | OfferCreateWithoutClientInput[] | OfferUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutClientInput | OfferCreateOrConnectWithoutClientInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutClientInput | OfferUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OfferCreateManyClientInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutClientInput | OfferUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutClientInput | OfferUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<SaleCreateWithoutClientInput, SaleUncheckedCreateWithoutClientInput> | SaleCreateWithoutClientInput[] | SaleUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutClientInput | SaleCreateOrConnectWithoutClientInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutClientInput | SaleUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SaleCreateManyClientInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutClientInput | SaleUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutClientInput | SaleUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutSalesInput = {
    create?: XOR<ClientCreateWithoutSalesInput, ClientUncheckedCreateWithoutSalesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSalesInput
    connect?: ClientWhereUniqueInput
  }

  export type OfferCreateNestedOneWithoutSalesInput = {
    create?: XOR<OfferCreateWithoutSalesInput, OfferUncheckedCreateWithoutSalesInput>
    connectOrCreate?: OfferCreateOrConnectWithoutSalesInput
    connect?: OfferWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<ClientCreateWithoutSalesInput, ClientUncheckedCreateWithoutSalesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSalesInput
    upsert?: ClientUpsertWithoutSalesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutSalesInput, ClientUpdateWithoutSalesInput>, ClientUncheckedUpdateWithoutSalesInput>
  }

  export type OfferUpdateOneWithoutSalesNestedInput = {
    create?: XOR<OfferCreateWithoutSalesInput, OfferUncheckedCreateWithoutSalesInput>
    connectOrCreate?: OfferCreateOrConnectWithoutSalesInput
    upsert?: OfferUpsertWithoutSalesInput
    disconnect?: OfferWhereInput | boolean
    delete?: OfferWhereInput | boolean
    connect?: OfferWhereUniqueInput
    update?: XOR<XOR<OfferUpdateToOneWithWhereWithoutSalesInput, OfferUpdateWithoutSalesInput>, OfferUncheckedUpdateWithoutSalesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ClientCreateWithoutOffersInput = {
    id?: string
    name: string
    description?: string | null
    token: string
    publicKey?: string | null
    useTax: boolean
    createdAt?: Date | string
    sales?: SaleCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutOffersInput = {
    id?: string
    name: string
    description?: string | null
    token: string
    publicKey?: string | null
    useTax: boolean
    createdAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutOffersInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutOffersInput, ClientUncheckedCreateWithoutOffersInput>
  }

  export type SaleCreateWithoutOfferInput = {
    id?: string
    ghostId: string
    approved: boolean
    productName: string
    customerName: string
    visible?: boolean | null
    amount: number
    toClient: boolean
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateWithoutOfferInput = {
    id?: string
    ghostId: string
    approved: boolean
    productName: string
    customerName: string
    visible?: boolean | null
    amount: number
    toClient: boolean
    createdAt?: Date | string
    clientId: string
  }

  export type SaleCreateOrConnectWithoutOfferInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutOfferInput, SaleUncheckedCreateWithoutOfferInput>
  }

  export type SaleCreateManyOfferInputEnvelope = {
    data: SaleCreateManyOfferInput | SaleCreateManyOfferInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutOffersInput = {
    update: XOR<ClientUpdateWithoutOffersInput, ClientUncheckedUpdateWithoutOffersInput>
    create: XOR<ClientCreateWithoutOffersInput, ClientUncheckedCreateWithoutOffersInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutOffersInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutOffersInput, ClientUncheckedUpdateWithoutOffersInput>
  }

  export type ClientUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    useTax?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutOffersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    useTax?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutClientNestedInput
  }

  export type SaleUpsertWithWhereUniqueWithoutOfferInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutOfferInput, SaleUncheckedUpdateWithoutOfferInput>
    create: XOR<SaleCreateWithoutOfferInput, SaleUncheckedCreateWithoutOfferInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutOfferInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutOfferInput, SaleUncheckedUpdateWithoutOfferInput>
  }

  export type SaleUpdateManyWithWhereWithoutOfferInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutOfferInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    id?: StringFilter<"Sale"> | string
    ghostId?: StringFilter<"Sale"> | string
    approved?: BoolFilter<"Sale"> | boolean
    productName?: StringFilter<"Sale"> | string
    customerName?: StringFilter<"Sale"> | string
    visible?: BoolNullableFilter<"Sale"> | boolean | null
    amount?: FloatFilter<"Sale"> | number
    toClient?: BoolFilter<"Sale"> | boolean
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    clientId?: StringFilter<"Sale"> | string
    offerId?: StringNullableFilter<"Sale"> | string | null
  }

  export type OfferCreateWithoutClientInput = {
    id?: string
    name: string
    description?: string | null
    useTax: boolean
    createdAt?: Date | string
    sales?: SaleCreateNestedManyWithoutOfferInput
  }

  export type OfferUncheckedCreateWithoutClientInput = {
    id?: string
    name: string
    description?: string | null
    useTax: boolean
    createdAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutOfferInput
  }

  export type OfferCreateOrConnectWithoutClientInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutClientInput, OfferUncheckedCreateWithoutClientInput>
  }

  export type OfferCreateManyClientInputEnvelope = {
    data: OfferCreateManyClientInput | OfferCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type SaleCreateWithoutClientInput = {
    id?: string
    ghostId: string
    approved: boolean
    productName: string
    customerName: string
    visible?: boolean | null
    amount: number
    toClient: boolean
    createdAt?: Date | string
    offer?: OfferCreateNestedOneWithoutSalesInput
  }

  export type SaleUncheckedCreateWithoutClientInput = {
    id?: string
    ghostId: string
    approved: boolean
    productName: string
    customerName: string
    visible?: boolean | null
    amount: number
    toClient: boolean
    createdAt?: Date | string
    offerId?: string | null
  }

  export type SaleCreateOrConnectWithoutClientInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutClientInput, SaleUncheckedCreateWithoutClientInput>
  }

  export type SaleCreateManyClientInputEnvelope = {
    data: SaleCreateManyClientInput | SaleCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type OfferUpsertWithWhereUniqueWithoutClientInput = {
    where: OfferWhereUniqueInput
    update: XOR<OfferUpdateWithoutClientInput, OfferUncheckedUpdateWithoutClientInput>
    create: XOR<OfferCreateWithoutClientInput, OfferUncheckedCreateWithoutClientInput>
  }

  export type OfferUpdateWithWhereUniqueWithoutClientInput = {
    where: OfferWhereUniqueInput
    data: XOR<OfferUpdateWithoutClientInput, OfferUncheckedUpdateWithoutClientInput>
  }

  export type OfferUpdateManyWithWhereWithoutClientInput = {
    where: OfferScalarWhereInput
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyWithoutClientInput>
  }

  export type OfferScalarWhereInput = {
    AND?: OfferScalarWhereInput | OfferScalarWhereInput[]
    OR?: OfferScalarWhereInput[]
    NOT?: OfferScalarWhereInput | OfferScalarWhereInput[]
    id?: StringFilter<"Offer"> | string
    name?: StringFilter<"Offer"> | string
    description?: StringNullableFilter<"Offer"> | string | null
    useTax?: BoolFilter<"Offer"> | boolean
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    clientId?: StringFilter<"Offer"> | string
  }

  export type SaleUpsertWithWhereUniqueWithoutClientInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutClientInput, SaleUncheckedUpdateWithoutClientInput>
    create: XOR<SaleCreateWithoutClientInput, SaleUncheckedCreateWithoutClientInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutClientInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutClientInput, SaleUncheckedUpdateWithoutClientInput>
  }

  export type SaleUpdateManyWithWhereWithoutClientInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientCreateWithoutSalesInput = {
    id?: string
    name: string
    description?: string | null
    token: string
    publicKey?: string | null
    useTax: boolean
    createdAt?: Date | string
    offers?: OfferCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutSalesInput = {
    id?: string
    name: string
    description?: string | null
    token: string
    publicKey?: string | null
    useTax: boolean
    createdAt?: Date | string
    offers?: OfferUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutSalesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutSalesInput, ClientUncheckedCreateWithoutSalesInput>
  }

  export type OfferCreateWithoutSalesInput = {
    id?: string
    name: string
    description?: string | null
    useTax: boolean
    createdAt?: Date | string
    client: ClientCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateWithoutSalesInput = {
    id?: string
    name: string
    description?: string | null
    useTax: boolean
    createdAt?: Date | string
    clientId: string
  }

  export type OfferCreateOrConnectWithoutSalesInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutSalesInput, OfferUncheckedCreateWithoutSalesInput>
  }

  export type ClientUpsertWithoutSalesInput = {
    update: XOR<ClientUpdateWithoutSalesInput, ClientUncheckedUpdateWithoutSalesInput>
    create: XOR<ClientCreateWithoutSalesInput, ClientUncheckedCreateWithoutSalesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutSalesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutSalesInput, ClientUncheckedUpdateWithoutSalesInput>
  }

  export type ClientUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    useTax?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    publicKey?: NullableStringFieldUpdateOperationsInput | string | null
    useTax?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offers?: OfferUncheckedUpdateManyWithoutClientNestedInput
  }

  export type OfferUpsertWithoutSalesInput = {
    update: XOR<OfferUpdateWithoutSalesInput, OfferUncheckedUpdateWithoutSalesInput>
    create: XOR<OfferCreateWithoutSalesInput, OfferUncheckedCreateWithoutSalesInput>
    where?: OfferWhereInput
  }

  export type OfferUpdateToOneWithWhereWithoutSalesInput = {
    where?: OfferWhereInput
    data: XOR<OfferUpdateWithoutSalesInput, OfferUncheckedUpdateWithoutSalesInput>
  }

  export type OfferUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    useTax?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    useTax?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type SaleCreateManyOfferInput = {
    id?: string
    ghostId: string
    approved: boolean
    productName: string
    customerName: string
    visible?: boolean | null
    amount: number
    toClient: boolean
    createdAt?: Date | string
    clientId: string
  }

  export type SaleUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    ghostId?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    productName?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: FloatFieldUpdateOperationsInput | number
    toClient?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    ghostId?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    productName?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: FloatFieldUpdateOperationsInput | number
    toClient?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type SaleUncheckedUpdateManyWithoutOfferInput = {
    id?: StringFieldUpdateOperationsInput | string
    ghostId?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    productName?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: FloatFieldUpdateOperationsInput | number
    toClient?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
  }

  export type OfferCreateManyClientInput = {
    id?: string
    name: string
    description?: string | null
    useTax: boolean
    createdAt?: Date | string
  }

  export type SaleCreateManyClientInput = {
    id?: string
    ghostId: string
    approved: boolean
    productName: string
    customerName: string
    visible?: boolean | null
    amount: number
    toClient: boolean
    createdAt?: Date | string
    offerId?: string | null
  }

  export type OfferUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    useTax?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    useTax?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutOfferNestedInput
  }

  export type OfferUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    useTax?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    ghostId?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    productName?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: FloatFieldUpdateOperationsInput | number
    toClient?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offer?: OfferUpdateOneWithoutSalesNestedInput
  }

  export type SaleUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    ghostId?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    productName?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: FloatFieldUpdateOperationsInput | number
    toClient?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SaleUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    ghostId?: StringFieldUpdateOperationsInput | string
    approved?: BoolFieldUpdateOperationsInput | boolean
    productName?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    visible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    amount?: FloatFieldUpdateOperationsInput | number
    toClient?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    offerId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}