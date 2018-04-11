'use strict';

module.exports = async function (req, res) {
  let name = req.body.name;
  let born = req.body.born.trim() || null;
  await Actor.create({name, born});
  res.redirect('/actors/list');
};
