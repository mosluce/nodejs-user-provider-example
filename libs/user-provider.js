/**
 * Created by mosluce on 14/11/28.
 */
var mssql = require("mssql");

/**
 * authenticate
 * required env
 * - ACC_MSSQL_SERVER
 * - ACC_MSSQL_USER
 * - ACC_MSSQL_PASSWORD
 * - ACC_MSSQL_DB
 * @param username
 * @param password
 * @param next
 */
module.exports.authenticate = function (username, password, next) {
    var config = {
        server: process.env.ACC_MSSQL_SERVER,
        user: process.env.ACC_MSSQL_USER,
        password: process.env.ACC_MSSQL_PASSWORD,
        database: process.env.ACC_MSSQL_DB,
        options: {
            encrypt: true
        }
    };

    var conn = new mssql.Connection(config, function (err) {
        if (err) {
            next(err, null);
            return;
        }

        var r = new mssql.Request(conn);
        r.query("SELECT * FROM Zuser WHERE " +
        "USERNO='" + username + "' " +
        "AND PASWRD='" + password + "' " +
        "AND APSYSNO='EPURCSYS' " +
        "AND ZLEVEL!='00'", function (err, recordset) {
            if (err) {
                next(err, null);
                return;
            }

            if (recordset.length == 0) {
                next("Not Found", null);
                return;
            }

            delete recordset[0].PASWRD;

            next(null, recordset[0]);

        });
    });
}