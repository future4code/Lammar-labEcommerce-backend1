import { Request, Response } from "express";


export default function createCharacter(
    req: Request,
    res: Response
): void {

    const {name, gender, destination} = req.body

    // characters.push({
    //     id: Date.now(),
    //     name,
    //     gender,
    //     destination
    // })



    res.status(201).end()
}