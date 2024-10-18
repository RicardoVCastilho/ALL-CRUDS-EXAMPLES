const {tutor} = require("../src/database");

function deleteTutorByCpf(cpf) {
    const index = tutor.findIndex(t => t.cpf === cpf);

    if (index !== -1) {
        tutor.splice(index, 1);
    } else {
        console.log('Tutor não encontrado');
    }
};

module.exports = {
    deleteTutorByCpf
}