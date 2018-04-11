'use strict';

module.exports = async function (req,res) {
  let id = req.params.id;
  let actor = await Actor.findOne({id}).populate('films');
  let films = await Film.find({});
  res.view('actor', {actor, films});
};
