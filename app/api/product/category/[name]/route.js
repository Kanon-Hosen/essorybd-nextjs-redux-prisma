import { main } from "@/utils/dbConnect";
import { PrismaClient } from "@prisma/client";
const Prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    await main();
    const name = req?.url.split("/product/category/")[1];
      const n = decodeURI(name)
      console.log(n)
    const product = await Prisma.product.findMany({
      where: {
        category:n
      }
    })

      return Response.json(
        {
          success: true,
          message: "Product get successfully",
          data: product,
        },
        { status: 200 }
    );
    
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
        data: null,
      },
      { status: 404 }
    );
  }
}

