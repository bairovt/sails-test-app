'use strict';

module.exports = async function (req, res) {
  let id = req.params.id;
  await Actor.destroy({id});
  res.redirect('/actors/list');
};
