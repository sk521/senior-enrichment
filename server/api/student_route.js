const apiRouter = require('express').Router();
const Student = require('../db/models/student');

apiRouter.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => res.send(students))
    .catch(next);
});

apiRouter.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(student => res.send(student))
    .catch(next);
});

apiRouter.post('/', (req, res, next) => {
  console.log('entering route',req.body)
  Student.create(req.body)
    .then(student => {
        console.log('exiting route',student)
        res.send(student)
      })
    .catch(next);
});

apiRouter.put('/:studentId', (req, res, next) => {
  const studentId = req.params.studentId;

  Student.findById(studentId)
    .then(student => student.update(req.body))
    .catch(next);
});

apiRouter.delete('/:studentId', (req, res, next) => {
  const studentId = req.params.studentId;

  Student.destroy({ where: { id: studentId } })
    .then(() => res.status(204).end())
    .catch(next);
})

module.exports = apiRouter;
