import { PrismaClient } from "@prisma/client";

const order = new PrismaClient().order

const saveOrder = async (req,res) => {
    const order = req.body;

    try{
        const saveOrder = await order.create({
            userId : req.user.exitingUser.id,
            name : order.name,
            phoneNumber : order.phoneNumber,
            email : order.email,
            addressDetails : order.addressDetails,
            product : order.cart,
            total : order.
        })
    } catch(err){

    };
}