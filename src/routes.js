const express = require('express');
const routes = express.Router();
const UserController = require("./controllers/UserController");

routes.get('/', (req, res) => {
  res.send("Deus é Fiel!");
});
routes.get('/index', UserController.index );
routes.get('/index/:id', UserController.show );
routes.post('/index', UserController.create );
routes.put('/index/:id', UserController.update );
routes.delete('/index/:id', UserController.delete );

module.exports = routes;