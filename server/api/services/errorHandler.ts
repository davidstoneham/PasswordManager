'use strict';

let errorHandler = (res) => {
  return (err) => {
    console.error(err)
    if (isNaN(err.code) && err.code) err.code = 400;
    res.status(err.status || 500)
    res.json({ message: err.message || "An error occurred, please check your data and try again" });
  }
};

export default errorHandler
