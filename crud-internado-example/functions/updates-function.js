const {internado, leitos} = require('../src/database');

function updateItemByProperty(array, property, value, newValue) {
    const item = array.find(item => item[property] === value);
    if (item) {
        item[property] = newValue;
    }
}

function updateInternadoByNumeroLeitos(leitoAtual, novoLeito) {
    updateItemByProperty(internado, 'leitos', leitoAtual, novoLeito);
}

function updateInternadoByPaciente(pacienteAtual, novoPaciente) {
    updateItemByProperty(internado, 'paciente', pacienteAtual, novoPaciente);
}

function updateInternadoByDocumentos(documentoAtual, novoDocumento) {
    updateItemByProperty(internado, 'documentos', documentoAtual, novoDocumento);
}

function updateLeitosByNumLeito(numLeito, novoNumLeito) {
    updateItemByProperty(leitos, 'numLeito', numLeito, novoNumLeito);
}

function updateLeitosByPermanencia(permanenciaAtual, novaPermanencia) {
    updateItemByProperty(leitos, 'permanencia', permanenciaAtual, novaPermanencia);
}

function updateLeitosByMedicamento(medicamentoAtual, novoMedicamento) {
    updateItemByProperty(leitos, 'medicamento', medicamentoAtual, novoMedicamento);
}

function updateLeitosByMinistrado(ministradoAtual, novoMinistrado) {
    updateItemByProperty(leitos, 'ministrado', ministradoAtual, novoMinistrado);
}

function updateLeitosByDosagemMed(dosagemMedAtual, novaDosagemMed) {
    updateItemByProperty(leitos, 'dosagemMed', dosagemMedAtual, novaDosagemMed);
}

function updateLeitosByFrequencia(frequenciaAtual, novaFrequencia) {
    updateItemByProperty(leitos, 'frequencia', frequenciaAtual, novaFrequencia);
}

module.exports = {
    updateInternadoByNumeroLeitos,
    updateInternadoByPaciente,
    updateInternadoByDocumentos,
    updateLeitosByNumLeito,
    updateLeitosByPermanencia,
    updateLeitosByMedicamento,
    updateLeitosByMinistrado,
    updateLeitosByDosagemMed,
    updateLeitosByFrequencia
};