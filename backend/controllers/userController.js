import { PrismaClient } from "@prisma/client";

const user = new PrismaClient().user;


export const getUser = async (req, res) => {
    const slug = req.params.slug;
    try {
        const info = await user.findMany({
            where: {
                slug: slug
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

// export const updateUsers = async (req, res) => {
//     try {
//         const info = await user.updateMany({
//             where: {
//                 id: req.params.id
//             },
//             data: {
//                 name: req.body.name,
//                 email: req.body.email,
//                 password: <PASSWORD>,
//                 role: req.body.role,
//                 status: req.body.status,
//                 created_at: req.body.created_at,
//                 updated_at: req.body.updated_at,
//             }
//         });
//         res.status(200).json({ data: info })
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     } finally {
//         async () => {
//             await user.$disconnect()
//         }
//     }
// }