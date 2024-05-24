import express from "express";
// import chalk from "chalk";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ data: "hello chung toi chao nguoi mot ngay moi tot lanh!" });
});
app.get("/admin", (req, res) => {
  res
    .status(200)
    .json({ data: "hello admin xin chao nguoi mot ngay moi moi tot lanh!" });
});
app.listen(PORT, () => {
  console.log("App running http://localhost:", PORT);
});
