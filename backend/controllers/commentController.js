import { PrismaClient } from "@prisma/client";


const comment = new PrismaClient().productComment;

export const createComment = async (req, res) => {
    const id = req.params.id;
    const data = req.body
    try { 
        const info = await comment.create({
            data : {
                productId : id,
                author  : data.author,
                comment : data.comment,
                email : data.email,
                phoneNumber : data.phoneNumber,
                rating : data.rating
            }
        });
        res.status(200).json({data : info})
    } catch (e) { 
        res.status(500).json({message : e.message})
    }finally {
        async () => {
        await comment.$disconnect()
        }
    }
}

export const getComments = async (req, res) => {
    const id = req.params.id;
    try { 
        const data = await comment.findMany({
            where : {
                productId  : id
            }
        });
        res.status(200).json({data: data})
    } catch (err) {
        res.status(500).json({message : err.message}) 
    } finally {
        async  ()   => {
            await comment.$disconnect()
        }
    }
}