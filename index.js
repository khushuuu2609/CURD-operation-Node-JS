import express from "express";
import dotenv from "dotenv";
import libraryRoute from "./src/api/library/library.routers.js";
import errorHandler from "./src/utils/errorHandler.js"

dotenv.config()
const port = process.env.PORT ?? 3000
const app = express()

app.use(express.json())

app.use("/library", libraryRoute);

app.use(errorHandler);


app.listen(port, () => {
    console.log(`server listinig on port ${port}`)
})