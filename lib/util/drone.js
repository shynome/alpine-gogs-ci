const { env } = require('./')
module.exports = new Proxy({
  REPO_NAME:'',
  BUILD_NUMBER:'',
  REPO:'',
  REPO_LINK:'',
  COMMIT_SHA:'',
  COMMIT_LINK:'',
  BUILD_LINK:'',
  BUILD_EVENT:'',
  BUILD_STATUS:/**@type {'failure'|'success'} */(''),
  BUILD_CREATED: '',
  BUILD_STARTED: '',
  BUILD_FINISHED: '',
  COMMIT_MESSAGE: '',
  COMMIT_BRANCH: '',
  COMMIT_AUTHOR: '',
},{
  /**@param {string} key */
  get(target,key){ return env.get(('DRONE_'+key).toUpperCase()) }
})