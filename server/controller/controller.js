const UserModel = require("../server/module/schema");
const asyncWrapper = require("../middleware/async-wrapper");
const CreateCustomError = require("../errors/errors-CustomApi");

const getAllTask = asyncWrapper(async (req, res) => {
  const user = await UserModel.find({});
  res.status(200).json(user);
});

const registerUser = async (req, res) => {
  try {
    const { name, email, description } = req.body;
    //check if name was entered
    if (!name) {
      return res.status(400).json({
        error: "name is required",
      });
    }
    //check if password is good
    if (!description) {
      return res.status(400).json({
        error: "403 is the status for forbiden, i.e forbiden password  ",
      });
    }
    // check email
    const exist = await UserModel.findOne({ email });
    if (exist) {
      return res.status(409).json({
        error: "Email is taken",
      });
    }
    const user = await UserModel.create({
      name,
      email,
      description,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await UserModel.findOne({ _id: taskID });
  if (!task) {
    return next(CreateCustomError(`No task with the Id : ${taskID}`));
  }
  res.status(200).json(task);
});

const deleteRecord = asyncWrapper(async (req, res) => {
  const { id: recordID } = req.params;
  const record = await UserModel.findOneAndDelete({ _id: recordID });
  if (!record) {
    return next(CreateCustomError(`No task with the Id : ${recordID}`));
  }
  res.status(200).json(record);
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await UserModel.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(CreateCustomError(`No task with the Id : ${taskID}`));
  }

  res.status(200).json({ task });
});

module.exports = {
  getAllTask,
  registerUser,
  getTask,
  deleteRecord,
  updateTask,
};
