import { PrismaClient } from "@prisma/client";

const order = new PrismaClient().order

const saveOrder = async (req,res) => {
    const order = req.body;
    const totalOrder = order.cart.forEach(element => {
        totalOrder += element.amount*parseFloat(element.price) 
    })
    try{
        const saveOrder = await order.create({
            where : {
            userId : req.user.exitingUser.id,
            },
            data : {
                name : order.name,
                phoneNumber : order.phoneNumber,
                email : order.email,
                addressDetails : order.addressDetails,
                product : order.cart,
                total : totalOrder,
                shippingMethod : order.shippingMethod,
                PaymentMethod : order.paymentMethod,
                note : order.note
            }
        })
    } catch(err){

    };
}