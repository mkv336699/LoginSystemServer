

const login = (req) => {
    return new Promise(function (resolve, reject) {
        try {
            const app = require('../app');
            app.db.query(`Select * from Users where email='${req.body.email}' && password='${req.body.password}'`, function (err, result) {
                if (err) throw err;
                let user = JSON.stringify(result);
                user = JSON.parse(user);
                console.log("user", user);
                resolve(user);
            })
        } catch (error) {
            reject(error);
        }
    });
}

const loginViaGoogle = (req) => {
    return new Promise(function (resolve, reject) {
        try {
            const app = require('../app');
            app.db.query(`Select * from Users where email='${req.body.email}'`, function (err, result) {
                if (err) throw err;
                let user = JSON.stringify(result);
                user = JSON.parse(user);
                console.log("user in function", user);

                if (user.length == 0) {
                    const created_date = Date.now();

                    const query = `Insert into Users (name, email, password, profile_pic, gender, created_date, updated_date, session_id, status, last_loggedin_at) 
                VALUES ('${req.body.name}', '${req.body.email}', '', '${req.body.profile_pic}', '${req.body.gender}', '${created_date}', '${created_date}', '001', 'active', '${created_date}')`
                    app.db.query(query, function (err, result) {
                        if (err) {
                            reject(err)
                        }
                        console.log("result".result);
                        resolve(result);
                    })
                } else {
                    resolve(user);
                }
            })
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    login,
    loginViaGoogle
}