import { defineStore } from 'pinia'

export const usePermission = defineStore('user', {
  state: () => {
    return {
    }
  },
  getters: {
    hasPermission(value): boolean {
      return Boolean(value)
    },
  },
  actions: {

  },
})
