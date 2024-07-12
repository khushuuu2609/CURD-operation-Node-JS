import express from "express";
import {addBook,
        deleteBooks,
        getAllBooks,
        getBook,
        updateBook} from "./library.controllers.js";

const libraryRoute = express.Router();

//Routes : api:- http://localhost:PORT/library/
libraryRoute.get("/", getAllBooks);
libraryRoute.post("/", addBook);
libraryRoute.get("/:id", getBook);
libraryRoute.patch("/:id", updateBook);
libraryRoute.delete("/:id", deleteBooks);


export default libraryRoute;