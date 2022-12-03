"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCharacter(req, res) {
    const { name, gender, destination } = req.body;
    // characters.push({
    //     id: Date.now(),
    //     name,
    //     gender,
    //     destination
    // })
    res.status(201).end();
}
exports.default = createCharacter;
