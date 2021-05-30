
const getAllUsers = () => {
    return new Promise(function (resolve, reject) {
        try {
            const app = require('../app');
            app.db.query('Select * from Users', function (err, result) {
                if (err) throw err;
                let temp = JSON.stringify(result)
                console.log("Result", JSON.parse(temp));
                resolve(JSON.parse(temp));
            })
        } catch (error) {
            reject(error);
        }
    });
}

const createUser = async (req) => {
    const created_date = Date.now();

    const app = require('../app');
    const query = `Insert into Users (name, email, password, profile_pic, gender, created_date, updated_date, session_id, status, last_loggedin_at) 
    VALUES ('${req.body.name}', '${req.body.email}', '${req.body.password}', '001', '${req.body.gender}', '${created_date}', '${created_date}', '001', 'active', '${created_date}')`
    app.db.query(query, function (err, result) {
        if (err) {
            Promise.reject(err)
        } 
        console.log("result".result);
        Promise.resolve()
    });
}

module.exports = {
    createUser,
    getAllUsers
}