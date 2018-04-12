'use strict';

module.exports = async function (req, res) {
  let actors = await Actor.find({});
  res.view('pages/actors-list', {actors});
};
