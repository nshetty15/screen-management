const express = require('express');
const app = express();
const routes = require('./app/routes/index');
const { APP_PORT } = require('./app/config');

app.get('/get_meta_data/:module_name/:screen_name', routes.getData);

app.listen(APP_PORT, () => {
  console.log(`server started on port ${APP_PORT}`);
});
