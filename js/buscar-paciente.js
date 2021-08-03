var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
    console.log("Buscando");

    var xhr = new XMLHttpRequest(); //XMLHttpRequest objeto responsavel por fazer requisicoes http;

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");//Abrindo e buscando os dados da internet
    xhr.addEventListener("load", function () {//quando a resposta estiver load(carregada) executa a funcao;
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText; //o texto da resposta 
            var pacientes = JSON.parse(resposta); //parseador de JSON para objetos do JavaScript.

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            
            erroAjax.classList.remove("invisivel");
        }
    });
    xhr.send();//Enviando a requisicao
});