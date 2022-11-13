let express = require('express');
const homeController = require('../controllers/homeController');
let homeRoute = express.Router();

homeRoute.get('/', homeController.homePage);
homeRoute.get('/nhankhau', homeController.renderNhanKhauPage);
homeRoute.post('/nhankhau', homeController.nhankhauPage);
homeRoute.get('/hokhau', homeController.hokhauPage);
homeRoute.get('/khoanphi', homeController.khoanphiPage);
homeRoute.get('/dongphi', homeController.dongphiPage);
homeRoute.get('/thongke', homeController.thongkePage);

module.exports = homeRoute;