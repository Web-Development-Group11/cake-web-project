
export const saveGuestCart =async (req,res)=> {
    const {cart} = req.body
    try { 
      await  res.cookie('guestCart', cart, {httpOnly:true , maxAge : 60*60*1000})
      res.status
    }
}