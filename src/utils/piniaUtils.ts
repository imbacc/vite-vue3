import type { StateTree, Store } from 'pinia'

import { setCacheLoca, delCache } from 'imba-cache'

export function useHasState(keys: string | Array<string>, state: StateTree) {
  return Array.isArray(keys) ? keys.some((s) => state[s]) : state[keys]
}

export function useSetStoreCache<T>(_this: Store, params: Partial<key_valueof_CONVERT<T>>) {
  _this.$patch(params)
  for (const key in params) {
    queueMicrotask(() => setCacheLoca(key, params[key as keyof_CONVERT<T>]))
  }
}

export function useClearStore(_this: Store) {
  const stateKeys = Object.keys(_this.$state)
  const newState: Record<string, any> = {}

  for (const key of stateKeys) {
    queueMicrotask(() => delCache(key))
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
}
