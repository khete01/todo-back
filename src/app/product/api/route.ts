import connectDb from "../../../../connectDb";
import TodoModel from "../../../../models/model";

// export const GET = async (req: Request, res: Response) => {
//   await connectDb();
//   try {
//     const body = await req.json();
//     console.log(body);
//     await TodoModel.create(body);
//     return Response.json(body, {
//       status: 200,
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET ,POST, PUT ,DELETE,OPTIONS",
//         "Access-Control-Allow-HEADERS": "Content-type,Authorization",
//       },
//     });
//   } catch (err) {
//     console.log(err);
//     return Response.json(
//       { Message: "Server error" },
//       {
//         status: 500,
//       }
//     );
//   }
// };

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

export const DELETE = async (req: Response) => {
  const data = await req.json();
  console.log(data);
  return Response.json({ message: "deleted item" });
};
