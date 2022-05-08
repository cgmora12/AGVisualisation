'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.getCIF = function getCIF (req, res, next) {
  Default.getCIF(req.swagger.params, res, next);
};

module.exports.getCodigo = function getCodigo (req, res, next) {
  Default.getCodigo(req.swagger.params, res, next);
};

module.exports.getComarca = function getComarca (req, res, next) {
  Default.getComarca(req.swagger.params, res, next);
};

module.exports.getDireccion = function getDireccion (req, res, next) {
  Default.getDireccion(req.swagger.params, res, next);
};

module.exports.getEmail = function getEmail (req, res, next) {
  Default.getEmail(req.swagger.params, res, next);
};

module.exports.getFax = function getFax (req, res, next) {
  Default.getFax(req.swagger.params, res, next);
};

module.exports.getLatitud = function getLatitud (req, res, next) {
  Default.getLatitud(req.swagger.params, res, next);
};

module.exports.getLocalidad = function getLocalidad (req, res, next) {
  Default.getLocalidad(req.swagger.params, res, next);
};

module.exports.getLongitud = function getLongitud (req, res, next) {
  Default.getLongitud(req.swagger.params, res, next);
};

module.exports.getNombre = function getNombre (req, res, next) {
  Default.getNombre(req.swagger.params, res, next);
};

module.exports.getRegimen = function getRegimen (req, res, next) {
  Default.getRegimen(req.swagger.params, res, next);
};

module.exports.getServicios_complementarios = function getServicios_complementarios (req, res, next) {
  Default.getServicios_complementarios(req.swagger.params, res, next);
};

module.exports.getTelefono = function getTelefono (req, res, next) {
  Default.getTelefono(req.swagger.params, res, next);
};

module.exports.getTitularidad = function getTitularidad (req, res, next) {
  Default.getTitularidad(req.swagger.params, res, next);
};

module.exports.getWeb = function getWeb (req, res, next) {
  Default.getWeb(req.swagger.params, res, next);
};

module.exports.getdataset = function getdataset (req, res, next) {
  Default.getdataset(req.swagger.params, res, next);
};

module.exports.getvisualisation = function getvisualisation (req, res, next) {
  Default.getvisualisation(req.swagger.params, res, next);
};
