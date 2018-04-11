'use strict';

module.exports = async function (req, res) {
  let {id, actor_id: actorId} = req.params;
  await Film.removeFromCollection(id, 'actors').members([actorId]);
  res.redirect('/films/'+id);
};
