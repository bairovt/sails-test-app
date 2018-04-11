'use strict';

module.exports = async function (req, res) {
  let id = req.params.id;
  let {title, tagline} = req.body;
  let released = req.body.released.trim() || null;
  await Film.update({id}, {title, tagline, released});
  res.redirect('/films/list');
};
