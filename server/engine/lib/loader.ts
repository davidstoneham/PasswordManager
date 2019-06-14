// Load dependencies
// -----------------
import * as path from 'path'
import * as walk from 'walk';
import * as express from 'express'
import { SimpleTimestamps } from 'mongoose-simpletimestamps'
import * as expressListRoutes from 'express-list-routes'
let router = express.Router();

// Load variables
// --------------
var register = {};

router.get('/err/500', function (req, res) {
  res.status(500).json({ message: "Server Error" });
});

/**
 * Loads modules from a folder
 * @param opts {folder:''}
 * @param done
 */
function loadModules(opts, done) {
  var walker = walk.walk(opts.folder, { followLinks: false });
  var modules = [];

  walker.on('file', function (root, stat, next) {
    var current = path.join(root, stat.name);
    var extname = path.extname(current);

    if (extname === '.js') {
      var split = stat.name.split(".");
      if (split.length == 2) {
        var module = require(current);
        module.__name = stat.name.split(".")[0];
        modules.push(module);
      }
    }
    next();
  });

  walker.on('end', function () {
    done(modules);
  });
}

/**
 * Load the models and setup the express routes
 * @returns {deferred.promise|*}
 */
function loadModels() {
  return new Promise((resolve, reject) => {
    loadModules({
      folder: path.join(__dirname, "..", "..", "api", "models")
    }, function (modules) {

      modules.forEach(function (model) {

        if (model.schema) {
          model.schema.plugin(SimpleTimestamps);
        } else {
          console.error("Model", model, "does not have a schema object exposed");
          process.exit();
        }

      });
      resolve(modules);
    });
  })
}

/**
 * Load the routes and the appropriate express endpoints
 * @returns {deferred.promise|*}
 */
function loadRoutes() {
  return new Promise((resolve, reject) => {
    loadModules({
      folder: path.join(__dirname, "..", "..", "api", "routes")
    }, function (modules) {
      modules.forEach(function (routeModule) {
        routeModule.routes.forEach(function (route) {

          addToRegister({
            path: "/" + routeModule.__name + "/" + route.path,
            method: route.method,
            fn: route.fn,
            middleware: route.middleware
          });

        });
      });
      resolve(modules);
    });
  })
}

/**
 * Finalise endpoints and setup express
 * This is a pretty complex method, first it registers all endpoints that do not have params,
 * then it gets the endpoint that is the most complex (most slashes) and registers them in order
 * from most complex to least complex - to make sure that you dont get a low level endpoint
 * trying to handle an id when it shouldn't be invoked
 * @returns {*}
 */
function actionRunLast(dontSkip) {
  return new Promise((resolve, reject) => {
    Object.keys(register).forEach(function (apiPath) {
      if (!apiPath.match(/\:/)) {
        Object.keys(register[apiPath]).forEach(function (method) {

          var fn = register[apiPath][method];

          console.info(apiPath, method, fn);
          router.route(apiPath)[method](fn)
        });
      }

    });

    var maxSlash = 0;
    //Loop over all of the api paths and count the number of slashes
    Object.keys(register).forEach(function (apiPath) {
      var isId = apiPath.match(/\:/)
      if (isId) {
        var slashes = apiPath.match(/\//g).length
        register[apiPath].slashCount = slashes;
        //apiPath.slashCount = slashes;
        if (register[apiPath].slashCount > maxSlash) maxSlash = register[apiPath].slashCount;
      }
    });

    //Register the item with the most slashes first to last
    function registerIds() {
      Object.keys(register).forEach(function (apiPath) {
        if (register[apiPath].slashCount === maxSlash) {
          Object.keys(register[apiPath]).forEach(function (method) {
            if (method !== "slashCount") {
              var fn = register[apiPath][method];
              router.route(apiPath)[method](fn)
            }
          });
        }
      });
      if (maxSlash > 0) {
        maxSlash--;
        registerIds();
      }
    }

    registerIds();

    expressListRoutes({ prefix: '/api' }, 'API:', router);

    resolve(router);
  })
}

/**
 * Queue an item to have an express endpoint setup
 * The reason for the queue is it allows for subsequent function to override a previously defined one
 * @param data
 */
function addToRegister(data) {
  if (!data.middleware) {
    data.middleware = [];
  }

  if (!register[data.path]) register[data.path] = {};
  var path = register[data.path];
  data.middleware.push(data.fn);
  path[data.method] = data.middleware;
}

/**
 * Perform the entire round trip
 * @returns {Promise}
 */
function loadApi() {
  return loadModels()
    .then(loadRoutes)
    .then(actionRunLast);
}

const loader = {
  loadApi: loadApi,
  __loadModels: loadModels,
  __loadRoutes: loadRoutes,
  //__getFileList: getFileList,
  __actionRunLast: actionRunLast,
  __loadModules: loadModules,
  addToRegister: addToRegister
};

export default loader;