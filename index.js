

// Middleware to parse request bodies as JSON
app.use(express.json());


// Route to handle chat messages
app.post("/chat/:fid", (req, res) => {
    const friendID = req.params.fid;
    const fetchPreviousChat = []
io.on("connection", (socket) => {
  // Handle a new connection from a client
  socket.on("chat-started", (userId) => {
    io.emit("user-fetched", fetchPreviousChat);
  });

  // Handle a new chat message from a client
  socket.on("chat message", ({ userId, message }) => {
    const newMsg = {userId:userId,message:message};
    fetchPreviousChat.push(newMsg);
    io.emit("message", newMsg);
  });

  // Handle a disconnect event from a client
  socket.on("disconnect", () => {
    //store new chat
    console.log("Client disconnected");
  });
});



  // Broadcast the message to all connected clients
  io.emit("message", { userId, message });
});


// Start the server
server.listen(8000, () => {
  console.log("Server started on port 3000");
});
