const mongoose = require("mongoose");

const uri = "mongodb+srv://UB:Zxcv1001@Tu@cluster0.fq5chxs.mongodb.net/";

const connectDb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("success");
  } catch (err) {
    console.log(err);
  }
};
export { connectDb };
