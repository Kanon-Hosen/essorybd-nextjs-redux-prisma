import { main } from "@/utils/dbConnect";
import { PrismaClient } from "@prisma/client";
const Prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    await main();
    const name = req?.url.split("/product/")[1];
    const n = decodeURI(name)
    const product = await Prisma.product.findUnique({
      where:{name: n}
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

export async function PUT(req) {
  try {
    await main();
    const data = req?.json();
    const id = req?.url.split("/product/")[1];
    const product = await prisma.product.update(data, id);

    return Response.json({
      success: true,
      message: "Product update successfully",
      data: product,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
      data: null,
    });
  }
}
export async function DELETE(req) {
  try {
    await main();
    // const data = req?.json();
    const id = req?.url.split("/product/")[1];
    console.log("🚀 ~ file: route.js:54 ~ DELETE ~ id:", id);
    const product = await prisma.product.delete({
      where: {
        id: id,
      },
    });

    return Response.json({
      success: true,
      message: "Product delete successfully",
      data: product,
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
      data: null,
    });
  }
}
