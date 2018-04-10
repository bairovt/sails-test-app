'use strict';

module.exports = async function (req, res) {
  let id = req.params.id;
  let {title, tagline, released} = req.body;
  await Films.update({id}, {title, tagline, released});
  res.redirect('/films/list');
};
