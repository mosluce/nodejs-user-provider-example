/**
 * Created by mosluce on 14/12/1.
 */

var express = require('express'), app = express(), mssql = require('mssql');

function error(res, err) {
    res.json({
        success: false,
        error: err
    });
}

app.post('/login', function(req, res, next) {
    var dbconfig = require('./configs/db');

    var conn = new mssql.Connection(dbconfig, function(err) {
        if(err) {
            error(res, err);
            return;
        }

        var ps = new mssql.PreparedStatement(conn);
        ps.input('username', mssql.NVarChar);
        ps.input('password', mssql.NVarChar);
        ps.prepare("select * from Zuser where USERNO=@username AND PASWRD=@password " +
            "AND APSYSNO='EPURCSYS' " +
            "AND ZLEVEL!='00'", function(err) {
            if(err) {
                error(res, err);
                return;
            }

            ps.execute({
                username: req.body.username,
                password: req.body.password
            }, function(err, recordset) {
                if(err) {
                    error(res, err);
                    return;
                }

                delete recordset[0]['PASWRD'];

                res.json({
                    success: true,
                    data: recordset[0]
                });

                ps.unprepare();
            });
        });
    });
});

module.exports = app;