import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const users = new PrismaClient().user

export const saveGuestCart =async (req,res)=> {
    const {cart} = req.body
    const token = await req.cookies.token
    const user = jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(err){ 
             res.status(403).json({message : "Forbidden"});
        } else {
        req.user = decoded;
        }
    });
     const info =[]
    try { 
    cart.forEach(element => { 
        info.push({
            id : element.id,
            title : element.title,
            price : element.price,
            amount : element.amount,
            image_urls :{
                image_url_0: element.image_urls.image_url_0
            }
        });
    });
    if(token){
        cart.forEach(async element =>  {
        const existProduct = await users.findFirst({
            where : {
                id : req.user.exitingUser.id,
                cart : {
                    some : {
                    productId : element.id,
                    }
                }
            },
        });
        console.log(existProduct)
        if(existProduct) {
            await users.update({
                where : {
                    id : req.user.exitingUser.id,
                    cart : {
                        some : {
                            productId : element.id
                        }
                    }
                },
                    data : {
                        cart : {
                        updateMany : {
                            where : {
                                productId : element.id,
                            },
                            data : {
                                productAmount : element.amount,
                            }
                        }
                    }
                }
            })
        } else {
            await users.update({
                where : {
                    id : req.user.exitingUser.id,
                },
                data : {    
                    cart : {
                        push :{
                            productId : element.id,
                            productTitle : element.title,
                            productPrice : element.price,
                            productAmount : element.amount,
                            productThumbnail : element.image_urls.image_url_0,
                        }
                    }
                }
            })
        }
    })
} else {
    await  res.cookie('guestCart', info, {httpOnly:true , maxAge : 60*60*1000})
}
    res.status(200).json({message : "success"})
    } catch (err) {
        res.status(500).json({message : err.message})
    }
}

export const getGuestCart = async (req, res) => {
    try {
        // if(token) {
        //     const data = await user.findUnique({
        //         where : {
        //             id :  req.user.exitingUser.id
        //         }
        //     })
        //     encodedData = data.cart;
        //     console.log(encodedData)
        // } else {
        const encodedData = await req.cookies.guestCart
        res.status(200).json({data : encodedData});
        console.log(encodedData);
    } catch (err) {
        res.status(500).json({message : err.message})
    }
}