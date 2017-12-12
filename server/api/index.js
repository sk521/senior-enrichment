'use strict'
const apiRouter = require('express').Router()
const db = require('../db')


apiRouter.get('/hello', (req, res) => res.send({hello: 'world'}))

apiRouter.use('/campus_route', require('./campus_route'));
apiRouter.use('/student_route', require('./student_route'));


apiRouter.use((req, res, next) => {
  res.status(404).send('Not Found!');
})



module.exports = apiRouter;
