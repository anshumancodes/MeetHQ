
const{getUser}=require("../services/auth")
async function restrictToUserOnly(req, res, next) {

    //verify cookie
    const userCookie=req.cookies?.cookieID;

    if(!userCookie)return res.redirect("/login");

    // if he got a cookie check for his token validation
    const user =getUser(userCookie);
    if(!user) res.redirect("/login")

    req.user=user;
    next()
   

}

module.exports={restrictToUserOnly};