const fs = require('fs')
const ghpages = require('gh-pages')

module.exports = (target, options) => {
  fs.watch(target, (err, files) => {
    ghpages.publish(target, {
      branch: options.branch || 'master',
      repo: options.remote
    }, err => {
      if (err) console.error(err)
      console.log(`Update @ ${new Date()}`)
    })
  })
}
