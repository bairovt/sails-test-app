'use strict';

module.exports = async function (req, res) {
  let id = req.params.id;
  await Actors.destroy({id});
  res.redirect('/actors/list');
};
