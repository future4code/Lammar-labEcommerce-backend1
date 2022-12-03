"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deleteCharacter(req, res) {
    const { id } = req.params;
    // const index:number = characters.findIndex(
    //     character => character.id === Number(id)
    // )
    // if(index > -1) characters.splice(index, 1)
    res.status(200).end();
}
exports.default = deleteCharacter;
