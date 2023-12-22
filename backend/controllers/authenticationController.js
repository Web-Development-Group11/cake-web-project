import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { isEmail, isPhone } from "../middleware/validateData.js";

const cookie = cookieParser();

const user = new PrismaClient().user;


// thêm người dùng mới
export const createNewUser = async (req, res) => {
  try {
    const  data  = req.body;
    //kiểm tra validate
    if (typeof(data.username) !== "string") return res.status(404).json({ message: "invalid email" });
    
    //kiểm tra người dùng tồn tại bằng email
    const exitingEmail = await user.findUnique({ where: { email: data.username } });
    
    //kiểm tra người dùng tồn tại bằng phoneNumber
    const exitingPhoneNumber = await user.findUnique({ where: { phoneNumber: data.username } });
    
    if (exitingEmail || exitingPhoneNumber) { return res.status(400).json({ message: "User already exist" }); }

    //mã hóa mật khẩu
    let userData = {};
    if(isEmail(data.username)){ 
      userData.email = data.username; 
    }else if(isPhone(data.username)){ 
      userData.phoneNumber = data.username;
    }else{
      res.status(400).json({error: 'Dữ liệu không hợp lệ'});
    }
    res.status(200).json(true);
    const hashPassword = await bcrypt.hash(data.password, 10);
    //tạo người dùng mới 
    const newUser = await user.create({
      data:{
        email : userData.email,
        phoneNumber : userData.phoneNumber,
        password : hashPassword
      }
    });
    res.status(200).json({ data: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



//người dùng đăng nhập 
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    //tìm kiếm tài khoản người dùng
    const exitingUser = await user.findFirst({
      where: {
        OR: [
          { email: username },
          { phoneNumber: username },
        ]
      }
    });
    //nếu tài khoản người dùng tồn tại
    if (exitingUser) {
      //so sánh mật khẩu trong database và mật khẩu được nhập vào
      if (await bcrypt.compare(password, exitingUser.password)) {

        //tạo token
        const token = jwt.sign({ exitingUser }, process.env.SECRET_KEY, { expiresIn: "1d" });

        res.cookie("token", token, { maxAge : 60*60*1000 ,httpOnly: true, secure : true, sameSite :"strict", });


        res.status(200).json({token})


      } else {
        //nếu mật khẩu hoặc tài khoản sai 
        return res.status(400).json({ message: "UserName or Password is wrong" });
      }
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const logoutUser = async (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "logout success" });
}



