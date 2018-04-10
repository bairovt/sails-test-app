'use strict';

module.exports = async function (req, res) {
  let {title, tagline} = req.body;
  let released = req.body.released.trim() || null;
  await Films.create({title, tagline, released});
  res.redirect('/films/list');
};
