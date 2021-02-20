const axios = require('axios');

const checkToken = (token: any) => {
    return axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`)
    .then((r: any)=>{
        let {sub, exp} = r.data
        let isExpired = checkDate(exp);
        return {sub, isExpired};
    })
    .catch((r: any)=>{
        console.log('Error: ', r.data);
        return r.data;
    })
    
}

const checkDate = (token: any) => {
    if (Date.now() >= token * 1000) {
        return true;
      }else
        return false;
}

module.exports = checkToken;
