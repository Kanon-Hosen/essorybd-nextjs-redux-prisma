import { getALlProducts, getProductById } from "@/utils/Utilsproduct";
import { main } from "@/utils/dbConnect";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  try {
    await main();
    const products = await prisma.product.findMany();
    const all = await [...products].reverse();
    return Response.json({
      success: true,
      message: ` ${products?.length} Product found`,
      data: all,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
      data: null,
    });
  }
}
export async function POST(req) {
  try {
    await main();
    const data = await req?.json();
    console.log("🚀 ~ file: route.js:27 ~ POST ~ data:", data);
    const products = await prisma.product.create({
      data: data,
    });
    return Response.json({
      success: true,
      message: "Product post successfully",
      data: products,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
        data: null,
      },
      { status: 400 }
    );
  }
}
