const axios = require('axios')

exports.handler = async (event, context) => {
   const url = 'https://fierce-anchorage-33605.herokuapp.com/netfunction-test' 

   const res = await axios.get(url)

   return {
      statusCode: res.status,
      body: res.data
   }
}


// && cp _redirects build/_redirects