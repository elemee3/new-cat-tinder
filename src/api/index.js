const BASE = 'http://localhost:3000'

let getCats = function () {
  return fetch(BASE + '/cats')
  .then((resp) => {
    let json = resp.json()
    console.log(json)
    return json
  })
}

export {
  getCats
}
