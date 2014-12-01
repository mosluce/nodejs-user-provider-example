/**
 * Created by mosluce on 14/12/1.
 */
module.exports = (function() {
    if(process.env.NODE_ENV == 'production') {
        return {
            user: process.env.ACC_MSSQL_USER,
            password: process.env.ACC_MSSQL_PASSWORD,
            server: process.env.ACC_MSSQL_SERVER,
            database: process.env.ACC_MSSQL_DATABASE,
            options: {
                encrypt: true
            }
        };
    } else {
        return require('./db_development.json');
    }
})();