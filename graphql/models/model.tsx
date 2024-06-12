import mongoose from "mongoose";
const { Schema } = mongoose;

const TodoSchema = new Schema({
  id: String,
  title: String,
  status: {
    type: String,
    enum: ["DONE", "PENDING"],
  },
  team: String,
});

const TodoModel = mongoose.models.items || mongoose.model("items", TodoSchema);

export default TodoModel;
