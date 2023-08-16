const login = async (req, res) => {
    res.send("fake login register/signup")
}

const dashboard = async (req, res) => {
const randomNumber = Math.floor(Math.random()*100);
console.log(randomNumber);
return res.status(200).json({msg: "hello, john doe", secret: `your secret code is ${randomNumber}`})
}

module.exports = {login, dashboard};

