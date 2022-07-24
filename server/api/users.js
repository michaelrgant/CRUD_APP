const express = require("express");
const users = require("../db/model/users");

const router = express.Router();

// POST USERS ROUTE
router.post("/", async (req, res) => {
  const data = new users(req.body);
  const result = await data.save();
  if (!result) {
    res.send({
      status: "FAILED",
      message: "user is not register successfully",
    });
  } else {
    res.send({
      status: "SUCCESS",
      message: "user is register successfully",
    });
  }
});

// GET USERS ROUTE
router.get("/", async (req, res) => {
  try {
    const result = await users.find();
    if (!result) {
      res.send({
        statu: "FAILED",
        message: "Not is not found record",
      });
    } else {
      res.send({
        status: "SUCCESS",
        message: "Record is found",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// GET USERS BY ID
router.get("/:id", async (req, res) => {
  try {
    const data = new users(req.body);
    const users_id = req.params.id;
    const result = await users.findById(users_id);
    if (!result) {
      res.send({
        status: "FAILED",
        message: "record is not found ",
      });
    } else {
      res.send({
        status: "SUCCESS",
        message: "Record is found",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// UPDATE USERS ROUTE
router.put("/:id", async (req, res) => {
  try {
    const users_id = req.params.id;
    const result = await users.findByIdAndUpdate(users_id, req.body, {
      new: true,
    });
    if (!result) {
      res.send({
        status: "FAILED",
        message: "Record is not updated successfully",
      });
    } else {
      res.send({
        status: "SUCCESS",
        message: "Record is updated successfully",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// DELETE USERS ROUTE
router.delete("/:id", async (req, res) => {
  try {
    console.log("made it here");
    const users_id = req.params.id;
    const result = await users.findByIdAndDelete(users_id);
    if (!result) {
      res.send({
        status: "FAILED",
        message: "Record is not Deleted successfully",
      });
    } else {
      res.send({
        status: "SUCCESS",
        message: "Record is Deleted successfully",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
