'use strict';

module.exports = async function (req, res) {
  let id = req.params.id;
  let film = await Film.findOne({id});
  if (!film) {
    return res.notFound(`Film with id ${id} not found`);
  }
  res.view('edit-film', {film});
};
