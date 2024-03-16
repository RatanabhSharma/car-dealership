const User = require("../server/module/model");
const asyncWrapper = require("../middleware/async-wrapper");
const CreateCustomError = require("../errors/errors-CustomApi");

const getAllSubscriber = asyncWrapper(async (req, res) => {
  const user = await User.find({});
  res.status(200).json(user);
});

const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    //check if name was entered
    if (!email) {
      return res.status(400).json({
        error: "email is required",
      });
    }
    // check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(409).json({
        error: "Email is taken",
      });
    }
    const user = await User.create({
      email,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllSubscriber,
  subscribe,
};
