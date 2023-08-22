const jwt = require("jsonwebtoken");
const CustomErrors=require("../errors/custom-errors.js");
const {UnauthenticatedError}=require("../errors/unauthenticated.js");


async function authenticationMiddleware (req, res, next) {
  console.log(req.headers.authorization);

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw UnauthenticatedError("no token provided");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedError("you are not authorized to use this route");
  }
}

module.exports=authenticationMiddleware;
