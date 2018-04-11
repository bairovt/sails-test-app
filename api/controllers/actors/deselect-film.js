'use strict';

module.exports = async function (req, res) {
  let {id, film_id: filmId} = req.params;
  await Actor.removeFromCollection(id, 'films').members([filmId]);
  res.redirect('/actors/'+id);
};
