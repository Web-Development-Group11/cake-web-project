import { PrismaClient } from "@prisma/client";

const user = new PrismaClient().user;


export const getUser = async (req, res) => {
    const id = req.user.exitingUser.id ;
    console.log(id);
    try {
        const info = await user.findUnique({
            where: {
                id: id
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

export const updateUsers = async (req, res) => {
  const id = req.user.exitingUser.id ;
  const {name, email, phoneNumber, password, city, district, ward, address} = req.body;
    try {
        const info = await user.updateFirst({
            where: {
                id: id
            },
            data: {
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                password: password,
                addressDetails: {
                  city: city,
                  district: district,
                  ward: ward,
                  address: address
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