 const  asyncHandler=(func)=>
 
 {async (req,res,next)=> {

    try {
        await func(req,res,next) //simply executes the function
        
    } catch (error) {
        res.status(error.code || 500).json({
            sucess:false,
            error:error.message || "something went wrong"

        })
        
    }


    
}}

