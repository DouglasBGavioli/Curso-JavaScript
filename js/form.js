var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) { //funcao anonima, apenas para aquele evento //escutador de evento
    event.preventDefault();// previne os comportamentos padroes 
    var form = document.querySelector("#form-adiciona");
    //Extraindo informacoes do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    //Validando dados antes de enviar a tabela
    var erro = validaPaciente(paciente);
    if (erro.length > 0) {
        exibeMensagensDeErro(erro);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente) {
    //Cria a tr e a td do pacinte
    var pacienteTr = montaTr(paciente);
    //Adicionando o paciente a tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {
    var paciente = { //Criando objeto paciente
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr"); //cirando o elemento td
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome nao pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso invalido");
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura invalida");
    }

    if (paciente.gordura.length == 0) {
        erros.push("O campo gordura nao pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O campo peso nao pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("O campo altura nao pode ser em branco");
    }

    return erros;
}