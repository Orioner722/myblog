import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
import { parse } from "url";
function GET(req: NextApiRequest, res: NextApiResponse) {
  //console.log(NextRequest.arguments);
  const { id } = res.params;
  console.log("query", res);

  return NextResponse.json({ message: "Hello World" + id });
}
//必须导出函数名
//方法要大写
export { GET };
