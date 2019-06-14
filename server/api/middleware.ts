
import * as jwt from 'express-jwt';


/* istanbul ignore next  */
if (!process.env.JWT_SECRET) console.warn("please set environment variable JWT_SECRET to something random.");

const jwtMiddleware = jwt({
  secret: process.env.JWT_SECRET || "SETSECRET",
  userProperty: 'payload'
});

const disabled = (req, res, next) => {
  res.status(404).json({ message: "Route not found" });
};

const isAuthenticated = (req, res, next) => {
  jwtMiddleware(req, res, () => {
    if (req.payload) {
      next()
    } else {
      res.status(401).json({ message: "Not authorised" });
    }
  })
};

const hasPermission = (name) => {
  return (req, res, next) => {
    jwtMiddleware(req, res, () => {
      if (req.payload && req.payload.permissions && req.payload.permissions.indexOf(name) > -1) {
        next()
      } else {
        res.status(401).json({ message: "You do not have permission to perform this action." });
      }
    })
  }
};

const middleware = {
  jwt: jwtMiddleware,
  disabled,
  isAuthenticated,
  hasPermission,
};

export default middleware
