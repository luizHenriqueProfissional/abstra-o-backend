function Pessoa(nome){
    this.nome = nome;
}


function Funcionario(nome, cargo){
    this.cargo = cargo;
    Pessoa.call(this, nome);
}

function Estagiario(nome){
    Funcionario.call(this, nome, "Estagiario");
}
function Gerente(nome){
    Funcionario.call(this, nome, "Gerente");
}
function Analista(nome){
    Funcionario.call(this, nome, "Gerente");
}



function Salario (nome, cargo, salario){
    this.salario = salario;

    Funcionario.call(this, nome, cargo);
}

function DevFrontEndJr(nome, cargo){
    Salario.call(this, nome, cargo,"2500");
}
function DevBackEndJr(nome, cargo){
    Salario.call(this, nome, cargo,"5000");
}
function DevFullStack(nome, cargo){
    Salario.call(this, nome, cargo,"9000");
}


const funcionario1 = new DevFrontEndJr("Lucas" ,"Estagiario");
const funcionario2 = new DevBackEndJr("Pedro" ,"Analista");
const funcionario3 = new DevFullStack("Mateus" ,"Gerente");



console.log(funcionario1);
console.log(funcionario2);
console.log(funcionario3);