var pacientes = document.querySelectorAll(".paciente");

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick",function(){ 
//         this.remove();          this faz com que atrele a acão a quem esta sendo escutado o evento, no caso paciente.
//     });
// });

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){//
                                                    //target foca em quem esta sendo clicado no event
    event.target.parentNode.classList.add("fadeOut");// parentNode refere ao pai de quem esta sendo atrelado a ele aqui no caso o pai do td no caso o tr entao exclui toda linha; classList.add adiciona uma classe criada no css.
    setTimeout(function(){
        event.target.parentNode.remove();//Espera 500ms para executar a funcao de dentro, se nao o css e ignorado;
    },500);
    
})