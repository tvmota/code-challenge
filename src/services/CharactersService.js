import Api from './Api'
import { setPage } from '../persistense/LocalPersistence'

export async function charactersList (page) {
  let resp = (await Api.get(`/people/?page=${page}`)).data

  resp.results.forEach((item, idx) => {
    item['seq'] = Number(item.url.match(/\d/g).join(''))
  })

  resp.results.sort((itemA, itemB) => {
    return itemA.seq - itemB.seq
  })

  let storagePage = await setPage(page, resp.results)

  return storagePage
}
