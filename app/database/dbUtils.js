var makeConnectionUrl = function () {
  var CONNECTION_URL = 'mongodb://'

  if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    // if OPENSHIFT env variables are present, use the available connection info:
    CONNECTION_URL = CONNECTION_URL +
    process.env.OPENSHIFT_MONGODB_DB_USERNAME + ':' +
    process.env.OPENSHIFT_MONGODB_DB_PASSWORD + '@' +
    process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
    process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
    process.env.OPENSHIFT_APP_NAME
  } else {
    // default to a 'localhost' configuration:
    CONNECTION_URL = CONNECTION_URL + '127.0.0.1:27017/test'
  }
  return CONNECTION_URL
}

module.exports.CONNECTION_URL = makeConnectionUrl()
module.exports.TESTE = 'teste'