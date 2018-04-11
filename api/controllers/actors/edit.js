'use strict';

module.exports = async function (req, res) {
  let id = req.params.id;
  let actor = await Actor.findOne({id});
  if (!actor) {
    return res.notFound(`Actor with id ${id} not found`);
  }
  res.view('edit-actor', {actor});
};
