import express from "express"
import mongoose from "mongoose"
import cors from 'cors';
import dotenv from "dotenv"

const app = express()
app.use(cors())

dotenv.config(); 

let { PASSWORD } = process.env

const MONGO_CONNECTION_STRING =
  `mongodb+srv://mygmar090:${PASSWORD}@leap-test.q3ptkvy.mongodb.net/`;
mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.error(err));

const port = 8080

app.get ('/', (req, res)  => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`backend aslaa ${port}`)
})