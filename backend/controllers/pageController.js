import { PrismaClient } from "@prisma/client"


const products = new PrismaClient().product;


export const pagination =async (req,res) => {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 9;
    const filter = req.query.filter;
    const sort = req.query.sort;
    const  keyword  = req.query;
    try { 
        let where = {}; // Điều kiện để lọc dữ liệu
        let orderBy = {}; // Điều kiện để sắp xếp dữ liệu
        if (filter) {
            where = {
                name: {
                    contains: filter
                }
            };
        } else {    
            where = {};
        }
        if (sort) {
            orderBy = {
                price: sort === 'asc' ? 'asc' : 'desc' 
            };
        }
    const info = await products.findMany({
        skip: (page-1) * perPage,
        take : perPage,
        where : where,
        orderBy : orderBy,   
    
    });
    const data = info.map(item => {
        const priceWithSymbol = item.price; // Giả sử giá là một trường có tên là 'price'
        const priceWithoutSymbol = parseInt(priceWithSymbol.replace(/\$/g, '')*22000);
        return { ...item, price: priceWithoutSymbol }; // Thay thế giá trị cũ bằng giá trị mới không có ký hiệu $
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



