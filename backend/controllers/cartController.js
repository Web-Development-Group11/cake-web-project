import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const users = new PrismaClient().user

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
        cart.forEach(async element =>  {
        const existProduct = await users.findFirst({
            where : {
                id : req.user.exitingUser.id,
            },
            include : {
                cart : true
                }
            });
        const exist= existProduct.cart.forEach( async product => {
            return (product.includes(element.id)) 
        });
        if(exist) {
            await users.update({
                where : {
                    id : req.user.exitingUser.id,
                },
                data :{
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
}else {
    await  res.cookie('guestCart', info, {httpOnly:true , maxAge : 60*60*1000})
    res.status(200).json({message : "success"})
}
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
            const data = await users.findUnique({
                where : {
                    id :  req.user.exitingUser.id
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
        // console.log(encodedData);
        }
        res.status(200).json({data : encodedData});
    } catch (err) {
        res.status(500).json({message : err.message})
    } finally{
        async () => {
        await  users.$disconnect()
        }
    }
}