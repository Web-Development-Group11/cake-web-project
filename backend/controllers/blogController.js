import { PrismaClient } from "@prisma/client";

const blog = new PrismaClient().blog;


export const getBlog = async (req, res) => {
    try {
        const info = await blog.findMany();
        return res.status(200).json({data: info})
    }catch (error) {
        res.status(404).json({message: error.message})
    }finally {( async  () => {
        await blog.$disconnect();
        })
    };
}

export const getSuggestBlog = async (res, req) => {
    try {
        const info = await blog.findMany({
            orderBy : {
                views : 'desc'
            }
        });
        return res.status(200).json({data: info});
    } catch (error) {
        res.status(404).json({message: error.message});
    } finally { (async () => {
        await   blog.$disconnect();
        });
    }
}

export const getBlogBySlug = async (req, res) => {
    try {
        const info = await blog.findFirst({
            where : {
                slug : req.params.slug
            }
        });
        return res.status(200).json({data: info})
    } catch (error) {
        res.status(404).json({message: error.message})
    } finally { (async () => {
        await blog.$disconnect();
        });
    }
}