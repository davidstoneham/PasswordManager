/**
 * This is just essentially the output you get when you generate an express app using the CLI tool
 *
 * It has been modified a little to work with the system - most notably breaking down the workflow into two functions
 * so other routes can be injected.
 */


// Express Dependencies
// --------------------
import * as express from 'express';
import * as path from 'path'
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as compression from 'compression';
import * as http from 'http'

const app = express();
const httpServer = http.createServer(app);

function configure() {
  // Initialise express
  // ------------------

  // Setup default middleware
  // ------------------------
  app.use(compression());
  app.use(logger('dev'));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(helmet());
  app.use(function (error, req, res, next) {
    if (error instanceof SyntaxError) {
      res.sendStatus(400);
      return;
    } else {
      next();
    }
  });
}
/**
 * This function is called after the rest of the loader functions have been initialised
 * It is very important to ensure that all express routes have been loaded before calling this function
 * @param port
 * @param dontListen - Used for testing with supertest
 */
function listen(port) {
  // Setup the view engine
  // ---------------------
  /*  var viewPath = path.join(__dirname, "..", "..", "www", 'views');
   app.set('views', viewPath);
   app.set('view engine', 'jade');
  */
  // Setup the path to the static files
  // ----------------------------------
  app.use("/", express.static(path.join(__dirname, "..", "..", "app")));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, "..", "..", "app/index.html"));
  });

  // Fallover to a 404 if no other routes are matched
  // ------------------------------------------------
  app.use(function (req, res, next) {
    var err = {
      status: 404,
      message: "404 - Route Not Found"
    };
    next(err);
  });

  // Error Handlers
  // --------------
  //Development error handler.
  //Will print a stacktrace
  app.use(function (err, req, res, next) {
    if (!err.status)
      err.status = 500;

    if (!err.message)
      err.message = null;

    console.error(err, req.originalUrl, err.stack);

    if (err.name === 'UnauthorizedError') {
      res.status(401);
      res.json({ "message": err.name + ": " + err.message });
    } else {
      res.status(err.status);
      var errOutput = {
        message: err.message,
        stack: err.stack
      };
      res.json(errOutput);
    }
  });

  httpServer.listen(process.env.PORT || port, function () {
    console.info('Listening on port ', httpServer.address());
  });

}

const expressApp = {
  app: app,
  httpServer: httpServer,
  listen: listen,
  configure
};

export default expressApp;
