import { PrismaClient } from "@prisma/client"


const products = new PrismaClient().product;


export const pagination =async (req,res) => {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 9;
    try { 
    const data = await products.findMany({
        skip: (page-1) * perPage,
        take : perPage,
    });
    res.status(200).json({data : data})
} catch (err) {
    res.status(500).json({message : err.message } )
} finally {
    async () => {
         await products.$disconnect()
        }
    }
}



