/* eslint-disable */
import Long from 'long'
import {
  makeGenericClientConstructor,
  ChannelCredentials,
  ChannelOptions,
  UntypedServiceImplementation,
  handleUnaryCall,
  Client,
  ClientUnaryCall,
  Metadata,
  CallOptions,
  ServiceError,
} from '@grpc/grpc-js'
import _m0 from 'protobufjs/minimal'

export const protobufPackage = 'helloworld'

/** The request message containing the user's name. */
export interface HelloRequest {
  name: string
}

/** The response message containing the greetings */
export interface HelloReply {
  message: string
}

const baseHelloRequest: object = { name: '' }

export const HelloRequest = {
  encode(
    message: HelloRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HelloRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseHelloRequest } as HelloRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): HelloRequest {
    const message = { ...baseHelloRequest } as HelloRequest
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    }
    return message
  },

  toJSON(message: HelloRequest): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    return obj
  },

  fromPartial(object: DeepPartial<HelloRequest>): HelloRequest {
    const message = { ...baseHelloRequest } as HelloRequest
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    }
    return message
  },
}

const baseHelloReply: object = { message: '' }

export const HelloReply = {
  encode(
    message: HelloReply,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.message !== '') {
      writer.uint32(10).string(message.message)
    }
    return writer
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HelloReply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseHelloReply } as HelloReply
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): HelloReply {
    const message = { ...baseHelloReply } as HelloReply
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message)
    }
    return message
  },

  toJSON(message: HelloReply): unknown {
    const obj: any = {}
    message.message !== undefined && (obj.message = message.message)
    return obj
  },

  fromPartial(object: DeepPartial<HelloReply>): HelloReply {
    const message = { ...baseHelloReply } as HelloReply
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message
    }
    return message
  },
}

/** The greeting service definition. */
export const GreeterService = {
  /** Sends a greeting */
  sayHello: {
    path: '/helloworld.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: HelloRequest) =>
      Buffer.from(HelloRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => HelloRequest.decode(value),
    responseSerialize: (value: HelloReply) =>
      Buffer.from(HelloReply.encode(value).finish()),
    responseDeserialize: (value: Buffer) => HelloReply.decode(value),
  },
} as const

export interface GreeterServer extends UntypedServiceImplementation {
  /** Sends a greeting */
  sayHello: handleUnaryCall<HelloRequest, HelloReply>
}

export interface GreeterClient extends Client {
  /** Sends a greeting */
  sayHello(
    request: HelloRequest,
    callback: (error: ServiceError | null, response: HelloReply) => void
  ): ClientUnaryCall
  sayHello(
    request: HelloRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: HelloReply) => void
  ): ClientUnaryCall
  sayHello(
    request: HelloRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: HelloReply) => void
  ): ClientUnaryCall
}

export const GreeterClient = makeGenericClientConstructor(
  GreeterService,
  'helloworld.Greeter'
) as unknown as {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: Partial<ChannelOptions>
  ): GreeterClient
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string }
  ? { [K in keyof Omit<T, '$case'>]?: DeepPartial<T[K]> } & {
      $case: T['$case']
    }
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}
