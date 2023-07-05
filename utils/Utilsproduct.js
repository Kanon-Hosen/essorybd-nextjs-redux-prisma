import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getALlProducts = async () => {
    return await prisma.Product.findMany();
}

export const getProductById = async (id) => { 
    return await prisma.Product.findUnique({
        where: {
            id
        }
    })
}

export const getProductBySearch = async (name) => {
    return await prisma.Product.findMany({
        name: {
            name
        }
    })
}

export const getProductByPrice = async (price) => { 
    return await prisma.Product.findMany({
        price: price
    })
}

export const PostProduct = async (data) => {
    return await prisma.Product.create({
        data: data
    })
}