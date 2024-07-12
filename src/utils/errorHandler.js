import express from "express";
import { HttpError } from "../ts/class/httpError.js";

export const errorHandler = async (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";

    if (err.name === "ValidationError") {
        return res.status(400).json({ status: "Validation error", message });
    }

    if (err instanceof HttpError) {
        return res.status(err.status).json({ status: "error", message });
    }

    res.status(status).json({ status: "error", message });
};

module.exports = errorHandler;