const { internado, leitos } = require('../src/database');

function deleteInternadoByPaciente(paciente) {
    const index = internado.findIndex(i => i.paciente === paciente);

    if (index !== -1) {
        internado.splice(index, 1);
    } else {
        console.log('Paciente não encontrado');
    }
}

function deleteLeitosByNumLeito(numLeito) {
    const index = leitos.findIndex(l => l.numLeito === numLeito);

    if (index !== -1) {
        leitos.splice(index, 1);
    } else {
        console.log('Leito não encontrado');
    }
}

module.exports = {
    deleteInternadoByPaciente,
    deleteLeitosByNumLeito
};