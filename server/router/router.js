const express = require("express");
const router = express.Router();
const { getAllSubscriber, subscribe } = require("../controller/controller2");
const {
  getAllTask,
  registerUser,
  getTask,
  updateTask,
  deleteRecord,
} = require("../controller/controller");

//middleware
// router.use(
//   cors({
//     credentials: "true",
//     origin: "http://localhost:3000",
//   })
// );
router.get("/", (req, res) => {
  res.json("hellow");
});
router.route("/reg").post(subscribe);
router.route("/getsub").get(getAllSubscriber);
router.route("/getdata").get(getAllTask);
router.route("/register").post(registerUser);
router.route("/getdata/:id").get(getTask);
router.route("/update/:id").patch(updateTask);
router.route("/delete/:id").delete(deleteRecord);

module.exports = router;
