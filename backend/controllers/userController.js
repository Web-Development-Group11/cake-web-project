import { PrismaClient } from "@prisma/client";


const user = new PrismaClient().user;

const createNewUser = async (req,res) => {
  const userData = req.body;
  try{
    const newUser = await user.create({
      data : userData,
  });
  res.status(200).json({data : newUser});
} catch (err){
  console.log(err);
  }
}

export default createNewUser;
