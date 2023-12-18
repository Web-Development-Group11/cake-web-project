import { PrismaClient } from "@prisma/client";

const product = new PrismaClient().product;

export const getProduct =  async (req, res) => {
    try {
        const info = await product.findMany();
        res.status(200).json({data: info})
    }catch (error) {
        res.status(500).json({message: error.message})
    }finally {( async  () => {
        await product.$disconnect();
        })
    };
}