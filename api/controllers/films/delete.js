'use strict';

module.exports = async function (req, res) {
  let id = req.params.id;
  await Film.destroy({id});
  res.redirect('/films/list');
};
