import { PrismaClient } from "@prisma/client";
import  bcrypt  from "bcrypt";


const user = new PrismaClient().user;

const createNewUser = async (req,res) => {
  try {
  const { name, email, password, username, phoneNumber } = req.body;
  console.log(typeof email);
  // if (typeof email !== "string") return res.status(404).json( {message: "invalid email"});
  // const exitingUser = await user.findUnique({ where : {email : email} });
  // if (exitingUser) { return res.status(400).json({ message : "User already exist" }); }
  const hashPassword = await  bcrypt.hash(password, 10);
  const phone = parseInt(phoneNumber);
  const newUser = await user.create({
      data: {
      name ,
      email ,
      password : hashPassword,
      username ,
      phoneNumber,
      },
  });
  res.status(200).json({ data : newUser});
} catch (error) {
  res.status(500).json({ message : error.message });
}
};
export default createNewUser;
