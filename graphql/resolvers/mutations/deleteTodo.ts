import TodoModel from "../../models/model";

interface MutationsItemsArgs {
  title: string;
  status: string;
  id: string;
}
export const deleteItem= async (parent: any, args: MutationsItemsArgs) => {
    try {
      await TodoModel.findByIdAndDelete({ _id: args.id });
      return true;
    } catch (error) {
      console.log("Error deleting:", error);
      return false;
    }
  }