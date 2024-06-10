export const GET = (req: Request, res: any) => {
    console.log("huselt orj irlee");
    return Response.json({ message: "hello" });
  };
  
  export const POST = async (req: Request) => {
    const data = await req.json();
    console.log(data);
    return Response.json({ message: "post response" });
  };
  export const DELETE = () => {};