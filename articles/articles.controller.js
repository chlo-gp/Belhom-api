const service = require("../articles/articles.services")

exports.create = (req, res) => {
   service.create(req, res);
  };

exports.findAll = (req, res) => {
  service.findAll(req, res);
  };

exports.findOne = (req, res) => {
    service.findOne(req, res);
  };

exports.update = (req, res) => {
    service.update(req, res);
  };

exports.delete = (req, res) => {
    service.delete(req, res);
  };

exports.deleteAll = () => {
    service.deleteAll(req, res);
  };