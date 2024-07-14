import express from "express";
import {addBook,
        deleteBook,
        getAllBooks,
        getBook,
        updateBook} from "./library.controllers.js";

const libraryRoute = express.Router();

//Routes : api:- http://localhost:PORT/library/
libraryRoute.get("/", getAllBooks);
libraryRoute.post("/", addBook);
libraryRoute.get("/:id", getBook);
libraryRoute.patch("/:id", updateBook);
libraryRoute.delete("/:id", deleteBook);


export default libraryRoute;