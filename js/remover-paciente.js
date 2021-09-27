var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", (event) => {
    event.target.parentNode.classList.add("fadeOut");

    let confimr = confirm(`Deseja deletar esse registro ?`)
    if (confimr == true) {
        setTimeout(function() {
            event.target.parentNode.remove();
        }, 500);
    }


});