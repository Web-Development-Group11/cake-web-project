import { PrismaClient } from "@prisma/client";

const order = new PrismaClient().order

const saveOrder = async (req,res) => {
    const orderCart = req.body;
    const {total} = req.body;
    try{
        const saveOrder = await order.create({
            where : {
            userId : req.user.exitingUser.id,
            },
            data : {
                name : orderCart.name,
                phoneNumber : orderCart.phoneNumber,
                email : orderCart.email,
                addressDetails : orderCart.addressDetails,
                product : orderCart.cart,
                total : total,
                shippingMethod : orderCart.shippingMethod,
                PaymentMethod : orderCart.paymentMethod,
                note : orderCart.note
            }
        })
    } catch(err){
        res.status(400).json({message: err.message});
    } finally {
        async () => {
            order.$disconnect();
        }
    }
}