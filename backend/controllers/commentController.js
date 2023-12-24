import { PrismaClient } from "@prisma/client";


const comment = new PrismaClient().product;

export const createComment = async (req, res) => {
    const id = req.params.id;
    const data = req.body
    try { 
        const info = await comment.create({
            where : { 
                id : id,
            },
            {}
        )
    }
}