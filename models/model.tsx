import { Schema } from "mongoose";
import mongoose from "mongoose";
const TodoSchema = new Schema({
  id: { type: String, required: true },
  title: String,
  status: {
    type: String,
    enum: ["DONE", "PENDING"],
  },
  team: String,
});

const TodoModel = mongoose.model("items", TodoSchema);
export { TodoModel };
