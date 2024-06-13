import TodoModel from "../../models/model";

export const getTodos = async () => {
  try {
    const todos = await TodoModel.find({});
    return todos;
  } catch (error) {
    console.error("Error fetching:", error);
    throw new Error("Failed to fetch");
  }
};
