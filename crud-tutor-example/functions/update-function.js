const {tutor} = require('../src/database');

function updateTutorByName(nome, renomear) {
    tutor[tutor.indexOf(tutor.find(tutor => tutor.nome == nome))].nome = renomear;
};

function updateTutorByCpf(cpf, trocaCpf) {
    tutor[tutor.indexOf(tutor.find(tutor => tutor.cpf == cpf))].cpf = trocaCpf;
};

function updateTutorByContact(contato, trocaContato) {
    tutor[tutor.indexOf(tutor.find(tutor => tutor.contato == contato))].contato = trocaContato;
};

function updateTutorByEndereco(endereco, novoEndereco) {
    tutor[tutor.indexOf(tutor.find(tutor => tutor.endereco == endereco))].endereco = novoEndereco;
};

module.exports = {
    updateTutorByName,
    updateTutorByCpf,
    updateTutorByContact,
    updateTutorByEndereco
}


