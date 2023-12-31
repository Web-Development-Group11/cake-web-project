import { PrismaClient } from "@prisma/client"


const products = new PrismaClient().product;


export const searchBar = async (req, res) => {
    const { keyword } = req.query;
    try { 
        const data = await products.findMany({
            where: {
                    title: {
                      contains: keyword,
                      mode: 'insensitive', // Case insensitive search
                    },
                  }
              });
            res.status(200).json({ data: data });
    } catch (err) {
        res.status(404).json({message : err.message});
    } finally { 
        async () => {
            products.$disconnect()
        }
    }
}





