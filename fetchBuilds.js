import fetch from 'isomorphic-fetch'

const fetchBuilds = () => new Promise((resolve, reject) => {
  fetch('https://api.travis-ci.org/repos/sinatra/sinatra/builds', { method: 'GET' }).then((response) => {
    if (response.status >= 400) {
      reject(new Error('Bad response from server'))
    }
    resolve(response.json())
  })
})

export default fetchBuilds
