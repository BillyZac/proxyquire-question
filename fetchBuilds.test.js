import test from 'tape'
import proxyquire from 'proxyquire'

const fetchStub = () => Promise.resolve({ json: () => [1, 2, 3] })

const fetchBuilds = proxyquire('./fetchBuilds', {
  'isomorphic-fetch': fetchStub,
}).default

test('Builds fetcher', (t) => {
  fetchBuilds().then((builds) => {
    t.equal(builds.length, 3)
  })
  t.end()
})
