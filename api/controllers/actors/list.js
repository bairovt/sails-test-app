'use strict';

module.exports = async function (req, res) {
  let actors = await Actors.find({});
  res.view('actors-list', {actors});
};
