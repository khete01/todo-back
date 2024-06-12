import connectDb from "../../../../libs/connectDb";
import TodoModel from "../,,/../../../../models/model";

export const GET = async (req: Request, res: Response) => {
  await connectDb();
  try {
    const todos = await TodoModel.find();
    return Response.json(todos, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET ,POST, PUT ,DELETE,OPTIONS",
        "Access-Control-Allow-HEADERS": "Content-type,Authorization",
      },
    });
  } catch (err) {
    console.log(err);

    return Response.json(
      { Message: "Server error" },
      {
        status: 500,
      }
    );
  }
};

export const POST = async (req: Request, res: Response) => {
  await connectDb();
  try {
    const body = await req.json();
    console.log(body);
    await TodoModel.create(body);
    return Response.json(body, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET ,POST, PUT ,DELETE,OPTIONS",
        "Access-Control-Allow-HEADERS": "Content-type,Authorization",
      },
    });
  } catch (err) {
    console.log(err);
    return Response.json(
      { Message: "Server error" },
      {
        status: 500,
      }
    );
  }
};

// export const DELETE = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     await TodoModel.findByIdAndDelete(id);
//     return res.status(200).json({ message: "Deleted item" });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: "Server error" });
//   }
// };
