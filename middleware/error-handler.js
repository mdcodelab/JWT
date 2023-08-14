const {CustomErrors}=require("../errors");
const {StatusCodes}=require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
if(err instanceof CustomErrors) {
    return res.status(err.statusCodes).json({msg: err.message})
}
return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Something goes wrong, try again later");
}

module.exports=errorHandlerMiddleware;