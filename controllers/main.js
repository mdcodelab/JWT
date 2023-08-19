
const BadRequest=require("../errors/bad-request.js");
const CustomErrors= require("../errors/custom-errors.js");
const jwt = require("jsonwebtoken");



const login = async (req, res) => {
    const {username, password}=req.body;
    console.log(username, password);
    //mongo
    //joi
    //errors in the controllers
    if(!username || !password) {
        throw new BadRequest("please provide username or password", 400);
    }
    //demo, normally provided by DB
    const id=new Date().getDate();

    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: "3d"});

    res.status(200).json({msg: "user created", token})
}

async function dashboard (req, res) {
const authHeader=req.headers.authorization;

if(!authHeader || !authHeader.startsWith("Bearer ")) {
    throw BadRequest("no token provided", 401)
}

const token=authHeader.split(" ")[1];
console.log(token);
const luckyNumber = Math.floor(Math.random() * 100);
try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    return res.status(200).json({msg: `hello, ${decoded.username}`, secret: `your luckyNumber is ${luckyNumber}`})
} catch (error) {
   throw new CustomErrors("not authorized to use this route", 401) 
}

}



module.exports={login, dashboard};


// const dashboard = async (req, res) => {

// const authHeaders = req.headers.authorization;
// if(!authHeaders || !authHeaders.startsWith("Bearer ")) {
//     throw new BadRequest("No token provided", 401);
// }

// const token= authHeaders.split(",")[1];
// try {
//     //console.log(randomNumber);
//     console.log(req.headers);

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log(decoded);
//     const randomNumber = Math.floor(Math.random() * 100);
//     return res
//       .status(200)
//       .json({
//         msg: "hello, john doe",
//         secret: `your secret code is ${randomNumber}`,
//       });
// } catch (error) {
//     throw new CustomErrors("the route you access does not exist", 401)
// }
// }









