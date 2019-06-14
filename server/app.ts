// Load Dependencies
// -----------------

import engine from './engine/engine';

// Configure the engine
// --------------------
engine.config = {
  port: process.env.PORT || 1676,
  dbUri: process.env.DB_URI || "mongodb://localhost/PasswordManager",
  apiPrefix: "/api"
};
/**
 * Setup the static views
 * ----------------------
 * Remove the default one below to just use static HTML
 * in the www/public directory
 */

/**
 * Initialise
 * ----------
 * Initialise the app and mount the models and routes
 */
engine.init();