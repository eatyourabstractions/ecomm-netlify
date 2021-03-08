const axios = require('axios')

exports.handler = async (event, context) => {
   const url = 'https://fierce-anchorage-33605.herokuapp.com/cart' 

   const config = {
    headers: {'Access-Control-Allow-Origin': '*'}
    };

   const res = await axios.get(url, config)
  

   return {
      statusCode: res.status,
      body: res.data
   }
}

