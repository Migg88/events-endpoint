const axios = require('axios');

getEvents = (req, res) => {
    const id= req.params.id;
    const address = req.params.address;

    axios.get(`https://api.opensea.io/api/v1/events?asset_contract_address=${address}&token_id=${id}&only_opensea=false`)
        .then( response => {
            return res.status(200).json({ eventArray: response.asset_events });
        })
        .catch( error => {
            return res.status(400).json({ error: error });
        })
}

exports.getEvents = getEvents