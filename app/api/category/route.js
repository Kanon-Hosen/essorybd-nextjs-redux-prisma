import { main } from "@/utils/dbConnect";
import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

export async function GET() {
  try {
    await main();
    const categories = await Prisma.category.findMany();

    return Response.json(
      {
        success: true,
        message: "Successfully get categories",
        data: categories,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        success: false,
        message: error.message,
        data: [],
      },
      { status: 500 }
    );
  }
}

// 64b00269e8869908e31afe79

export async function POST(req) {
  try {
    const data = await req?.json();
    console.log(data);
    await main();
    const category = await Prisma.category.create({
      data: data,
    });
    return Response.json(
      {
        success: true,
        message: "Successfully create category",
        data: category,
      },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      {
        success: false,
        message: err.message,
        data: [],
      },
      { status: 500 }
    );
  }
}
