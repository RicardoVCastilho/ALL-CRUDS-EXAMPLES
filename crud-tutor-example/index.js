const { tutor } = require("./src/database");
const { addTutor } = require("./functions/add-function");
const { deleteTutorByCpf } = require("./functions/delete-function");
const { exibirTutor } = require("./functions/read-function");
const controllerUpdate = require("./functions/update-function"); // controller = controla função update
// const {updateTutorByName} = require("./functions/update-function"); 
// const {updateTutorByCpf} = require("./functions/update-function"); 
// const {updateTutorByContact} = require("./functions/update-function"); 
// const {updateTutorByEndereco} = require("./functions/update-function"); 

addTutor("ruan", "2434324234", "23434324@hotmail.com", {
    cidade: "recife",
    bairro: "recife",
    cep: "23423423",
    numero: 34,
    comp: "apt 102"
});
exibirTutor();

deleteTutorByCpf("123.456.789.10");
exibirTutor();

controllerUpdate.updateTutorByName("John", "Lucio");
exibirTutor();
