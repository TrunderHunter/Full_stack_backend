const connection = require('../config/database')

let getAllUsers = async () => {
    let [result, fields] = await connection.query('SELECT * FROM Users')

    return result;
}

module.exports = {
    getAllUsers
}