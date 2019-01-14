import storage from 'localforage'

export async function setPage (pageNumber, page) {
  let pages = await storage.getItem('pages')

  if (pages) {
    if (pages.length < pageNumber) {
      pages.push(page)
      storage.setItem('pages', pages)
    }
  } else {
    storage.setItem('pages', [page])
  }

  return page
}

export async function getPage (pageNumber) {
  let pages = await storage.getItem('pages')

  return pages.length >= pageNumber ? pages[pageNumber - 1] : false
}

export async function clearStorage () {
  let clean = await storage.clear()

  return clean
}
