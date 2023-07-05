const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

export const main = async () => {
    try {
        await prisma.$connect();
        console.log("connected")
    } catch (error) {
        console.log(error.message)
    } finally {
        await prisma.$disconnect();
        console.log("disconnected")
    }
}