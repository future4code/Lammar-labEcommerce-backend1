import { Request, Response } from "express";

export default function deleteCharacter(
    req: Request,
    res: Response
): void {
    const { id }  = req.params 

    // const index:number = characters.findIndex(
    //     character => character.id === Number(id)
    // )
    
    // if(index > -1) characters.splice(index, 1)
    

    res.status(200).end()
}