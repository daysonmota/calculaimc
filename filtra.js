var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");
    console.log(this.value);

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); // o i é informando que insencitive que minusculo e maiusculo.

            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel"); //Adiciona o hidden no CSS
            } else {
                paciente.classList.remove("invisivel"); //remove o hidden no CSS
            }
        }
    }
    //Remove o display: None quando deletar o que digitei no input. Dai mostra tudo.
    else {
        for (var i = 0; i < pacientes.length; i++) {
            pacientes[i].classList.remove("invisivel");
        }
    }
});