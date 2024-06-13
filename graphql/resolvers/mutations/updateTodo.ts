import { ApolloServer } from "@apollo/server";
import TodoModel from "../../models/model";

interface MutationsItemsArgs {
  title: string;
  status: string;
  id: string;
}

export const updateItem = async (parent: any, args: MutationsItemsArgs) => {
  const result = TodoModel.findByIdAndUpdate(
    args.id,
    {
      title: args.title,
      status: args.status,
    },
    { new: true }
  ).then((res) => {
    if (res) {
      return res;
    }
  });
  return result;
};
