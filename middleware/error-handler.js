const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ msg: err.message });
}

export default errorHandlerMiddleware;