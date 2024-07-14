import { readLibrary } from "../../service/libraryFile.js";
import bookValidationSchema from "./library.validation.js";
import { insertBook, updateBookDAO } from "./library.dao.js";

 const getAllBooks = async(req) => {
    try{
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const startPage = (page - 1)*limit;
        const endIndex = (page * limit)

        const bookData = readLibrary();
        const paginatedBook = bookData.slice(startPage,endIndex)

        return {
            data :paginatedBook,
            metadata : {
                limit,
                page,
                total : bookData.length,
                totalPage: Math.ceil(bookData.length / limit),
            },
        }
    }
    catch(error){
        throw error;
    }
};

const addBook = async (req) => {
    try{
        const book = req.body;
        await bookValidationSchema.validate(book);

        const newBook = insertBook(book);
        return {data:newBook};

    }catch(error){
        throw error;
    }
};

const updateBook = async (req) => {
    try{
        const id = parseInt(req.params.id);
        const book = req.body;
        await bookValidationSchema.validate(book);
        const updatedBook = updateBookDAO(id, book);
        return {data:updatedBook};
    }catch(error){
        throw error;
    }
};

export default { getAllBooks, addBook, updateBook };