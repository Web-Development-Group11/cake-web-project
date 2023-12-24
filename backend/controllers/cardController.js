import { PrismaClient } from "@prisma/client";

const product = new PrismaClient().product;

export const getProduct = async (req, res) => {
    try {
        const info = await product.findMany({take: 8});
        const cleanData = [];
        for(let i = 0; i < 8; i++) {
        info[i].price = parseFloat(info[i].price.replace(/\$/g, '')*22000).toFixed(3)
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
        info.price = parseFloat(info.price.replace(/\$/g, '')*22000).toFixed(3)
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
        data.price = parseFloat(data.price.replace(/\$/g, '')*22000).toFixed(3);
        res.status(200).json({ data : data });
    } catch(err) {
        res.status(500).json({ message : err.message });
    }finally {
        async() => {
            await product.$disconnect();
        };
    }
}