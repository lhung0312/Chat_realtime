const http = require("http");
const express = require("express");
// const logger = require("morgan");
// const cors = require("cors");

// mongo connection
const connectDB = require('../config/mongo')

connectDB()
// routes
const indexRouter = require("../routes/index.ts");
const userRouter = require("../routes/user.ts");
const chatRoomRouter = require("../routes/chatRoom.ts");
const deleteRouter = require("../routes/delete.ts");
// middlewares
// const { decode } = require('./middlewares/jwt.ts');

const app = express();

/** Get port from environment and store in Express. */
const port = process.env.PORT || "3000";
app.set("port", port);




// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.get('/abc', (req:any, res:any) => {
    res.send('Hello World!')
  })
app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/room", chatRoomRouter);
app.use("/delete", deleteRouter);

/** catch 404 and forward to error handler */
// app.use('*', (req, res) => {
//   return res.status(404).json({
//     success: false,
//     message: 'API endpoint doesnt exist'
//   })
// });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
// /** Create HTTP server. */
// const server = http.createServer(app);
// /** Listen on provided port, on all network interfaces. */
// server.listen(port);
// /** Event listener for HTTP server "listening" event. */
// server.on("listening", () => {
//   console.log(`Listening on port:: http://localhost:${port}/`)
// });