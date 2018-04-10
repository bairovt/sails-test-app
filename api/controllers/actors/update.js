'use strict';

module.exports = async function (req, res) {
  let id = req.params.id;
  let name = req.body.name;
  let born = req.body.born.trim() || null;
  await Actors.update({id}, {name, born});
  res.redirect('/actors/list');
};
