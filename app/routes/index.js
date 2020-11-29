/*
  index.js exports all the routes located in the routes folder
*/
'use strict';

const fs = require('fs');
const files = fs.readdirSync('./app/routes');
let file, route;

const routes = {};

const camelCase = function (hyphenCase) {
  return hyphenCase.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
};

for (let i = 0; i < files.length; i++) {
  file = files[i];
  if (file === 'index.js') continue;

  route = file.replace(/\..*$/, ''); // remove extension
  route = camelCase(route);

  routes[route] = require('./' + file);
}

module.exports = routes;
