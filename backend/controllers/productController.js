import { PrismaClient } from "@prisma/client";



const product = new PrismaClient().product;

const comment = new PrismaClient().productComment;

export const getProducts = async (req, res) => {
    try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 9;
    const filter = req.query.filter
    const sort = req.query.sort
    const keyword   = req.query.keyword
   
    let where = {}; 
    let orderBy = {};
    const skip = (page - 1) * size;
    
   
    
    if (filter) {
        where = {
            title: {
                contains: filter,
                mode :'insensitive' 
            }
        };
    } else {    
        where = {}; 
    }
    if (keyword) {
        const searchConditions = {
                title: {
                contains: keyword,
                mode : 'insensitive' 
                }
            };
        if (filter) {
            where = {
                AND: [where, searchConditions] 
            };
        } else {
            where = searchConditions; 
        }
    }
    if (sort==='priceAsc' || sort==='priceDesc') {
        orderBy = {
            price: sort === 'priceAsc' ? 'asc' : 'desc' 
        }
    } else if(sort==='titleAsc' || sort==='titleDesc') {
        orderBy = {
            title: sort === 'titleAsc' ? 'asc' : 'desc' 
        }
    };
    const products = await product.findMany({
        take: size,
        where : where,
        orderBy : orderBy,
        skip :skip,
    })
    

    const data = products.map((product) => {
        return {
            ...product,
            price: parseInt(product.price.replace(/\$/g, '')*22000)
        }
    })
   
    const totalCount = await product.count({where});
    console.log(totalCount)
    const totalPages = Math.ceil(totalCount / size);

    res.status(200).json({ data, totalPages })  
} catch (error) {
    res.status(500).json({ message: error.message })
} finally {
    (async () => {
        await product.$disconnect();
    })
};
}




export const getRandomProduct = async (req, res) => {
    try {
        const count = await product.count(); // Đếm số lượng bản ghi
        const randomOffset = Math.floor(Math.random() * count); // Tạo offset ngẫu nhiên
        const info = await product.findFirst({
            skip: randomOffset,
        });
        info.price = parseInt(info.price.replace(/\$/g, '')*22000)
        res.status(200).json({ data:info })
    } catch (error) {
        res.status(500).json({ message: error.message })

    } finally {
        async () => {
            await product.$disconnect();
        }
    }
}

export const getProductById = async (req, res) =>{
    const id = req.params.id;
    try { 
        const data = await product.findUnique({
            where : {
            id : id
        }
        });
        data.price = parseInt(data.price.replace(/\$/g, '')*22000);
        res.status(200).json({ data : data });
    } catch(err) {
        res.status(500).json({ message : err.message });
    }finally {
        async() => {
            await product.$disconnect();
        };
    }
}

export const getHighlitedProduct = async ( req, res) => {
    const {amount} = req.body;
    try { 
        const averageRatings = await comment.groupBy({
            take : amount,
            by: ['productId'],
            _avg: {
              rating: true,
            },
            orderBy: {
              _avg: {
                rating: 'desc', // Sắp xếp theo giá trị trung bình giảm dần
              },
            },
          });
        //   averageRatings.forEach( element => async {
        const productIds = averageRatings.map((rating) => rating.productId);
        if (productIds.length > 0) {
        const productByRating = await product.findMany({
            where : {
                id : {
                    in : productIds,
                },
            },
        })
        const sortedProducts = productIds.map((productId) =>
        productByRating.find((product) => product.id === productId)
      );
      sortedProducts.forEach((product) => {
        if (product && product.price) {
            const numericPrice = parseInt(product.price.replace(/\$/g, '')) * 22000;
            product.price = numericPrice;
        }
    });
        res.status(200).json({data : sortedProducts})
    } else {
        res.status(404).json({message : " product not found"})
    }
    } catch (err) { 
        res.status(500).json({ message : err.message})
    } finally {
        async () => { 
            await product.$disconnect();
            await comment.$disconnect()
        }
    }
}