import { PrismaClient } from "@prisma/client";

const blog = new PrismaClient().blog;


export const getBlog = async (req, res) => {
    try {
        const info = await blog.findMany();
        return res.json({data: info})
    }catch (error) {
        res.json({message: error.message})
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
        return res.json({data: info});
    } catch (error) {
        res.json({message: error.message});
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
        return res.json({data: info})
    } catch (error) {
        res.json({message: error.message})
    } finally { (async () => {
        await blog.$disconnect();
        });
    }
}