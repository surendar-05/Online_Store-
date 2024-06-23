const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db.js");
const router = require("./routes");

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(
  "/cloudinary",
  createProxyMiddleware({
    target: "https://api.cloudinary.com/v1_1",
    changeOrigin: true,
    pathRewrite: {
      "^/cloudinary": "", // remove /cloudinary from the URL path
    },
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

const PORT = 8000 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on the port:", PORT);
  });
});
