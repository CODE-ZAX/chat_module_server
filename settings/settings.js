const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

var admin = require("firebase-admin");

var serviceAccount = require("./dusecachatmodule-firebase-adminsdk-iv12y-3250ae0a11.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()
const auth = admin.auth();

module.exports ={
    io,
    express,
    db,
    auth
}