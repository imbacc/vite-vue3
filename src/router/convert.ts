import type { Router, RouteRecordRaw } from 'vue-router'

import pages from '~pages'
import metas from './metas'

const mapRecord = (inList: Array<{ path: string }>) => {
  const lastMap = new Map()
  const list = [...inList]
  while (list.length > 0) {
    const item = list.shift()
    lastMap.set(item?.path, item)
  }
  return lastMap
}

export const addRouterList = (router: Router) => {
  const metaMap = mapRecord(metas)

  const queue = [...pages]
  while (queue.length > 0) {
    const page = queue.shift() as RouteRecordRaw

    const key = page.path
    const findMeta = metaMap.get(key)
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
