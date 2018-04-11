'use strict';

module.exports = async function  (req, res) {
  let films = await Film.find({});
  let actors = await Actor.find({});
  res.send({films, actors});
};
