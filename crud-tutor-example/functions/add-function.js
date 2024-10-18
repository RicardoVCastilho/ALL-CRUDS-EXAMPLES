const { tutor } = require("../src/database");

function addTutor(nome, cpf, contato, endereco) {
    const newTutor = {
        nome,
        cpf,
        contato,
        endereco
    };

    tutor.push(newTutor);
}

module.exports = {
    addTutor
};