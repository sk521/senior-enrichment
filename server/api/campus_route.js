const apiRouter = require('express').Router();
const Campus = require('../db/models/campus');

apiRouter.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.send(campuses))
    .catch(next);
});

apiRouter.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => res.send(campus))
    .catch(next);
});

apiRouter.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.send(campus))
    .catch(next);
});

apiRouter.put('/:campusId', (req, res, next) => {
  const campusId = req.params.campusId;
  Campus.findById(campusId)
    .then(campus => campus.update(req.body))
    .then(updatedCampus => res.json(updatedCampus))
    .catch(next);
});

apiRouter.delete('/:campusId', (req, res, next) => {
  const campusId = req.params.campusId;

  Campus.destroy({ where: { id: campusId } })
    .then(() => res.status(204).end())
    .catch(next);
})

module.exports = apiRouter;
