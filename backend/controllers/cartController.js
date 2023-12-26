export const saveGuestCart =async (req,res)=> {
    const {cart} = req.body
    const info =[]
    try { 
    cart.forEach(element => { 
        info.push({
            productTitle : element.title,
            productPrice : element.price,
            productAmount : element.amount,
            productImage : element.image_urls.image_url_0
        })
    });
      await  res.cookie('guestCart', info, {httpOnly:true , maxAge : 60*60*1000})
      res.status(200).json({message : "success"})
    } catch (err) {
        res.status(500).json({message : err.message})
    }
}

export const getGuestCart = async (req, res) => {
    try {
        const encodedData = await req.cookies.guestCart
        res.status(200).json({data : encodedData});
        console.log(encodedData);
    } catch (err) {
        res.status(500).json({message : err.message})
    }
}