const axios = require('axios');

getEvent = (req, res) => {
    const event = req.params.event_type;
    const id= req.params.id;
    const address = req.params.address;

    axios.get(`https://api.opensea.io/api/v1/events?event_type=${event}&asset_contract_address=${address}&token_id=${id}&only_opensea=false`)
        .then( response => {
            return res.status(200).json({ response: response });
        })
        .catch( error => {
            return res.status(400).json({ error: error });
        })
}

exports.getEvent = getEvent