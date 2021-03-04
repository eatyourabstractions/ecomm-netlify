const axios = require('axios')

exports.handler = async (event, context) => {
   const url = 'http://localhost:4000/netfunction-test' 

   const res = await axios.get(url)

   return {
      statusCode: res.status,
      body: res.data
   }
}