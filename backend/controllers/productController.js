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
    const productIds = products.map((product) => product.id);
    if (productIds.length > 0) {
        const averageRatings = await comment.groupBy({
            by: ['productId'],
            _avg: {
                rating: true
            },
            where: {
                productId: {
                    in: productIds
                }
            }
        });
        const productWithRatingInfo = products.map((product) =>{
            const avgRating = averageRatings.find((rating) => rating.productId === product.id);
            const defaultRating = { _avg: { rating: 0 }, _count: { rating: 0 } };
            const ratingInfo = avgRating || defaultRating

            const productWithRating = {
            ...product,
            rating : ratingInfo._avg.rating
        };
        return productWithRating;
    });

    const data = productWithRatingInfo.map((product) => {
        return {
            ...product,
            rating : Math.ceil(product.rating*2)/2,
            price: parseInt(product.price.replace(/\$/g, '')*22000)
        }
    })
    const totalCount = await product.count({where});
    const totalPages = Math.ceil(totalCount / size);

    res.status(200).json({ data, totalPages })
}  
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
        const productData = await product.findFirst({
            skip: randomOffset,
        });
        
        const productPrice = parseInt(productData.price.replace(/\$/g, '')*22000)
        
        const commentData = await comment.groupBy({
            by: ['productId'],
            where: {
                productId: productData.id,
            },
            _avg: {
                rating: true
            },
        });
        console.log(commentData)
        const rating = commentData.length > 0 ? commentData[0]._avg.rating : 0;
        const data = {
            ...productData,
            price: productPrice,
            rating: Math.ceil(rating*2)/2
        };

        res.status(200).json({ data: data })
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
        const productData = await product.findUnique({
            where : {
            id : id
        }
        });
        const productPrice = parseInt(productData.price.replace(/\$/g, '')*22000);

        const commentData = await comment.groupBy({
            by: ['productId'],
            where: {
                productId: id
            },
            _avg: {
                rating: true
            },
        });
        const rating = commentData.length > 0 ? commentData[0]._avg.rating : 0;
        const data = {
            ...productData,
            price: productPrice,
            rating: Math.ceil(rating*2)/2
        };

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
        const productIds = averageRatings.map((rating) => rating.productId);
        if (productIds.length > 0) {
        const productByRating = await product.findMany({
            where : {
                id : {
                    in : productIds,
                },
            },
        })
        const productWithRatingInfo = productByRating.map((product) =>{
            const avgRating = averageRatings.find((rating) => rating.productId === product.id);
            const defaultRating = { _avg: { rating: 0 }, _count: { rating: 0 } };
            const ratingInfo = avgRating || defaultRating

            const productWithRating = {
            ...product,
            rating : Math.ceil(ratingInfo._avg.rating*2)/2
        };
        return productWithRating;
    });
        const sortedProducts = productWithRatingInfo.sort((a,b) => b.rating - a.rating);
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