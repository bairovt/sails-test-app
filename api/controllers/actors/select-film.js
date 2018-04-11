'use strict';

module.exports = async function (req, res) {
  let id = req.params.id;
  let {film_id: filmId} = req.body;
  if (!filmId) {
    res.notFound();
  }
  await Actor.addToCollection(id, 'films').members([filmId]);
  res.redirect('/actors/'+id);
};
