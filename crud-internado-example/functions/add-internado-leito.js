const { internado, leitos } = require("../src/database");

function addInternado(leitos, paciente, documentos) {
    const newInternado = {
        leitos,
        paciente,
        documentos
    };

    internado.push(newInternado);
}

function addLeitos(numLeito, permanencia, medicamento, ministrado, dosagemMed, frequencia) {
    const newLeito = {
        numLeito,
        permanencia,
        medicamento,
        ministrado,
        dosagemMed,
        frequencia  
    };

    leitos.push(newLeito);
}

module.exports = {
    addInternado,
    addLeitos
}