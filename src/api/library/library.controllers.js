import { deleteBookDAO, getBookId } from "./library.dao.js";
import libraryService from "./library.services.js"


export const getAllBooks = async (req, res, next) => {
    try {
        const result = await libraryService.getAllBooks(req);
        res.status(200).json({
            status: "SUCCESS",
            ...result
        });
    } catch (error) {
        next(error);
         }
    };

export const addBook = async (req, res, next) => {
    try {
        const result = await libraryService.addBook(req);

        res.status(200).json({
            status: "SUCCESS",
            message: "Book addes to library sucessfully",
            ...result,
        });

    } catch (error) {
        next(error);
        }
    };

export const getBook = async (req,res,next) => {
    try {
        const result = getBookId(parseInt(req.params.id));
        res.status(200).json({status:"SUCCESS",Data:book});
        } catch (error) {
            next(error);
            }
    };

export const updateBook = async (req,res,next) => {
    try {
        const result = await libraryService.updateBook(req);
        res.status(200).json({status:"SUCCESS",
            message:"Book updated sucessfully",
            ...result,
            });
            } catch (error) {
                next(error);
                }
    }; 

export const deleteBook = async(req,res,next) => {
    try {
        deleteBookDAO(parseInt(req.params.id));
        res.status(200).json({
            status: "SUCCESS",
            message: "Book deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

