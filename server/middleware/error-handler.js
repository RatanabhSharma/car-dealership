const { CustomApiError } = require("../errors/errors-CustomApi");
const errHandler = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "Somthing went wrong Please try again later" });
};
module.exports = errHandler;
