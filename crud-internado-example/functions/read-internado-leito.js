const {internado} = require("../src/database");
const {leitos} = require("../src/database");

function exibirInternado() {
    console.log(internado);
}

function exibirLeitos() {
    console.log(leitos);
}

module.exports = {
    exibirInternado,
    exibirLeitos
}