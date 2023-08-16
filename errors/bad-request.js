const {StatusCodes}=require("http-status-codes");
const CustomErrors=require("./custom-errors.js");


class BadRequest extends CustomErrors {
    constructor (message) {
        super(message)
        this.statusCodes=StatusCodes.BAD_REQUEST
    }
}

module.exports=BadRequest;
