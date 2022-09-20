class gente{
    
    nome: string;
    idade: number;
    empresa: string;
    compra: string
    valor: number

    sinopse()
    {
        console.log(`Olá, me chamo ${cliente.nome}, tenho ${cliente.idade} anos e fui na empresa ${cliente.empresa}, na qual comprei uma ${cliente.compra} e paguei o valor de R$${cliente.valor}!!`)
    }
}

const cliente = new gente();
cliente.nome = "Lydiane Musser"
cliente.idade = 21
cliente.empresa = "Ponto"
cliente.compra = "Geladeira Frost Free 2 portas com saída de água ne porta e Inverter"
cliente.valor = 5000.00

cliente.sinopse()