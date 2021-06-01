const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

function checaSeUSuarioUsaCss(usuario) {
    for (let i of usuario) {
        for (let tecnologias of i.tecnologias) {
            if (tecnologias == "CSS") {
                console.log(`O usuario ${i.nome} trabalha com CSS`)
            }
        }
    }
}

checaSeUSuarioUsaCss(usuarios)