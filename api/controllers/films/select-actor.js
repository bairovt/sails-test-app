'use strict';

module.exports = async function (req, res) {
  let id = req.params.id;
  let {actor_id: actorId} = req.body;
  if (!actorId) {
    res.notFound();
  }
  await Film.addToCollection(id, 'actors').members([actorId]);
  res.redirect('/films/'+id);
};
