/* eslint-disable */
/* This file is automatically generated. Do not edit directly. */
import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
import { Context } from './utils/Context'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A field whose value conforms to the standard internet email address format as
   * specified in RFC822: https://www.w3.org/Protocols/rfc822/.
   */
  EmailAddress: string
  /** Use JavaScript Date object for date/time fields. */
  DateTime: Date
  JSON: { [key: string]: any }
}

export type AlbumCover = {
  __typename?: 'AlbumCover'
  id: Scalars['String']
  mediaCount: Scalars['Int']
  slug: Scalars['String']
  title: Scalars['String']
  cover: Scalars['String']
  owner: User
  isPrivate: Scalars['Boolean']
  sharedWith?: Maybe<Array<Scalars['String']>>
}

export type AuthPayload = {
  __typename?: 'AuthPayload'
  formErrors?: Maybe<Array<FormError>>
  user?: Maybe<User>
}

export type FormError = {
  __typename?: 'FormError'
  path: Scalars['String']
  message: Scalars['String']
}

export type LoginInput = {
  email: Scalars['EmailAddress']
  password: Scalars['String']
}

export type MediaStream = {
  __typename?: 'MediaStream'
  cover: Scalars['String']
  mediaCount: Scalars['Int']
}

export type Mutation = {
  __typename?: 'Mutation'
  register: AuthPayload
  login: AuthPayload
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MyAlbums = {
  __typename?: 'MyAlbums'
  stream: MediaStream
  albums: Array<AlbumCover>
}

export type Query = {
  __typename?: 'Query'
  myAlbums: MyAlbums
  sharedAlbums: Array<AlbumCover>
  me?: Maybe<User>
}

export type QueryMyAlbumsArgs = {
  limit?: Maybe<Scalars['Int']>
}

export type QuerySharedAlbumsArgs = {
  limit?: Maybe<Scalars['Int']>
}

export type RegisterInput = {
  email: Scalars['EmailAddress']
  name: Scalars['String']
  password: Scalars['String']
}

export type User = {
  __typename?: 'User'
  id?: Maybe<Scalars['String']>
  email: Scalars['EmailAddress']
  name: Scalars['String']
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>
  Int: ResolverTypeWrapper<Scalars['Int']>
  MyAlbums: ResolverTypeWrapper<MyAlbums>
  MediaStream: ResolverTypeWrapper<MediaStream>
  String: ResolverTypeWrapper<Scalars['String']>
  AlbumCover: ResolverTypeWrapper<AlbumCover>
  User: ResolverTypeWrapper<User>
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Mutation: ResolverTypeWrapper<{}>
  RegisterInput: RegisterInput
  AuthPayload: ResolverTypeWrapper<AuthPayload>
  FormError: ResolverTypeWrapper<FormError>
  LoginInput: LoginInput
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {}
  Int: Scalars['Int']
  MyAlbums: MyAlbums
  MediaStream: MediaStream
  String: Scalars['String']
  AlbumCover: AlbumCover
  User: User
  EmailAddress: Scalars['EmailAddress']
  DateTime: Scalars['DateTime']
  Boolean: Scalars['Boolean']
  Mutation: {}
  RegisterInput: RegisterInput
  AuthPayload: AuthPayload
  FormError: FormError
  LoginInput: LoginInput
}

export type AlbumCoverResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['AlbumCover']
> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  mediaCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  cover?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>
  isPrivate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>
  sharedWith?: Resolver<
    Maybe<Array<ResolversTypes['String']>>,
    ParentType,
    ContextType
  >
}

export type AuthPayloadResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['AuthPayload']
> = {
  formErrors?: Resolver<
    Maybe<Array<ResolversTypes['FormError']>>,
    ParentType,
    ContextType
  >
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export interface EmailAddressScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress'
}

export type FormErrorResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['FormError']
> = {
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>
}

export type MediaStreamResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['MediaStream']
> = {
  cover?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  mediaCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
}

export type MutationResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['Mutation']
> = {
  register?: Resolver<
    ResolversTypes['AuthPayload'],
    ParentType,
    ContextType,
    MutationRegisterArgs
  >
  login?: Resolver<
    ResolversTypes['AuthPayload'],
    ParentType,
    ContextType,
    MutationLoginArgs
  >
}

export type MyAlbumsResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['MyAlbums']
> = {
  stream?: Resolver<ResolversTypes['MediaStream'], ParentType, ContextType>
  albums?: Resolver<
    Array<ResolversTypes['AlbumCover']>,
    ParentType,
    ContextType
  >
}

export type QueryResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['Query']
> = {
  myAlbums?: Resolver<
    ResolversTypes['MyAlbums'],
    ParentType,
    ContextType,
    QueryMyAlbumsArgs
  >
  sharedAlbums?: Resolver<
    Array<ResolversTypes['AlbumCover']>,
    ParentType,
    ContextType,
    QuerySharedAlbumsArgs
  >
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>
}

export type UserResolvers<
  ContextType = Context,
  ParentType = ResolversParentTypes['User']
> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  email?: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  createdAt?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >
  updatedAt?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >
}

export type Resolvers<ContextType = Context> = {
  AlbumCover?: AlbumCoverResolvers<ContextType>
  AuthPayload?: AuthPayloadResolvers<ContextType>
  DateTime?: GraphQLScalarType
  EmailAddress?: GraphQLScalarType
  FormError?: FormErrorResolvers<ContextType>
  MediaStream?: MediaStreamResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  MyAlbums?: MyAlbumsResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  User?: UserResolvers<ContextType>
}

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>
