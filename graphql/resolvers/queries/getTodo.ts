import TodoModel from "../../models/model";

interface QueryItemsArgs {
  title: string;
  status: string;
  id: string;
}
export const getTodo = async (parent: any, args: QueryItemsArgs) => {
  const result = TodoModel.findById(args.id).then((res) => {
    if (res) {
      return res;
    }
  });
  return result;
};
