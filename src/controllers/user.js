const User = require("../models/user");

const findAll = async (ctx) => {
  try {
    const data = await User.find();

    ctx.status = 200;
    ctx.body = { status: "success", data };
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = { status: "failure", error: err.message };
  }
};

const findById = async (ctx) => {
  try {
    const id = ctx.params.id;
    const user = await User.findOne({
      _id: id,
    })

    if (user) ctx.body = { status: "success", data: user };
    else {
      ctx.status = 404;
      ctx.body = {
        status: "failure",
        error: "No record was found using this id.",
      };
    }
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = { status: "failure", error: err.message };
  }
};

const create = async (ctx) => {
  try {

    const { body } = ctx.request;
    const newUser = new User(body);
    const savedUser = await User.create(newUser);
    ctx.status = 200;
    ctx.body = { status: "success", data: savedUser };
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = { status: "failure", error: err.message };
  }
};

const remove = async (ctx) => {
  try {
    const { id } = ctx.params;
    const user = await User.findOne({
      _id: id,
    })

    const deletedUser = await user.remove();
    ctx.status = 200;
    ctx.body = { status: "success", data: deletedUser };
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = { status: "failure", error: err.message };
  }
};


const update = async (ctx) => {
  try {
    const { body } = ctx.request;
    const {id } = ctx.params;

    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      body,
      { new: true }
    );

    if (!updatedUser) {
      ctx.status = 404;
      ctx.body = {
        status: "failure",
        error: "No record was found using this id.",
      };
    } else{
       ctx.status = 200;
       ctx.body = { status: "success", data: updatedUser };
     }
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = { status: "failure", error: err.message };
  }

}

module.exports = {
  findAll,
  findById,
  create,
  remove,
  update,
};
