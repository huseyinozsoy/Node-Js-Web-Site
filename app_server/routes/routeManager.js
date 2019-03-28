var route = require('./loginRoutes');
var route2 = require('./homeRoutes');


module.exports = function(app){
    app.use('/login',route);
    app.use('/',route2);  
}