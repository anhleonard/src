let mongoose = require('mongoose');
const User = require('../models/user')
let people = [];


const homeController = {
    homePage: async (req,res) => {
        res.render('home');
    },
    nhankhauPage: async (req,res) => {
        let body = req.body;
        let newUser = new User(body);
        newUser.save();
        res.redirect('/home/nhankhau');
    },
    renderNhanKhauPage: async (req,res) => {
        let users = await User.find();
        res.render('nhankhau/nhankhau',{users: users});
    },
    hokhauPage: async (req,res) => {
        res.json('Đây là trang hộ khẩu.');
    },
    khoanphiPage: async (req,res) => {
        res.json('Đây là trang khoản phí.');
    },
    dongphiPage: async (req,res) => {
        res.json('Đây là trang đóng phí.');
    },
    thongkePage: async (req,res) => {
        res.json('Đây là trang thống kê.');
    },
}

module.exports = homeController;