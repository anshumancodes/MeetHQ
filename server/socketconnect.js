const { Server } = require("socket.io");
const io = new Server(8001,{
    cors:true,
});
const emailtoSocketidMap=new Map();
const socketIdtoEmailMap=new Map();
io.on("connection", (socket) => {
  console.log("socket connected ",socket.id);
  socket.on("meet:id",(meetData)=>{
    const {meetId,email}=meetData;
    emailtoSocketidMap.set(email,socket.id);
    socketIdtoEmailMap.set(socket.id,email);
    // send user who is already in the room a notification that someone is entering
    io.to(meetId).emit("user:joined",{email,id:socket.id});
    socket.join(meetId)


    io.to(socket.id).emit("meet:id",meetData);
    console.log("room id",meetId);
  });


socket.on("user:call",({to,offer})=>{
  io.to(to).emit("incomming:call",{from:socket.id,offer});

});

socket.on("call:accepted",({to,ans})=>{
  io.to(to).emit("call:accepted",{from:socket.id,ans});
});

});
