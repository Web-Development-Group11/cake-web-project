import { PrismaClient } from "@prisma/client";



const product = new PrismaClient().product;

const comment = new PrismaClient().productComment;

export const getProducts = async (req, res) => {
    try {
        const info = await product.findMany({take: 8});
        const cleanData = [];
        for(let i = 0; i < 8; i++) {
        info[i].price = parseInt(info[i].price.replace(/\$/g, '')*22000)
        cleanData.push(info[i])
        }
        res.status(200).json({ data: cleanData })
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
    try { 
        const averageRatings = await comment.groupBy({
            take : 8,
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
        const productByRating = await product.findMany({
            
            where : {
                
                id : averageRatings.productId,
            }
        })
        res.status(200).json({data : averageRatings._avg.ra})
    } catch (err) { 
        res.status(500).json({ message : err.message})
    } finally {
        async () => { 
            await product.$disconnect();
            await comment.$disconnect()
        }
    }
}