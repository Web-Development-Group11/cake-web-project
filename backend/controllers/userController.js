import { PrismaClient } from "@prisma/client";
import  bcrypt  from "bcrypt";


const user = new PrismaClient().user;
// thêm người dùng mới
const createNewUser = async (req,res) => {
  try {
  const { name, email, password, username, phoneNumber } = req.body;
//kiểm tra validate
  if (typeof email !== "string") return res.status(404).json( {message: "invalid email"});
//kiểm tra người dùng tồn tại bằng email
  const exitingEmail = await user.findUnique({  where : {email : email }  });
  //kiểm tra người dùng tồn tại bằng phoneNumber
    const exitingPhoneNumber = await user.findUnique({  where : {phoneNumber : phoneNumber }  });
  if (exitingEmail || exitingPhoneNumber) { return res.status(400).json({ message : "User already exist" }); }
  //mã hóa mật khẩu
  const hashPassword = await  bcrypt.hash(password, 10);
  //tạo người dùng mới 
  const newUser = await user.create({
      data: {
      name ,
      email ,
      password : hashPassword,
      username ,
      phoneNumber ,
      },
  });
  res.status(200).json({ data : newUser});
} catch (error) {
  res.status(500).json({ message : error.message });
}
};

const loginUser = async (req,res) => {
  try {
    const { username, password } = req.body;
    const exitingUser = await user.findUnique({ where : {email : username} });
  } catch (err) {
    res.status(500).json({ message : err.message });
  }
};

export default createNewUser;
