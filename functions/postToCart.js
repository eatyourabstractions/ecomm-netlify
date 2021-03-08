const axios = require('axios')

exports.handler = async (event, context) => {
   const url = 'https://fierce-anchorage-33605.herokuapp.com/cart' 
   const data = JSON.parse(event.body);

   const res = await axios.post(url, data)
  

   return {
      statusCode: res.status,
      body: res.data
   }
}

