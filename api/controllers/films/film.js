'use strict';

module.exports = async function (req,res) {
  let id = req.params.id;
  let film = await Film.findOne({id}).populate('actors');
  let actors = await Actor.find({});
  res.view('film', {film, actors});
};
