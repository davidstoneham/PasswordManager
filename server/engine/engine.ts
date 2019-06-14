// Load Dependencies
// -----------------
import express from './lib/express';
import * as mongoose from 'mongoose';
import loader from './lib/loader';
import * as mkdirp from 'mkdirp';
import * as path from 'path'
const storageDir = path.join(process.cwd(), process.env.STORAGE_DIR || "./storage");

/**
 * Initialise the engine.
 * ----------------------
 * Call this after setting the appropriate functions
 */
function init() {
  return new Promise((resolve, reject) => {
    const options = {
      reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
      reconnectInterval: 500, // Reconnect every 500ms
      connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity,
      useNewUrlParser: true
    };
    mongoose.connect(engine.config.dbUri, options);

    //Initialise the storage directory
    mkdirp(storageDir);

    loader.loadApi()
      .then(function (router: any) {
        express.configure();
        express.app.use(engine.config.apiPrefix, router);
        express.listen(engine.config.port);
        resolve();
      })
  })
}

/**
 * The engine object.
 * ------------------
 * @type {{config: {port: (*|number), dbUri: *, apiPrefix: string}, version: string, express: (expressApp|exports|*), mongoose: (*|exports), init: init}}
 */
let engine = {
  config: {
    port: process.env.port || 8887,
    dbUri: process.env.DB_URI,
    apiPrefix: "/api",
  },
  version: "0.0.1",
  express: express,
  mongoose: mongoose,
  init: init
};

export default engine;
