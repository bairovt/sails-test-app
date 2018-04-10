'use strict';

module.exports = async function (req, res) {
  let films = await Films.find({});
  res.view('films-list', {films});
};
