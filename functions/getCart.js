const axios = require('axios')

exports.handler = async (event, context) => {
   const url = 'https://fierce-anchorage-33605.herokuapp.com/cart' 

   const res = await axios.get(url)
  

   return {
      statusCode: 200,
      body: res
   }
}

