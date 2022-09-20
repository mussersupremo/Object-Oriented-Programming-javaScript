class pessoa{
    
    nome: string;
    idade: number;
    empresa: string;
    funcao: string;
    horarioInic: number;
    horarioFim: number;
    salario: number;

    sinopse()
    {
        console.log(`Olá, me chamo ${funcionario.nome}, tenho ${funcionario.idade} anos e trabalho na empresa ${funcionario.empresa}, na qual tenho a função de ${funcionario.funcao}. Trabalho de ${funcionario.horarioInic}h ás ${funcionario.horarioFim}h, e recebo um salário de R$${funcionario.salario}!!`)
    }
}

const funcionario = new pessoa();
funcionario.nome = "Lydiane Musser"
funcionario.idade = 30
funcionario.empresa = "My One Confeitaria"
funcionario.funcao = "Cozinheiro Chefe e dona";
funcionario.horarioInic = 8;
funcionario.horarioFim = 19;
funcionario.salario = 5590.00

funcionario.sinopse()