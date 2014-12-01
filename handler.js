/**
 * Created by mosluce on 14/12/1.
 */

var express = require('express'), app = express(), mssql = require('mssql');
var dbconfig = require('./configs/db');

function error(res) {
    res.json({
        success: false,
        message: err
    });
}

app.post('/login', function(req, res, next) {
    var conn = new mssql.Connection(dbconfig, function(err) {
        if(err) {
            error(res);
            return;
        }

        var ps = new mssql.PreparedStatement(conn);
        ps.input('username', mssql.NVarChar);
        ps.input('password', mssql.NVarChar);
        ps.prepare("select * from Zuser where USERNO=@username AND PASWRD=@password " +
            "AND APSYSNO='EPURCSYS' " +
            "AND ZLEVEL!='00'", function(err) {
            if(err) {
                error(res);
                return;
            }

            ps.execute({
                username: req.body.username,
                password: req.body.password
            }, function(err, recordset) {
                if(err) {
                    error(res);
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