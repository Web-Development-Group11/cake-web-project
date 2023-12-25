import { PrismaClient } from "@prisma/client";

const product = new PrismaClient().product;

export const getProducts = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const size = req.query.size || 9;
        const totalCount = await product.count();

        const skip = (page - 1) * size;
        const totalPages = Math.ceil(totalCount / size);

        const products = await product.findMany({
            take: size,
            skip,
        })

        const data = products.map((product) => {
            return {
                ...product,
                price: parseInt(product.price.replace(/\$/g, '')*22000)
            }
        })

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