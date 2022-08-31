import { Request, Response } from "express";

import * as services from "../Services/services.js"

export async function battle (req: Request, res: Response){
    const {firstUser, secondUser} = req.body;

    const result = await services.battle(firstUser, secondUser);

    res.send(result);
}