 import { HttpError } from "../ts/class/httpError.js";

const errorHandler = async (err, req, res, next) => {
    const message = err.message || "Internal Server Error";
    const status = err.status || 500;

    if (err.name === "ValidationError") {
        return res.status(400).json({ status: "Validation error", message });
    }

    if (err instanceof HttpError) {
        return res.status(err.status).json({ status: "error", message });
    }

    res.status(status).json({ status: "error", message });
};

export default errorHandler;