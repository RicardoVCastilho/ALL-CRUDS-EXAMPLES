const internado = [
    {
        leitos: 'Leito 1', // PK
        paciente: 'Leon', // FK
        documentos: {
            quadroEvolucao: false, 
            tipoDocumento: 'Ex.: Prontuário', // prontuário, histórico, alergias, exames (FK)
            dataDoc: '29/08/2024',
            nomeDoc: 'Identificação do paciente + documento',
            descDoc: 'Lorem' // Campo mais próximo ao histórico
        }
    },
];

const leitos = [
    {
        numLeito: 1, // FK, PK
        permanencia: 7, // quantidade de dias que o paciente passou no leito
        medicamento: 'Paracetamol',
        ministrado: false,
        dosagemMed: '25mg',
        frequencia: 'Duas vezes ao dia // 6 em 6h'
    }
];

module.exports = {
    internado,
    leitos
};