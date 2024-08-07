import type { StateTree, Store } from 'pinia'

import { setCacheLoca, delCache } from 'imba-cache'

export const useHas = (keys: string | Array<string>, state: StateTree) => {
  return Array.isArray(keys) ? keys.some((s) => state[s]) : state[keys]
}

export const useSetStoreCache = <T>(_this: Store, params: Partial<key_valueof_CONVERT<T>>) => {
  _this.$patch(params)
  queueMicrotask(() => {
    for (const key in params) {
      setCacheLoca(key, params[key as keyof_CONVERT<T>])
    }
  })
}

export const useClearStore = (_this: Store) => {
  const stateKeys = Object.keys(_this.$state)
  const newState: Record<string, any> = {}

  queueMicrotask(() => {
    for (const key of stateKeys) {
      delCache(key)
      const oldState = newState[key]
      if (typeof oldState === 'string') {
        newState[key] = ''
        continue
      }

      if (typeof oldState === 'boolean') {
        newState[key] = false
        continue
      }

      if (typeof oldState === 'number') {
        newState[key] = 0
        continue
      }

      if (typeof oldState === 'object') {
        newState[key] = Array.isArray(oldState) ? [] : {}
        continue
      }
    }
    _this.$patch(newState)
  })
}
