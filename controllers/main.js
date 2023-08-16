
const BadRequest=require("../errors/bad-request.js");


const login = async (req, res) => {
    const {username, password}=req.body;
    console.log(username, password);
    //mongo
    //joi
    //errors in the controllers
    if(!username || !password) {
        throw new BadRequest("please provide username or password", 400);
    }

    res.send("fake login register/signup")
}

const dashboard = async (req, res) => {
const randomNumber = Math.floor(Math.random()*100);
console.log(randomNumber);
return res.status(200).json({msg: "hello, john doe", secret: `your secret code is ${randomNumber}`})
}

module.exports = {login, dashboard};

