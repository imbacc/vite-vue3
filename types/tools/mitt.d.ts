import type { Handler } from 'mitt'

export type emitterMap_DTYPE = { [key in string]: Handler }
export type emitterMapKey_DTYPE = keyof emitterMap_DTYPE
export type emitterHandler_DTYPE = Handler
