import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const userCart = new PrismaClient().cart

export const saveGuestCart =async (req,res)=> {
    const {cart} = req.body
    const token = await req.cookies.token
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(decoded){ 
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
        const existCart = await userCart.findFirst({
            where : {
                userId: req.user.exitingUser.id,
            }
        });
        cart.forEach(async element =>  {
        const productIndex= existCart.cart.findIndex(product => product.productId === element.id); 
        if(productIndex > -1) {
            await userCart.update({
                where: {
                    id : existCart.id, 
                    userId: req.user.exitingUser.id,
                    cart : {
                        some : {
                            productId : element.id
                        }
                    }
                },
                data: {
                  cart: {
                    updateMany: {
                        where : {
                            productId : element.id
                        },data : {
                            productAmount : parseInt(element.amount)
                        }
                    }
                    },
                },
            });
        } else {
        await userCart.update({
            where: {
                id : existCart.id,
              userId: req.user.exitingUser.id,
            },
            data: {
              cart: {
                push: {
                  productId: element.id,
                  productTitle: element.title,
                  productPrice: element.price,
                  productAmount : element.amount,
                  productThumbnail : element.image_urls.image_url_0
                },
            },
        },
    });
}
});
}else {
    await  res.cookie('guestCart', info, {httpOnly:true , secure: true,sameSite :"lax", maxAge : 60*60*1000})
    }
    res.status(200).json({message : "success"})
    } catch (err) {
        res.status(500).json({message : err.message})
    } finally{
        async () => {
        await  users.$disconnect()
        }
    }
}

export const getGuestCart = async (req, res) => {
    const token = req.cookies.token
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(decoded){ 
            req.user = decoded;
        }
    });
    try {
        const info = [];
        let encodedData ;
        if(token) {
            const data = await userCart.findFirst({
                where : {
                    userId :  req.user.exitingUser.id
                }
            })
        const cart  = data.cart;
        cart.forEach(element => { 
            info.push({
                id : element.productId,
                title : element.productTitle,
                price : element.productPrice,
                amount : element.productAmount,
                image_urls :{
                    image_url_0: element.productThumbnail
                }
            });
        });
        encodedData = info;
        } else {
        encodedData = await req.cookies.guestCart
        }
        // console.log(encodedData);
        res.status(200).json({data : encodedData});
    } catch (err) {
        res.status(500).json({message : err.message})
    } finally{
        async () => {
        await  users.$disconnect()
        }
    }
}

export const deleteCartProduct = async (req, res) => {
    const {productId} = req.body;
    const token = req.cookies.token
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(decoded){ 
            req.user = decoded;
        }
    });
    try {
        if(token) {
            const existCart = await userCart.findFirst({
                where : {
                    userId: req.user.exitingUser.id,
                }
            });
            const productIndex = existCart.cart.findIndex(element => 
                element.productId === productId)
                console.log(productIndex);
            if(productIndex > -1){
                await userCart.update({
                    where : {
                        id : existCart.id,
                        userId : req.user.exitingUser.id,
                    },
                    data : {
                        cart : {
                            deleteMany : {
                                where : {
                                    productId : productId
                                }
                            }
                        }
                    }                      
                })
            }
        }
    } catch(err) {
        res.status(400).json({message : err.message});
    }
}