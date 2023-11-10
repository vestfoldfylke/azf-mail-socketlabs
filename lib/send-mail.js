const { SocketLabsClient } = require('@socketlabs/email')
let { SOCKETLABS_API_KEY, SOCKETLABS_SERVER_ID } = require('../config')

let client = null

module.exports = async (context, msg) => {
  SOCKETLABS_SERVER_ID = parseInt(SOCKETLABS_SERVER_ID)

  if (!client) client = new SocketLabsClient(SOCKETLABS_SERVER_ID, SOCKETLABS_API_KEY)
  
  const mailRes = await client.send(msg)
  return mailRes
}
