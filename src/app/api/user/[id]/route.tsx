//@ts-ignore
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
import { parse } from "url";
type NextResponseType = {
  params: {
    id: string;
  };
};
export const GET = (req: NextRequest, res: NextResponseType) => {
  //console.log(NextRequest.arguments);
  let id = "";

  id = res.params.id;
  console.log("query", res);

  return NextResponse.json({ message: "Hello World" + id });
};
//必须导出函数名
//方法要大写
//export { GET };
