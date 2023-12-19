import { PrismaClient } from "@prisma/client";

const blog = new PrismaClient().blog;


const getBlog = async (res, req) => {
    try {
        const info = await blog.findMany();
        res.status(200).json({data: info})
    }catch (error) {
        res.status(500).json({message: error.message})
    }finally {( async  () => {
        await blog.$disconnect();
        })
    };
}