var bodyParser = require('body-parser');
var methodOverride = require('method-override');

module.exports = function(app, express){
    
  // Routers
  var router = express.Router()

  // Configuration
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', {
    layout: false
  });
  app.use(bodyParser.json());
  app.use(methodOverride('X-HTTP-Method-Override'));
  app.use(express.static(__dirname + '/public'));
  app.use(router);
}