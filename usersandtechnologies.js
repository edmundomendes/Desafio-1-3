const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

for (let index = 0; index < usuarios.length; index++) {
   console.log(`${usuarios[index].nome} trabalha com ${usuarios[index].tecnologias}`)
    
}