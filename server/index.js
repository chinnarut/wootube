import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/users.js";
import videoRouter from "./routes/videos.js";
import commentRouter from "./routes/comments.js";
import authRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(cors());
dotenv.config();

const connect = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MONGODB)
    .then(() => {console.log("DB is connected...")})
      .catch((err) => {throw err});
};

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/videos", videoRouter);
app.use("/api/comments", commentRouter);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong...";

  return res.status(status).json({
    success: false,
    status,
    message
  });
});

// app.use(express.static(path.join(__dirname, "/wootube_ui")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/wootube_ui/build", "index.html"));
// });


app.listen(process.env.PORT || 8000, () => {
  console.log("Server is connected...");
  connect();
});