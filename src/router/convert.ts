import type { Router, RouteRecordRaw } from 'vue-router'

import pages from '~pages'
import metas from './metas'

const metasMapRecord = (metaList: Array<{ name?: string, path?: string, meta: Record<string, string | string[] | object> }>) => {
  const lastMetaMap = new Map()
  const list = [...metaList]
  while (list.length > 0) {
    const item = list.shift()
    lastMetaMap.set(item?.path || item?.name, item)
  }
  return lastMetaMap
}

export const addRouterList = (router: Router) => {
  const metaMap = metasMapRecord(metas)

  const queue = [...pages]
  while (queue.length > 0) {
    const page = queue.shift() as RouteRecordRaw

    let key = page.path
    let findMeta = metaMap.get(key)
    if (!findMeta) {
      key = page.name as string
      findMeta = metaMap.get(key)
    }
    if (findMeta) {
      page.meta = Object.assign(page.meta || {}, findMeta.meta)
      metaMap.delete(key)
    }

    router.addRoute(page)

    // if (page.children) {
    //   queue.push(...page.children)
    // }
  }
}
