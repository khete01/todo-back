import TodoModel from "../../models/model";

interface MutationsItemsArgs {
  title: string;
  status: string;
  id: string;
}
export const createItem = async (parent: any, args: MutationsItemsArgs) => {
  let item = new TodoModel({
    title: args.title,
    status: args.status,
  });
  const result = item.save().then((res: MutationsItemsArgs) => {
    return res;
  });
  return result;
};
