import { PrismaClient } from "@prisma/client";

const user = new PrismaClient().user;


export const getUser = async (req, res) => {
    const id = req.user.exitingUser.id ;
    try {
        const data = await user.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json({ data: data })
    } catch (error) {
        res.status(500).json({ message: error.message })
    } finally {
        async () => {
            await user.$disconnect()
        }
    }
}

export const updateUsers = async (req, res) => {
  const id = req.user.exitingUser.id ;
  const data = req.body;
    try {
        const info = await user.update({
            where: {
                id: id
            },
            data: {
                name : data.name ,
                addressDetails : {
                province : data.province,
                district : data.district,
                ward : data.ward,
                address : data.address
            }
        }
        });
        res.status(200).json({ data: info })
    } catch (error) {
        res.status(500).json({ message: error.message })
    } finally {
        async () => {
            await user.$disconnect()
        }
    }
}