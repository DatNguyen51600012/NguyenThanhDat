import { NextFunction, Request, Response } from "express";

export const apiKeyMiddleware = (req: Request,
    res: Response, next: NextFunction) => {
    const apiKey = req.headers["x-api-key"];

    if (apiKey !== process.env.API_KEY) {
        console.log("'[UNATHORIZED ❌]' Invalid API Key.")
        return res.status(401).json({
            message: 'Invalid API Key'
        });
    }

    return next();
}