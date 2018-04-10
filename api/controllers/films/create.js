'use strict';

module.exports = async function (req, res) {
  let {title, tagline, released} = req.body;
  await Films.create({title, tagline, released});
  res.redirect('/films/list');
};
