'use strict';

module.exports = async function (req, res) {
  let id = req.params.id;
  await Films.destroy({id});
  res.redirect('/films/list');
};
