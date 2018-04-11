'use strict';

module.exports = async function (req, res) {
  let films = await Film.find({});
  res.view('films-list', {films});
};
