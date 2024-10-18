const {internado, leitos} = require("./src/database");
const {addInternado, addLeitos} = require("./functions/add-internado-leito");
const {exibirInternado, exibirLeitos} = require("./functions/read-internado-leito");
const controllerUpdate = require("./functions/updates-function");
const {deleteInternadoByPaciente, deleteLeitosByNumLeito} = require("./functions/delete-functions");

//adiciona um paciente internado
addInternado('Leito-2', 'Luke', {
    quadroEvolucao:true,
    tipoDocumento:'Histórico',
    dataDoc:'02/09/2024', 
    nomeDoc:'Paciente: Leon, Tutor: Mateus, Histórico',
    descDoc: 'Este documento possui uma descrição'
});
exibirInternado(); // Exibe todos os internados

addLeitos(1, 8, 'Dipirona', true, '150mg', '3 vezes ao dia'); // Adiciona um leito
exibirLeitos(); // Exibe os leitos

controllerUpdate.updateInternadoByPaciente('Luke', 'Mia'); // Atualiza o nome do paciente
exibirInternado();

controllerUpdate.updateLeitosByMedicamento('Dipirona', 'Aerolin'); // Atualiza o medicamento do leito
exibirLeitos();

deleteInternadoByPaciente('Leon'); // Deleta o internado por nome do paciente
exibirInternado();

deleteLeitosByNumLeito(1); // Deleta leito pelo número do leito
exibirLeitos();
