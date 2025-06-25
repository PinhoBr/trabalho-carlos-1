const inptarefa = document.querySelector('#intarefa')
const adicionarBtn = document.querySelector('#adicionarBtn')
const histarefa = document.querySelector('#histarefa')
const contadorTarefas = document.querySelector('#contadorTarefas');
let contador = 1;
function addTarefa(){
    const texto = inptarefa.value
if (histarefa.children.length >= 10) {
            histarefa.removeChild(histarefa.firstElementChild);
        }
     const horario = new Date().toLocaleTimeString()
    const tarefaNova = document.createElement('li')
    
    tarefaNova.textContent = `${contador}. ${texto} – ${horario}` ;
    histarefa.appendChild(tarefaNova)
    
    contadorTarefas.textContent = contador;
    contador++;
}

adicionarBtn.addEventListener('click', addTarefa)


const btnTema = document.querySelector('#btnTema');

btnTema.addEventListener('click', function () {
  document.body.classList.toggle('tema-escuro');
});
