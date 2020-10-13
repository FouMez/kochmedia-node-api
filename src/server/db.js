const mongoose = require("mongoose");

const mongooseOptions = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
};

// I USUALLY PUT THIS IN THE .env FILE BUT I MADE IT PUBLIC IN ORDER FOR YOU TO TEST :)
const DB_PASSWORD = "admin";

const databaseUrl = `mongodb+srv://admin:${DB_PASSWORD}@ola.wlu2x.mongodb.net/kochMedia?retryWrites=true&w=majority`


mongoose.connect(databaseUrl, mongooseOptions).catch((err) => {
  console.log(err);
});
