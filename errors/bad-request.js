const {StatusCodes}=require("http-status-codes");
const customErrors=require("./custom-errors.js");


class BadRequest extends customErrors {
    constructor (message) {
        super(message)
        this.statusCodes=StatusCodes.BAD_REQUEST
    }
}

module.exports=BadRequest;
