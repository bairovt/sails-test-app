'use strict';

module.exports = async function (req,res) {
  let id = req.params.id;
  let actor = await Actor.findOne({id}).populate('films');
  res.send(actor);
};
