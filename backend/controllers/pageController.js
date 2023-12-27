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

export const searchBar = async (req, res) => {
    const { keyword } = req.query;
    try { 
        const data = await products.findMany({
            where: {
                OR: [
                  {
                    title: {
                      contains: keyword,
                      mode: 'insensitive', // Case insensitive search
                    },
                  },
                ],
              },
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

// try {
//     const page = req.query.page || 1;
//     const size = req.query.size || 9;
//     const totalCount = await product.count();

//     const skip = (page - 1) * size;
//     const totalPages = Math.ceil(totalCount / size);

//     const products = await product.findMany({
//         take: size,
//         skip,
//     })

//     const data = products.map((product) => {
//         return {
//             ...product,
//             price: parseInt(product.price.replace(/\$/g, '')*22000)
//         }
//     })

//     res.status(200).json({ data, totalPages })
// } catch (error) {
//     res.status(500).json({ message: error.message })
// } finally {
//     (async () => {
//         await product.$disconnect();
//     })
// };
// }



