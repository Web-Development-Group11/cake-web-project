import { PrismaClient } from "@prisma/client";

const product = new PrismaClient().product;

export const getProduct = async (req, res) => {
    try {
        const info = await product.findMany({take: 8});
        res.status(200).json({ data: info })
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
        res.status(200).json({ data: info })
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
        res.status(200).json({ data : data });
    } catch(err) {
        res.status(500).json({ message : err.message });
    }finally {
        async() => {
            await product.$disconnect();
        };
    }
}