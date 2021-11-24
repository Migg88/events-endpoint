'use strict';

const express = require('express');
const cors = require('cors');

const port = 8080;
const host = '0.0.0.0';

const app = express();

const EventHandler =  require('./event-handler');
const EventsHandler =  require('./events-handler');

app.use(cors());
app.use(express.json());

app.get('/event/:event_type/asset_contract_address/:address/token_id/:id', EventHandler.getEvent);

app.get('/events/asset_contract_address/:address/token_id/:id', EventsHandler.getEvents)

app.listen(port, host);
console.log(`Running on ${host}:${port}`);