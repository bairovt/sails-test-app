'use strict';

module.exports = async function (req,res) {
  let id = req.params.id;
  let film = await Film.findOne({id}).populate('actors');
  res.send(film);
};
