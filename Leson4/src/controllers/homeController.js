const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDService')

const getHomePage = async (req, res) => {

    let result = await getAllUsers();

    console.log(result)
    return res.render('home.ejs', { listUsers: result })
}

const getAbc = (req, res) => {
    res.send('<h1>Hello jsn!</h1>')
}

const getDemo = (req, res) => {
    res.render('sample.ejs')
}

const getCreateUserPage = (req, res) => {
    res.render('create.ejs')
}

const postCreateUser = async (req, res) => {
    let userName = req.body.userName
    let email = req.body.email
    let city = req.body.city

    let [result, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, userName, city]);


    console.log(result)
    res.send(`Create succeed >>>>>>>>>>>`)
}

module.exports = {
    getHomePage,
    getAbc,
    getDemo,
    postCreateUser,
    getCreateUserPage
}