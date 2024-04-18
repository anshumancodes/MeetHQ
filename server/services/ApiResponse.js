class ApiResponse{
    constructor(
        statuscode,
        message="sucess!",
        data,
        error,
       
    ){
        this.statuscode=statuscode;
        this.message=message;
        this.data=data;
        this.error=error;
        this.success=statuscode<400;
    }
}