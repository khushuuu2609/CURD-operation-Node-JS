import { HttpError } from "../../ts/class/httpError.js";
import {readLibrary,writeLibrary} from "../../service/libraryFile.js";

export const insertBook = (book) => {
    const bookData = readLibrary();
    book.id = bookData.length+1;
    bookData.push(book);
    writeLibrary(bookData);
    return book;
};

export const getBookId = (bookId) => {
    const bookData = readLibrary();
    const book = bookData.find((book) => book.id === bookId);
    if (!book) {
        throw new HttpError("Book not found",404);
        }
        return book;
};

export const deleteBookDAO = (bookId) => {
    const bookData = readLibrary();
    const bookIndex = bookData.findIndex((book) => book.id === bookId);
    if (bookIndex === -1) {
        throw new HttpError("Book not found",404);
        }
        bookData.splice(bookIndex, 1);
        writeLibrary(bookData);
};

export const updateBookDAO=()=>{
    const bookData = readLibrary();
    delete book.id;
    const bookIndex = bookData.findIndex((book) => book.id === bookId);

    if (bookIndex === -1) {
        throw new HttpError("Book not found", 404);
    }

    bookData[bookIndex] = { ...bookData[bookIndex], ...book };
    writeLibrary(bookData);
    return bookData[bookIndex];
};