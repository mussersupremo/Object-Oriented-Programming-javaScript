class eletrodomestico{
    
    tamanho: number;
    portas: number;
    tempMax: number;
    litros: number;
    tipo: string;
    voltagem: number;
    marca: string;
    valor: number;

    sinopse()
    {
        console.log(`Está é uma Geladeira ${geladeira.tipo} da marca ${geladeira.marca}. Ela tem ${geladeira.tamanho}m de altura, com ${geladeira.portas} portas mais o Freezer, com capacidade de ${geladeira.litros}l e podendo atingir até ${geladeira.tempMax}°C!! E ela está na promoção!! Você pode levar essa geladeira, somente hoje, por R$${geladeira.valor}!!`)
    }
}

const geladeira = new eletrodomestico();
geladeira.tamanho = 2;
geladeira.portas = 2;
geladeira.tempMax = -25;
geladeira.litros = 540;
geladeira.tipo = "Inverter Inox";
geladeira.voltagem = 110;
geladeira.marca = "Brastemp";
geladeira.valor = 8500.00

geladeira.sinopse()