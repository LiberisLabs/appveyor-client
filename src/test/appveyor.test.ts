import { test } from 'ava';
import * as express from 'express';
import { json } from 'body-parser';

import AppVeyorClient from '../lib/appveyor';

test.cb('appveyor > get', t => {
  const expectedResponse = {data: 'something'};

  const server = express();
  server.get('/data', (req, res) => {
    res.send(JSON.stringify(expectedResponse));
  });
  server.listen(3000, () => {
    const appVeyorClient = new AppVeyorClient("my token");
    appVeyorClient.hostname = 'localhost';
    appVeyorClient.port = 3000;
    appVeyorClient.protocol = 'http:';

    appVeyorClient.get('/data')
      .then(res => {
        t.is(res.ok, true);
        t.is(res.statusCode, 200);
        t.deepEqual(res.body, expectedResponse);

        t.end();
      })
      .catch(t.end);
  });
});


test.cb('appveyor > post', t => {
  const expectedRequest = {input: 'whatever'};
  const expectedResponse = {data: 'something'};

  const server = express();
  server.use(json());
  server.post('/data', (req, res) => {
    t.deepEqual(req.body, expectedRequest);
    res.send(JSON.stringify(expectedResponse));
  });
  server.listen(3001, () => {
    const appVeyorClient = new AppVeyorClient("my token");
    appVeyorClient.hostname = 'localhost';
    appVeyorClient.port = 3001;
    appVeyorClient.protocol = 'http:';

    appVeyorClient.post('/data', expectedRequest)
      .then(res => {
        t.is(res.ok, true);
        t.is(res.statusCode, 200);
        t.deepEqual(res.body, expectedResponse);

        t.end();
      })
      .catch(t.end);
  });
});
